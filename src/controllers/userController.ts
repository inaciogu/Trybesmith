import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { Login, UserProps } from '../@types/user';

import userService from '../services/userService';

const secret = 'segredo';

const create = async (req: Request, res: Response) => {
  const { username, level, classe, password }: UserProps = req.body;
  const user = await userService.create({ username, classe, level, password });
  const token = jwt.sign(user, secret);
  res.status(201).json({ token });
};

const login = async (req: Request, res: Response) => {
  const { username, password }: Login = req.body;
  const user = await userService.login({ username, password });
  const token = await jwt.sign(user, secret);
  res.status(200).json({ token });
};

export default {
  create,
  login,
};
