# vCard POC

Digital business card generator with HubSpot integration.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env.local`:
```
DATABASE_URL=postgresql://localhost:5432/vcard_dev
```

3. Generate and run migrations:
```bash
npm run db:generate
npm run db:push
```

4. Seed the database (optional):
```bash
npm run db:seed
```

5. Run the development server:
```bash
npm run dev
```

## Railway Deployment

1. Create a new Railway project
2. Add a PostgreSQL database service
3. Add your application service
4. Set the `DATABASE_URL` environment variable from the PostgreSQL service
5. Deploy from GitHub or using Railway CLI

## Database Commands

- `npm run db:generate` - Generate migration files
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run migrations
- `npm run db:studio` - Open Drizzle Studio
- `npm run db:seed` - Seed database with test data
