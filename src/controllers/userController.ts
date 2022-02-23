import { Request, Response } from 'express';
import { UserProps } from '../@types/user';

import userService from '../services/userService';

const create = async (req: Request, res: Response) => {
  const { username, level, classe, password }: UserProps = req.body;
  const token = await userService.create({ username, classe, level, password });
  res.status(201).json(token);
};

export default {
  create,
};
