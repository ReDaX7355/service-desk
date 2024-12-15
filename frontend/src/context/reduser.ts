import { Reducer } from 'react';
import { userDataType } from '../types/AuthTypes';

type initStateType = {
  auth: boolean;
  userData?: userDataType | null;
  accessToken?: string;
  theme: string;
};

type reduserActionType = {
  type: ACTION_TYPES;
  payload?: string;
  userData?: userDataType;
  accessToken?: string;
};

export const defaultState: initStateType = {
  auth: false,
  userData: undefined,
  accessToken: '',
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
      return {
        ...state,
        auth: true,
        userData: action.userData,
        accessToken: action.accessToken,
      };
    case ACTION_TYPES.SIGN_OUT:
      return { ...state, auth: false, userData: null, accessToken: '' };

    default:
      return state;
  }
};
