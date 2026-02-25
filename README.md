## QUIZ frontend app

## Description

A frontend application for the Quiz system built with **React**, **Vite**, and **Material UI**.
The project includes environment variable configuration, code formatting with Prettier, and a clean Git workflow.

---

## Technology stack

- React
- Vite
- Material UI
- TypeScript
- Docker
- Docker Compose
- Husky
- Prettier
- ESLint

---

## Requirements

Before starting, make sure you have installed:

- Node.js (v22.0.0+)
- npm (v10+)
- Git

Check versions:

```bash
node -v
npm -v
git --version
```

---

## Installation and launch

1. Clone the repository and navigate into it:

```bash
git clone https://github.com/ostapichev/quiz-fe-app.git
```

```bash
cd quiz-fe-app
```

2. Install dependencies:

```bash
npm ci
```

3. Create <code>.env</code> file using <code>.env.sample</code>:

```bash
cp .env.sample .env
```

4. Start the server:

```bash
npm run dev
```

5. The application will be available at: http://localhost:5173

---

## Docker Workflow

1. Check Docker installation:

```bash
docker --version
```

2. Build the image:

```bash
docker build -t quiz-app .
```

3. Verify image:

```bash
docker images
```

4. Run container:

```bash
docker run -p 5173:5173 --env-file .env  quiz-app
```

or to run with Docker Compose (Recommended):

```bash
docker compose up --build
```

5. To view running containers:

```bash
docker ps
```

6. Check env file:

```bash
docker exec -it <container_id> env
```

7. The application will be available at: http://localhost:5173

8. To stop a running container:

```bash
docker stop <container_id>
```

or to stop the project with Docker Compose (Recommended):

```bash
docker compose down
```

9. To remove the container:

```bash
docker rm <container_id>
```

---

## Production Build

1. Create optimized build:

```bash
npm run build
```

2. Preview production build:

```bash
npm run preview
```

## Code Formatting

Format code using Prettier:

```bash
npm run format
```

---

## Git Hooks (Husky)

This project uses **Husky** to run code quality checks before commits.

Before each commit, the following checks are executed automatically:

- ESLint validation
- Prettier formatting
- Lint-staged checks

This helps maintain consistent code quality and prevents committing broken or unformatted code.

### Hooks

- **pre-commit** — runs lint and formatting on staged files
- **commit-msg** (optional) — validates commit messages

If a commit fails, fix the reported issues and try again.

To reinstall hooks manually:

```bash
npx husky install
```

## Contacts:

- Author - [Oleh Ostapenko](https://github.com/ostapichev)
- Mail me - ytoxos@gmail.com
- Call me - 38-(093)-721-68-19
