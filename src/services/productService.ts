import { ProductProps } from '../@types/product';
import productModel from '../models/productModel';

const create = async ({ name, amount }: ProductProps) => {
  const { insertId } = await productModel.create({ name, amount });
  return { item: { id: insertId, name, amount } };
};

const getAll = async () => {
  const products = await productModel.getAll();
  return products;
};

export default {
  create,
  getAll,
};