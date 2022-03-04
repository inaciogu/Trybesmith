import { Request, Response, NextFunction } from 'express';
import { Login } from '../@types/user';
import userModel from '../models/userModel';

enum Errors {
  userRequired = 'Username is required',
  passwordRequired = 'Password is required',
  invalidFields = 'Username or password invalid',
}

const requiredFields = (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: Login = req.body;

  if (!username) {
    return res.status(400).json({ error: Errors.userRequired });
  }

  if (!password) {
    return res.status(400).json({ error: Errors.passwordRequired });
  }

  next();
};

const invalidFields = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password }: Login = req.body;

  // validação abaixo foi inspirada no código do Guilherme Gomes https://github.com/tryber/sd-014-b-project-trybesmith/pull/10/commits/b5d9f34be044bf0e143694769b84c9f4d1fd2ed5

  const user = await userModel.login({ username, password });

  if (!user) {
    return res.status(401).json({ error: Errors.invalidFields });
  }

  next();
};

export default {
  requiredFields,
  invalidFields,
};