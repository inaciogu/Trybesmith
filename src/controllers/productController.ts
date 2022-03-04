import { Request, Response } from 'express';
import { ProductProps } from '../@types/product';
import productService from '../services/productService';

const create = async (req: Request, res: Response) => {
  const { name, amount }: ProductProps = req.body;
  const product = await productService.create({ name, amount });
  res.status(201).json(product);
};

const getAll = async (_req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

export default {
  create,
  getAll,
};