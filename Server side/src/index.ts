import express from 'express';
import type { Request, Response } from 'express';
import { validateBody, createUserSchema } from './utils/validateUserInput.js'
import { PrismaClient } from './generated/prisma/client.js';
import { config } from 'dotenv';
import { URLShortener } from './utils/URLShortener.js';
import cors from 'cors';

config();
export const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 3000;


app.post('/shorten', validateBody(createUserSchema), async (req: Request, res: Response) => {
  const { url } = req.body;
  const shortedURL = await URLShortener(url);
  res.status(200).json({
    message: "The link has been successfully shortened!",
    shortedURL: "http://localhost:3000/" + shortedURL,
  });
});

app.get('/:url', async (req: Request, res: Response) => {
  const shortedURL = req.params.url;
  if(!shortedURL) return res.status(400).json({message: "URL is required!"})
  const originalURL = await prisma.uRL.findUnique({where: {shortedURL: shortedURL.toString()}});
  if(!originalURL) return res.status(400).json({message: "URL not found!"});
  await prisma.uRL.update({where: {shortedURL: shortedURL.toString()}, data: {visits: {increment: 1}}});
  res.redirect(`${originalURL.originalURL}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});