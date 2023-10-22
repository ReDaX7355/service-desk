import React, { FC, useReducer, createContext } from 'react';
import { Reducer } from 'react';

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

export const enum ACTION_TYPES {
  SIGN_IN,
  SIGN_OUT,
}

type reduserAction = {
  type: ACTION_TYPES;
  payload?: string;
};

export const mainReduser: Reducer<initState, reduserAction> = (
  state,
  action
): initState => {
  switch (action.type) {
    case ACTION_TYPES.SIGN_IN:
      return { ...state, auth: true, login: action.payload };
    case ACTION_TYPES.SIGN_OUT:
      return { ...state, auth: false, login: '' };

    default:
      return state;
  }
};

interface MainStateProps {
  children?: React.ReactNode;
}

interface contextValueInterface {
  state: typeof defaultState;
  signIn: (login: string) => void;
  signOut: () => void;
}

export const MainContext = createContext<Partial<contextValueInterface>>({});

const MainProvider: FC<MainStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReduser, defaultState);

  const signIn = (login: string) => {
    dispatch({ type: ACTION_TYPES.SIGN_IN, payload: login });
    localStorage.setItem('userName', login);
  };

  const signOut = () => {
    dispatch({ type: ACTION_TYPES.SIGN_OUT });
    localStorage.removeItem('userName');
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
