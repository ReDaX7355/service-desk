import { Reducer } from 'react';
import { types } from './types';
import { MainContextType } from '../types/MainContext';
import { ActionType } from '../types/actionType';

export const MainReduser: Reducer<MainContextType, ActionType> = (
  state,
  action
): MainContextType => {
  switch (action.type) {
    case types.SIGN_IN:
      return { ...state, userID: action.payload, auth: true };

    default:
      return state;
  }
};
