#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

docker compose --env-file .env up --build -d

echo "Services are up. Opening browser at http://localhost:${NGINX_PORT:-8080}"
if command -v open >/dev/null 2>&1; then
  open "http://localhost:${NGINX_PORT:-8080}"
elif command -v xdg-open >/dev/null 2>&1; then
  xdg-open "http://localhost:${NGINX_PORT:-8080}"
else
  echo "Open manually: http://localhost:${NGINX_PORT:-8080}"
fi
