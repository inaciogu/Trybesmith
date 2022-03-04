import dotEnv from 'dotenv';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { UserProps, Login } from '../@types/user';

dotEnv.config();

const secret = process.env.JWT_SECRET || 'segredo';

type Token = {
  token: string;
};

const create = async (user: UserProps): Promise<Token> => {
  const newUser = await userModel.create(user);
  const token = jwt.sign(newUser, secret);
  return { token };
};

const login = async ({ username, password }: Login): Promise<Token> => {
  await userModel.login({ username, password });
  const token = jwt.sign({ data: username }, secret);
  return { token };
};

export default {
  create,
  login,
};