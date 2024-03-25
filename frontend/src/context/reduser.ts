import { Reducer } from 'react';
import { IUser } from './../types/IUser';

type initStateType = {
  auth: boolean;
  user?: IUser | null;
  theme: string;
};

type reduserActionType = {
  type: ACTION_TYPES;
  payload?: string;
  userData?: IUser;
};

export const defaultState: initStateType = {
  auth: false,
  user: undefined,
  theme: 'light',
};

export const enum ACTION_TYPES {
  SIGN_IN,
  SIGN_OUT,
}

export const mainReduser: Reducer<initStateType, reduserActionType> = (
  state,
  action
): initStateType => {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN:
      return { ...state, auth: true, user: action.userData };
    case ACTION_TYPES.SIGN_OUT:
      return { ...state, auth: false, user: null };

    default:
      return state;
  }
};
