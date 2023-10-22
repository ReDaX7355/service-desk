export type initState = {
  auth: boolean;
  login?: string;
  theme: string;
};

export const defaultState: initState = {
  auth: false,
  login: '',
  theme: 'light',
};
