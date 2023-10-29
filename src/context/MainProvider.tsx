import React, { FC, useReducer, createContext } from 'react';
import { Reducer } from 'react';
import { IUser } from './../types/IUser';

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

interface MainStateProps {
  children?: React.ReactNode;
}

interface contextValueInterface {
  state: typeof defaultState;
  signIn: (data: IUser | undefined) => void;
  signOut: () => void;
}

export const MainContext = createContext<Partial<contextValueInterface>>({});

const MainProvider: FC<MainStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReduser, defaultState);

  const signIn = (data: IUser | undefined) => {
    dispatch({ type: ACTION_TYPES.SIGN_IN, payload: data });
  };

  const signOut = () => {
    dispatch({ type: ACTION_TYPES.SIGN_OUT });
    localStorage.removeItem('user_login');
  };

  const initValue: contextValueInterface = {
    state,
    signIn,
    signOut,
  };

  return (
    <MainContext.Provider value={initValue}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
