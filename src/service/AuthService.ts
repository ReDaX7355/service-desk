class AuthService {
  async loginUser(login: string, password: string) {
    const data = { login, password };
    return await { auth: true, error: '', data };
  }
}

export default new AuthService();
