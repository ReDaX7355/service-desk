import React, { FC, useReducer, createContext } from 'react';
import { ContextInterface } from '../types/ContextInterface';
import { defaultState } from './defaultState';
import { MainReduser } from './reducer';
import { types } from './actionTypes';

interface MainStateProps {
  children?: React.ReactNode;
}

export const MainContext = createContext<Partial<ContextInterface>>({});

const MainState: FC<MainStateProps> = ({ children }) => {
  const [state, dispatch] = useReducer(MainReduser, defaultState);

  const signIn = (userId: number) => {
    dispatch({ type: types.SIGN_IN, payload: userId });
    window.localStorage.setItem('userId', String(userId));
  };

  const value: ContextInterface = {
    state,
    signIn,
  };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainState;
