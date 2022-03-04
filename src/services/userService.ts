import userModel from '../models/userModel';
import { UserProps, Login } from '../@types/user';

const create = async (user: UserProps) => {
  const newUser = await userModel.create(user);
  return newUser;
};

const login = async ({ username, password }: Login) => {
  const user = await userModel.login({ username, password });
  return user;
};

const findById = async (id: number) => {
  const foundUser = await userModel.findById(id);
  return foundUser;
};

export default {
  create,
  login,
  findById,
};