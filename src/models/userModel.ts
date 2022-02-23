import { ResultSetHeader } from 'mysql2';
import { UserProps } from '../@types/user';
import connection from './connection';

const create = async (user: UserProps): Promise<UserProps> => {
  const query = `INSERT INTO Trybesmith.Users
  (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  const { username, classe, level, password } = user;
  const [r] = await connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
  const { insertId } = r;
  return { insertId, username, classe, level, password };
};

export default {
  create,
};