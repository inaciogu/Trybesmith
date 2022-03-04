import { ResultSetHeader } from 'mysql2';
import { ProductProps } from '../@types/product';
import connection from './connection';

const create = async ({ name, amount }: ProductProps): Promise<ProductProps> => {
  const query = `INSERT INTO Trybesmith.Products (name, amount)
  VALUES (?, ?)`;
  const [rows] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  const { insertId } = rows;
  return { insertId, name, amount };
};

export default {
  create,
};