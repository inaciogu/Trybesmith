import dotEnv from 'dotenv';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel';
import { UserProps } from '../@types/user';

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

export default {
  create,
};