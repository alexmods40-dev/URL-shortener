# Fullstack URL Shortener

A simple, fast URL shortener with link validation and visit counter.

## Tech Stack
- **Frontend:** HTML5, CSS3 (Flexbox, Animations), Vanilla JS (ES6+)
- **Backend:** Node.js, Express, TypeScript
- **Database & Tools:** PostgreSQL, Prisma ORM, Zod, Nanoid

## Features
- URL validation via Zod
- Short code generation with Nanoid
- Redirect & click tracking (visits count)
- Responsive UI with loader and error handling

## Quick Start
1. Clone repo: `git clone <your-link>`
2. Install dependencies: `npm install`
3. Setup `.env` with your `DATABASE_URL`
4. Run migrations: `npx prisma db push`
5. Start server: `npm run dev`