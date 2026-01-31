#!/usr/bin/env bash
# Run Alembic migrations using the project's runner
# Usage: DATABASE_URL=... ./run_migrations.sh
set -e
if [ -z "$DATABASE_URL" ]; then
  echo "Please set DATABASE_URL environment variable"
  exit 2
fi
python3 migrations/run_alembic.py upgrade head
