# TypeScript Node Template

Easily bootstrap a NodeJS TypeScript server

## Get Started

1. Clone the source

   ```
   git clone https://github.com/moses-20/ts-noode
   ```

2. Install dependencies

   ```
   yarn install
   ```

3. Add your environment variables

   ```
   PORT=4000
   DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA
   ```

   Note: You can add url to any database (SQL or NoSQL)

4. Setup project configurations

   ```
   yarn boot
   ```

5. Startup Prisma Studio

   ```
   yarn db
   ```

6. Run your server in dev mode

   ```
   yarn dev
   ```

7. Happy coding 🎉
