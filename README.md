# BTCFX Trade

This workspace now contains two local development targets:

- A Vite/React frontend in `src/`
- A FastAPI/Postgres backend in `backend/`

## Prerequisites

- Node.js 20+
- Python 3.11+
- Docker Desktop or another Docker-compatible runtime

## Frontend Setup

1. Install npm dependencies:
   `npm install`
2. Start the frontend only:
   `npm run dev:frontend`

The Vite dev server runs on `http://localhost:3000` and proxies `/api/*` requests to FastAPI on `http://localhost:8000`.

## Backend Setup

1. Install Python dependencies into the repo virtual environment:
   `.venv/bin/python -m pip install -r backend/requirements.txt`
2. Copy `backend/.env.example` to `backend/.env` and adjust secrets if needed.
3. Start Postgres on host port `5433`:
   `docker compose up db -d`
4. Apply migrations:
   `npm run backend:migrate`
5. Start the backend:
   `npm run dev:backend`

The FastAPI app serves a health route at `http://localhost:8000/api/v1/health`.

## Full Stack Development

- Start both frontend and backend locally:
  `npm run dev:full`
- Start backend plus Postgres in Docker:
  `docker compose up --build`

## Backend Layout

```text
backend/
  app/
    api/
    auth/
    core/
    db/
    models/
    schemas/
    main.py
  alembic/
  alembic.ini
  Dockerfile
  requirements.txt
```

## Notes

- Gemini-specific config and dependencies were removed from the frontend.
- The React UI still uses mock data for now; API integration is intentionally deferred until the backend contract is stable.
