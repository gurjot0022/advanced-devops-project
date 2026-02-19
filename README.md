# Advanced DevOps Project Report (Part 1 to Part 6)

This report is arranged serially according to the required assignment parts, with screenshots and short explanations.

## PART 1 - Linux System Setup & Security

### 1. User creation and Docker group permissions
Short explanation: `devopsuser` was created and added to the `docker` group so Docker commands can run without `sudo` for that user.

![Part 1 - User and Docker group](./devops-report-assets/part1-user-and-docker-group.png)

### 2. Firewall (UFW) configured to allow only 22, 80, 443
Short explanation: UFW was enabled with inbound rules for SSH (22), HTTP (80), and HTTPS (443), matching the requirement.

![Part 1 - UFW configuration](./devops-report-assets/part1-ufw-config.png)

### 3. Docker and Docker Compose installation check
Short explanation: Version output confirms Docker and Docker Compose are installed.

![Part 1 - Docker versions](./devops-report-assets/part1-docker-versions.png)

Note: `systemctl enable docker` is not visible in the provided screenshots.

## PART 2 - Git & GitHub Workflow

### Branching strategy and remote branch push
Short explanation: `develop`, `feature/frontend`, and `feature/backend` branches were created and pushed. GitHub PR creation links are visible in terminal output.

![Part 2 - Branching and PR links](./devops-report-assets/part2-branching-and-pr-links.png)

Note: Screenshots for 10 commits, `.gitignore`, `README.md` commit, tag `v1.0`, and main branch protection are not visible in the provided set.

## PART 3 - Multi-Container Docker Setup

### 1. Project structure in VS Code
Short explanation: Separate service folders and core files are present (`backend`, `frontend`, `nginx`, `.env`, `docker-compose.yml`).

![Part 3 - Project structure](./devops-report-assets/part3-project-structure.png)

### 2. Compose services running
Short explanation: `docker compose ps` shows all containers running (`adv_frontend`, `adv_backend`, `adv_db`, `adv_nginx`) and Nginx port mapping `8080 -> 80`.

![Part 3 - Docker Compose status](./devops-report-assets/part3-compose-ps.png)

Note: Browser-access screenshot and explicit DB persistence after restart screenshot are not visible in the provided set.

## PART 4 - Networking & Debugging

### 1. Open ports and running services
Short explanation: `docker compose ps` output confirms exposed host port `0.0.0.0:8080->80/tcp`.

![Part 4 - Open ports via compose](./devops-report-assets/part3-compose-ps.png)

### 2. Docker network inspection and logs
Short explanation: `docker network ls` shows custom network `advance-devops-project_app_network` with `bridge` driver, and logs are viewed using `docker compose logs -f`.

![Part 4 - Network and logs](./devops-report-assets/part4-network-and-logs.png)

### 3. Logs with proper tail size
Short explanation: `docker compose logs -f --tail=200` displays recent logs from all containers.

![Part 4 - Logs tail 200](./devops-report-assets/part4-logs-tail-200.png)

### 4. localhost vs 0.0.0.0
Short explanation: `localhost` binds to loopback only; `0.0.0.0` binds all interfaces.

![Part 4 - localhost vs 0.0.0.0](./devops-report-assets/part4-localhost-vs-0.0.0.0.png)

## PART 5 - Production Best Practices

### Applied practices
1. Pinned image tags used (example: specific versions like `nginx:1.27-alpine`, `postgres:16-alpine`, `node:20-alpine`) instead of `latest`.
2. Credentials moved to environment variables via `.env`.
3. Recommended cleanup command: `docker system prune -a --volumes` (use carefully in non-production/local cleanup).
4. Why not `latest`: It is non-deterministic and can break reproducibility, rollback safety, and predictable deployments.

Note: No dedicated screenshot for Part 5 was included in the provided images.

## PART 6 - Monitoring

### 1. CPU and memory monitoring
Short explanation: `docker stats` is used to monitor live CPU and memory usage per container.

![Part 6 - docker stats](./devops-report-assets/part6-docker-stats.png)

### 2. Proper log viewing
Short explanation: `docker compose logs -f --tail=200` gives controlled, readable real-time logs.

![Part 6 - Logs tail 200](./devops-report-assets/part4-logs-tail-200.png)

### 3. Memory exhaustion (OOM) explanation
Short explanation: When memory is exhausted, the kernel may invoke the OOM killer and terminate one or more container processes to recover memory.

---

## Quick Run Commands (for demo)

```bash
cd ~/Desktop/advance-devops-project
docker compose --env-file .env up --build -d
docker compose ps
docker compose logs -f --tail=200
docker stats
```

App URL: <http://localhost:8080>
