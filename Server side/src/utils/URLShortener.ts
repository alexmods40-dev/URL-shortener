import { nanoid } from 'nanoid';
import { prisma } from '../index.js';

export async function URLShortener(url: string) {
    const shortedURL = nanoid(8);
    await prisma.uRL.create({data: {
        originalURL: url,
        shortedURL: shortedURL,
    }});
    return shortedURL;
}