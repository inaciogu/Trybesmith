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

const getAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Products';
  const [rows] = await connection.execute(query);
  return rows;
};

export default {
  create,
  getAll,
};