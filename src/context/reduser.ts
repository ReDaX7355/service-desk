import { Reducer } from 'react';
import { IUser } from './../types/IUser';

export type initState = {
  auth: boolean;
  user?: IUser | null;
  theme: string;
};

export const defaultState: initState = {
  auth: false,
  user: undefined,
  theme: 'light',
};

export const enum ACTION_TYPES {
  SIGN_IN,
  SIGN_OUT,
}

type reduserAction = {
  type: ACTION_TYPES;
  payload?: string;
  userData?: IUser;
};

export const mainReduser: Reducer<initState, reduserAction> = (
  state,
  action
): initState => {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN:
      return { ...state, auth: true, user: action.userData };
    case ACTION_TYPES.SIGN_OUT:
      return { ...state, auth: false, user: null };

    default:
      return state;
  }
};
