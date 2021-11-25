import { useContext } from 'react';
import { SET_PATIENT, SET_USER } from './types';
import { DispatchContext } from './provider';
import { IPatient, IUser } from '../common/types/types';

export const useActions = () => {
  const dispatch = useContext(DispatchContext);

  const setUser = (user: IUser) => {
    dispatch({
      type: SET_USER,
      user,
    });
  };

  const setPatient = (patient: IPatient) => {
    dispatch({
      type: SET_PATIENT,
      patient,
    });
  };

  return {
    setUser,
    setPatient,
  };
};
