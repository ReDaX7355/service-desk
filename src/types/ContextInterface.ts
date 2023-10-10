import { StateType } from './StateType';

export interface ContextInterface {
  state: StateType;
  signIn: (userId: number) => void;
}
