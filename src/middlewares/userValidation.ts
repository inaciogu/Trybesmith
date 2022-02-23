import { NextFunction, Request, Response } from 'express';
import { UserProps } from '../@types/user';

const username = (req: Request, res: Response, next: NextFunction) => {
  const { username: name }: UserProps = req.body;

  if (!name) {
    return res.status(400).json({ error: 'Username is required' });
  }

  if (typeof name !== 'string') {
    return res.status(422).json({ error: 'Username must be a string' });
  }

  if (name.length <= 2) {
    return res.status(422).json({ error: 'Username must be longer than 2 characters' });
  }

  next();
};

const classe = (req: Request, res: Response, next: NextFunction) => {
  const { classe: userClass }: UserProps = req.body;

  if (!userClass) {
    return res.status(400).json({ error: 'Classe is required' });
  }

  if (typeof userClass !== 'string') {
    return res.status(422).json({ error: 'Classe must be a string' });
  }

  if (userClass && userClass.length <= 2) {
    return res.status(422).json({ error: 'Classe must be longer than 2 characters' });
  }

  next();
};

const level = (req: Request, res: Response, next: NextFunction) => {
  const { level: userLevel }: UserProps = req.body;

  if (!userLevel && userLevel !== 0) {
    return res.status(400).json({ error: 'Level is required' });
  }

  if (typeof userLevel !== 'number') {
    return res.status(422).json({ error: 'Level must be a number' });
  }

  if (userLevel <= 0) {
    return res.status(422).json({ error: 'Level must be greater than 0' });
  }

  next();
};

const password = (req: Request, res: Response, next: NextFunction) => {
  const { password: userPassword }: UserProps = req.body;

  if (!userPassword) {
    return res.status(400).json({ error: 'Password is required' });
  }

  if (typeof userPassword !== 'string') {
    return res.status(422).json({ error: 'Password must be a string' });
  }

  if (userPassword && userPassword.length <= 7) {
    return res.status(422).json({ error: 'Password must be longer than 7 characters' });
  }

  next();
};

export default {
  username,
  classe,
  level,
  password,
};