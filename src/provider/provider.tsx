import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  Dispatch,
  useEffect,
  useReducer,
} from 'react';
import { IState, IActionType } from './types';
import { appReducer } from './reducer';

export const StateContext = createContext({} as IState);
export const DispatchContext = createContext<Dispatch<IActionType>>(() => {});

export const ContextProvider: React.FC<{initialState: IState}> = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    if (state.user) {
      AsyncStorage.setItem('@storage_Key', JSON.stringify(state.user))
    }
  }, [state]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
