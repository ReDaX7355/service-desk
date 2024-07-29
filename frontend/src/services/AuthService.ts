import { AxiosResponse } from 'axios';
import { $api } from '../server/api';
import { sessionDataType } from '../types/AuthTypes';
import { IUser } from '../types/IUser';

class AuthService {
  async loginUser(
    login: string,
    password: string
  ): Promise<AxiosResponse<sessionDataType>> {
    const response = await $api.post<sessionDataType>('auth/login', {
      login,
      password,
    });
    return response;
  }

  async registerUser(data: IUser): Promise<AxiosResponse> {
    const response = await $api.post('auth/registration', data);
    return response.data;
  }

  async logoutUser(): Promise<void> {
    await $api.post('auth/logout');
  }
}

export default new AuthService();
