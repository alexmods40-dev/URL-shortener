import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

export const createUserSchema = z.object({
    url: z.string().url(),
});

type CreateUserInput = z.infer<typeof createUserSchema>;

export function validateBody<T extends z.ZodTypeAny>(schema: T) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error: unknown) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation failed',
          details: error.issues,
        });
      }
      next(error);
    }
  };
}