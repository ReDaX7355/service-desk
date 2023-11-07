import { getUserByLogin, userRegistration, getUserByEmail } from './../server/api';
import { v4 } from 'uuid';
import { SignInForm, SignUpForm } from './../types/FormInterfaces';

class AuthService {
  response = {
    error: '',
    data: undefined,
  };

  async loginUser(data: SignInForm) {
    const candidate = await getUserByLogin(data.login);

    if (!candidate) {
      return {
        ...this.response,
        error: 'Неверный логин или пароль!',
      };
    } else {
      if (candidate.password == data.password) {
        return { ...this.response, data: candidate };
      } else {
        return {
          ...this.response,
          error: 'Неверный логин или пароль!',
        };
      }
    }
  }

  async registration(data: SignUpForm) {
    const userByLogin = await getUserByLogin(data.login);
    const userByEmail = await getUserByEmail(data.email);

    if (userByLogin) {
      return {
        ...this.response,
        error: 'Такой пользователь уже существует!',
      };
    }
    if (userByEmail) {
      return {
        ...this.response,
        error: 'Пользователь с таким Email уже существует!',
      };
    } else {
      const newUser = {
        id: v4(),
        // eslint-disable-next-line camelcase
        full_name: data.full_name,
        email: data.email,
        login: data.login,
        password: data.password,
        role: 'user',
      };

      userRegistration(newUser);

      return {
        ...this.response,
        data: newUser,
      };
    }
  }
}

export default new AuthService();
