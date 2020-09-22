# BACKEND

Create default backend API

## Technology

- **Language:** TypeScript
- **Framework:** NodeJS
- **Database:** Mongo
- **Container:** Docker (coming soon)

## Download source

```bash
$ git clone https://github.com/blackinno/backend.git
```

## Development

**Environments setup:**

- `PORT=5000`
- `DATABASE_URL=mongodb://localhost:27017/test`
- `SECRET_JWT=MY_SECRET_JWT`

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

**TODO:**

- [ ] add Docker
- [ ] add Prettier
- [ ] add Eslint
