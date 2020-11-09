# BACKEND

Create default backend API

## Technology

- **Language:** TypeScript
- **Framework:** NodeJS
- **Database:** Mongo
- **Container:** Docker

## Download source

```bash
$ git clone https://github.com/blackinno/backend.git
```

## Environments

**PROD**

- `SECRET_JWT=__YOUR_SECRET_KEY__`
- `NODE_ENV=production`
- `DATABASE_URL=mongodb://__DATABASE_ENDPOINT__`
- `DB_DATABASE=__YOUR_DATABASE__`
- `DB_USER=__YOUR_USER__`
- `DB_PASSWORD=__YOUR_PASSWORD__`
- `DB_SSL=true`

**LOCAL**

- `PORT=5000`
- `DATABASE_URL=mongodb://localhost:27017/test`
- `SECRET_JWT=MY_SECRET_JWT`

## Development

You can change to your environments as `.env.local`

**To run backend:**

1. Install dependencies

   ```bash
   npm install
   ```

2. Run development

   ```bash
   npm run dev
   ```

**Backend endpoint:** _`http//:localhost:5000`_
