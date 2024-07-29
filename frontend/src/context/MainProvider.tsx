import React, { FC, useReducer, createContext } from 'react';
import { ACTION_TYPES, defaultState, mainReduser } from './reduser';
import { userDataType } from '../types/AuthTypes';

interface MainStateProps {
  children?: React.ReactNode;
}

interface contextValuesInterface {
  state: typeof defaultState;
  signIn: (userData: userDataType, accessToken: string) => void;
  signOut: () => void;
}

export const MainContext = createContext({} as contextValuesInterface);

const MainProvider: FC<MainStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReduser, defaultState);

  const signIn = (userData: userDataType, accessToken: string) => {
    dispatch({ type: ACTION_TYPES.SIGN_IN, userData, accessToken });
  };

  const signOut = () => {
    dispatch({ type: ACTION_TYPES.SIGN_OUT });
  };

  const initValues: contextValuesInterface = {
    state,
    signIn,
    signOut,
  };

  return (
    <MainContext.Provider value={initValues}>{children}</MainContext.Provider>
  );
};

export default MainProvider;
