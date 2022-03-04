import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

const secret = 'segredo';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token: string | undefined = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    verify(token, secret);
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  next();
};
