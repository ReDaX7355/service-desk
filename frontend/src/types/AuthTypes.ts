export type sessionDataType = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    login: string;
    email: string;
    role: string;
  };
};

export type userDataType = {
  id: string;
  login: string;
  email: string;
  role: string;
};

export type ErrorType = {
  message: string;
  errors: string[];
};
