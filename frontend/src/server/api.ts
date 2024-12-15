import axios from 'axios';
import { IUser } from '../types/IUser';

export const $api = axios.create({
  baseURL: 'http://localhost:8002/',
  withCredentials: true,
  // timeout: 1000,
});

export const userRegistration = async (user: IUser) => {
  await $api.post<IUser>('users', user);
};

export const getUser = async (
  param: string,
  value: string
): Promise<IUser | undefined> => {
  const response = await $api.get(`users?${param}=${value}`);
  const userData = response.data ? response.data[0] : null;
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

export const getAllTickets = async () => {
  const response = await $api.get('tickets');
  return response.data;
};

export const getOpenTickets = async () => {
  const response = await $api.get('tickets?completed=false&assigned_to');
  return response.data;
};

export const getTicketByNumber = async (
  number: string | number | undefined
) => {
  const response = await $api.get(`tickets?ticket_number=${number}`);
  return response.data[0];
};

export const searchTickets = async (value: string | number) => {
  const response = await $api.get(`tickets?q=${value}`);
  return response.data;
};

export const setTicketComplete = async (ticketId: string | undefined) => {
  const response = await $api.patch(`tickets/${ticketId}`, {
    completed: true,
  });

  return response;
};
