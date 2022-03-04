import express from 'express';
import userController from './controllers/userController';
import userValidation from './middlewares/userValidation';
import loginValidation from './middlewares/loginValidation';
import JwtAuth from './auth/JwtAuth';
import productController from './controllers/productController';
import productValidation from './middlewares/productValidation';

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

app.post(
  '/login',
  loginValidation.requiredFields,

  loginValidation.invalidFields,

  userController.login,
);

app.post(
  '/products', 
  JwtAuth, 
  productValidation.productName, 
  productValidation.productAmount,
  productController.create,
);

app.get('/products', JwtAuth, productController.getAll);

export default app;
