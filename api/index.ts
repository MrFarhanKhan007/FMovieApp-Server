import { PrismaClient } from '@prisma/client';
import express from 'express';
const app = express();

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  const movies = await prisma.movies.findMany();

  app.get('/api', function (req, res) {
    res.json(movies);
    prisma;
  });

  app.listen(800);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });