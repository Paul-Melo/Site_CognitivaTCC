1- Provisionar Infra: Criar instância/serviço na Oracle (VM ou container), VCN/NSG, balanceador e preparar zona DNS.

2- Banco e Cache: Provisionar Postgres gerenciado e Redis (recomendado para sessões).

3- DNS/TLS: Apontar DNS para o load balancer e ativar TLS (certificado gerenciado ou Let's Encrypt).

4- Remover credenciais: Remover [calendar-api/client_secret.json](http://_vscodecontentref_/0) do repositório, adicionar ao .gitignore e rotacionar as chaves no Google Cloud.

5- Segredos seguros: Armazenar SECRET_KEY, TOKEN_ENCRYPTION_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, DATABASE_URL, REDIS_URL, CORS_ORIGINS em cofre (Vault/OCI Vault).

6- Forçar criptografia de tokens: Alterar crypto.py / user.py para falhar se TOKEN_ENCRYPTION_KEY não estiver definido (remover fallback que grava token em texto).

7- Sessões seguras: Configurar uso de Redis (REDIS_URL) e forçar SESSION_COOKIE_SECURE = True, SESSION_COOKIE_HTTPONLY = True, SESSION_COOKIE_SAMESITE = 'Lax' em main.py.

8- Desativar debug: Remover/condicionar debug=True em app.run e garantir que Gunicorn é usado em produção (Procfile já presente).

9- Documentação de deploy: Atualizar .env.example e [calendar-api/README_DEPLOY.md](http://_vscodecontentref_/8) com valores obrigatórios e passos Oracle-specific.

10- Empacotamento: Criar Dockerfile (opcional) ou scripts de provisionamento para ambiente virtual e systemd/Gunicorn.
Instalação & Migrations: Em staging, instalar dependências e rodar m[run_alembic.py](http://_vscodecontentref_/9) upgrade head apontando DATABASE_URL.

11- Migrar tokens: Executar migrate_tokens_to_encrypted.py com TOKEN_ENCRYPTION_KEY definido e verificar backups criados pelo script.

12- Testes em staging: Testar /health, fluxo OAuth (/calendar/authorize → /calendar/oauth2callback), agendamento e testes de concorrência (tests/).

13- Monitoramento e backups: Configurar logs centralizados, alertas de 5xx, e backups automáticos do Postgres.

14- Go‑live: Fazer deploy em produção, validar HTTPS, fluxos e CORS; monitorar por 24–72 horas.

15- Pós‑deploy: Rotacionar segredos, agendar remoção de colunas legacy (token) via Alembic e limpar artefatos sensíveis do histórico git se necessário.