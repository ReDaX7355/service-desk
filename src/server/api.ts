import axios from 'axios';
import { IUser } from '../types/IUser';

export const $api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
});

export const registerUser = async (user: IUser) => {
  await $api.post<IUser>('users', user);
};

export const getUser = async (
  query: string,
  data: string
): Promise<IUser | undefined> => {
  const res = await $api.get(`users?${query}=${data}`);
  const userData = res.data ? res.data[0] : null;
  return userData;
};

export const getUserByLogin = async (
  login: string
): Promise<IUser | undefined> => {
  return await getUser('login', login);
};

export const getUserByEmail = async (
  email: string
): Promise<IUser | undefined> => {
  return await getUser('email', email);
};
