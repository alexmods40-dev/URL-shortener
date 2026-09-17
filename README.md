# Fullstack URL Shortener

A simple, fast URL shortener with link validation and visit counter.

## Features

- URL validation via Zod
- Short code generation with Nanoid
- Redirect & click tracking (visit count)
- Responsive UI with loader and error handling

## Tech Stack

| Category | Technologies |
|---|---|
| Frontend | HTML5, CSS3 (Flexbox, Animations), Vanilla JS (ES6+) |
| Backend | Node.js, Express, TypeScript |
| Database & Tools | PostgreSQL, Prisma ORM, Zod, Nanoid |

## Setup and Run

### Prerequisites

- Node.js and npm installed
- PostgreSQL database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alexmods40-dev/URL-shortener.git
   cd URL-shortener
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables. Create a `.env` file in the root directory:

   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/url_shortener_db?schema=public"
   ```

4. Run database migrations:

   ```bash
   npx prisma db push
   ```

5. Start the server:

   ```bash
   npm run dev
   ```
