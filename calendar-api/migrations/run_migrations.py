"""Runner simples de migrations SQL.

Uso:
  - Configure `DATABASE_URL` no ambiente (ex.: export DATABASE_URL=postgresql://user:pass@host:5432/dbname)
  - Execute: python run_migrations.py

O script criará uma tabela `migrations_applied` para controlar migrações aplicadas e executará os arquivos
SQL presentes em `calendar-api/migrations/` na ordem lexicográfica.

Atenção: Backup do banco é recomendado antes de executar.
"""
import os
import sys
from sqlalchemy import create_engine, text
from sqlalchemy.exc import SQLAlchemyError

MIGRATIONS_DIR = os.path.dirname(__file__)


def get_database_url():
    url = os.environ.get('DATABASE_URL')
    if not url:
        print('ERRO: variável de ambiente DATABASE_URL não encontrada. Defina-a antes de executar.')
        sys.exit(1)
    return url


def ensure_migrations_table(engine):
    with engine.connect() as conn:
        conn.execute(text('''
            CREATE TABLE IF NOT EXISTS migrations_applied (
                id SERIAL PRIMARY KEY,
                filename TEXT UNIQUE NOT NULL,
                applied_at TIMESTAMP DEFAULT now()
            )
        '''))
        conn.commit()


def get_applied_migrations(engine):
    with engine.connect() as conn:
        result = conn.execute(text('SELECT filename FROM migrations_applied'))
        applied = {row[0] for row in result.fetchall()}
    return applied


def apply_migration_file(engine, path, filename):
    with open(path, 'r', encoding='utf-8') as f:
        sql = f.read()
    print(f'Aplicando {filename}...')
    try:
        with engine.begin() as conn:
            conn.execute(text(sql))
            conn.execute(text("INSERT INTO migrations_applied (filename) VALUES (:fn)"), {'fn': filename})
        print(f'Aplicado {filename}')
    except SQLAlchemyError as e:
        print(f'Erro ao aplicar {filename}: {e}')
        raise


def main():
    db_url = get_database_url()
    engine = create_engine(db_url)

    ensure_migrations_table(engine)
    applied = get_applied_migrations(engine)

    files = sorted([f for f in os.listdir(MIGRATIONS_DIR) if f.endswith('.sql')])
    pending = [f for f in files if f not in applied]

    if not pending:
        print('Nenhuma migration pendente.')
        return

    for filename in pending:
        path = os.path.join(MIGRATIONS_DIR, filename)
        apply_migration_file(engine, path, filename)

    print('Todas as migrations pendentes foram aplicadas.')


if __name__ == '__main__':
    main()
