import { IActionType, IState } from '.';
import { SET_PATIENT, SET_USER } from './types';

export const appReducer = (state: IState, action: IActionType): IState => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case SET_PATIENT:
      return {
        ...state,
        patient: action.patient,
      };

    default:
      return state;
  }
};
