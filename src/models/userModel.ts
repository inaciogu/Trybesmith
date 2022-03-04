import { ResultSetHeader } from 'mysql2';
import { Login, UserProps } from '../@types/user';
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

const login = async ({ username, password }: Login): Promise<Login> => {
  const query = `SELECT * FROM Trybesmith.Users
  WHERE username = ? AND password = ?`;
  const [rows] = await connection.execute(query, [username, password]);
  const [user] = rows as UserProps[];
  return user;
};

export default {
  create,
  login,
};