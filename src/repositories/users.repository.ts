import { omit } from 'lodash';
import { IObjectID } from 'monk';

import { db } from '../infra/mongo';
import { encryptPassword } from '../services/auth/password_hashing';
import { neo4jDriver } from '../infra/neo4j';
import shortid = require('shortid');

const userCollection = db.get<User>('users');

interface CreateUserData {
  displayName: string;
  key: string;
  email: string;
  password: string;
}

class NonUniqueUserEmail extends Error {
  constructor(email: string) {
    super(`Email address ${email} already in use`);
  }
}

export interface User {
  _id: IObjectID;
  email: string;
  displayName: string;
  key: string;
  password_hash: string;
}

export const createUser = async (data: CreateUserData): Promise<User> => {
  const existingUser = await findUserByEmail(data.email);

  if (!!existingUser) {
    throw new NonUniqueUserEmail(data.email);
  }

  const session = neo4jDriver.session();

  const { records } = await session.run(`CREATE (user:User $props) RETURN properties(user) as user`, {
    props: {
      ...omit(data, 'password'),
      _id: shortid.generate(),
      password_hash: await encryptPassword(data.password),
    },
  });

  session.close();

  const record = records.pop();

  if (!record) throw new Error();

  return record.get('user');
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const session = neo4jDriver.session();

  const { records } = await session.run(`MATCH (user:User {email: $email}) RETURN properties(user) AS user`, {
    email,
  });
  session.close();
  const record = records.pop();

  if (!record) return null;

  return record.get('user');
};
