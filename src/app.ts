import express from 'express';
import userController from './controllers/userController';
import userValidation from './middlewares/userValidation';

const app = express();

app.use(express.json());

app.post(
  '/users',
  userValidation.username,
  userValidation.classe,
  userValidation.level,
  userValidation.password,
  userController.create,
);

export default app;
