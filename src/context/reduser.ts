import { Reducer } from 'react';

export type initState = {
  auth: boolean;
  user?: string | object | undefined;
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
  payload?: string | object;
};

export const mainReduser: Reducer<initState, reduserAction> = (
  state,
  action
): initState => {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN:
      return { ...state, auth: true, user: action.payload };
    case ACTION_TYPES.SIGN_OUT:
      return { ...state, auth: false, user: undefined };

    default:
      return state;
  }
};
