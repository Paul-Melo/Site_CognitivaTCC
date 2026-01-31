#!/usr/bin/env bash
# Run safe token migration (requires TOKEN_ENCRYPTION_KEY)
# Usage: TOKEN_ENCRYPTION_KEY=... DATABASE_URL=... ./run_token_migration.sh
set -e
if [ -z "$TOKEN_ENCRYPTION_KEY" ]; then
  echo "Please set TOKEN_ENCRYPTION_KEY environment variable"
  exit 2
fi
python3 migrations/migrate_tokens_to_encrypted.py
