# Advanced DevOps Project (Multi-Container Docker Setup)

## Stack
- Frontend service (`frontend/`)
- Backend API service (`backend/`)
- Database service: PostgreSQL (`db/`)
- Nginx reverse proxy (`nginx/`)
- Custom Docker network (`app_network`)
- Named volume for DB persistence (`adv_db_data`)
- Environment variables from `.env`

## One-command run
From anywhere:

```bash
bash ~/Desktop/advance-devops-project/start.sh
```

## Browser access
- Main app: `http://localhost:8080`
- API via Nginx: `http://localhost:8080/api/health`

## Stop services
```bash
cd ~/Desktop/advance-devops-project
docker compose down
```
