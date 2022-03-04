import { ProductProps } from '../@types/product';
import productModel from '../models/productModel';

const create = async ({ name, amount }: ProductProps) => {
  const { insertId } = await productModel.create({ name, amount });
  return { item: { id: insertId, name, amount } };
};

export default {
  create,
};