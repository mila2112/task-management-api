# Task Management API

A serverless Node.js REST API for managing tasks using AWS Lambda, Prisma, and MySQL.

## 📦 Features

- Create, read, update, and delete tasks
- Pagination and status filtering
- Jest tests with mocks
- Swagger documentation
- Serverless deploy to AWS Lambda
- GitHub Actions CI/CD pipeline

---


## ✅ Deployment Checklist (for AWS via Serverless)

| Requirement                                        | Required | Notes                                                 |
|----------------------------------------------------|----------|-------------------------------------------------------|
| `serverless.yml` is present at root                | ✔️ Yes    | Defines Lambda entry and deployment configuration     |
| `src/lambda.ts` exports `handler = serverless(app)`| ✔️ Yes    | Required for AWS Lambda to work with Express app      |
| GitHub Secrets: `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` | ✔️ Yes    | Set in GitHub repo → Settings → Secrets               |
| Run: `npx prisma generate`                         | ✔️ Once   | Builds Prisma client code                             |
| Run: `npx prisma db push`                          | ✔️ Once   | Creates DB schema on initial setup                    |
| `package.json` includes serverless and dependencies| ✔️ Yes    | Must include `serverless`, `ts-node`, `jest`, etc.    |

ℹ️ **Tip:** If secrets are missing, the GitHub Action will safely skip deployment.

---

## 🚀 Deployment Instructions for Reviewers

> This project is pre-configured with Serverless and Prisma.

To deploy this project to AWS, follow these steps:

### 1. Configure AWS Credentials

Create an IAM user in AWS with **programmatic access** and the following permissions:
- Lambda
- API Gateway
- S3
- RDS (optional)

Then, add these credentials to **GitHub Secrets**:

| Secret Name              | Description                |
|--------------------------|----------------------------|
| `AWS_ACCESS_KEY_ID`      | Your AWS IAM access key    |
| `AWS_SECRET_ACCESS_KEY`  | Your AWS IAM secret key    |

Go to: `GitHub → Settings → Secrets → Actions → New repository secret`

---

### 2. Trigger Deployment

After secrets are configured, push to `main` branch.  
GitHub Actions (`.github/workflows/deploy.yml`) will automatically deploy the app using:

```bash
npx serverless deploy
```

✅ No additional setup is required. Everything is pre-configured.
