import React, { FC, useReducer, createContext } from 'react';
import { IUser } from './../types/IUser';
import { ACTION_TYPES, defaultState, mainReduser } from './reduser';

interface MainStateProps {
  children?: React.ReactNode;
}

interface contextValuesInterface {
  state: typeof defaultState;
  signIn: (data: IUser | undefined) => void;
  signOut: () => void;
}

export const MainContext = createContext<Partial<contextValuesInterface>>({});

const MainProvider: FC<MainStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReduser, defaultState);

  const signIn = (data: IUser | undefined) => {
    dispatch({ type: ACTION_TYPES.SIGN_IN, userData: data });
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
