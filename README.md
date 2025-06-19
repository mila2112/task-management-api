# Task Management API

## 🧰 Stack

- Node.js (TypeScript)
- Express.js
- Prisma ORM
- MySQL
- Serverless Framework
- Swagger (OpenAPI)
- Docker (for MySQL)

## 🛠 Setup Instructions

### 1. Clone the Repository

```bash
git clone <repo-url>
cd task-management-api
```

### 2. Start MySQL Locally with Docker

```bash
docker-compose up -d
```

MySQL will be available on `localhost:3306` with credentials from `.env`.

### 3. Install Dependencies

```bash
npm install
```

### 4. Push Prisma Schema to DB

```bash
npx prisma db push
```

### 5. Run the App Locally

```bash
npm run dev
```

### 6. Access API Documentation

Visit [http://localhost:3000/docs](http://localhost:3000/docs) for Swagger UI.

### 7. Deploy to AWS (Optional)

```bash
sls deploy
```

## 📦 Environment Variables (.env)

```env
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=task_db
MYSQL_USER=task_user
MYSQL_PASSWORD=task_pass
DATABASE_URL="mysql://task_user:task_pass@localhost:3306/task_db"
```
