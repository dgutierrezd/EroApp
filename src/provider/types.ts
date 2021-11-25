import { IPatient, IUser } from '../common/types/types'

export interface IState {
  user: IUser | undefined
  patient?: IPatient
}

export const SET_USER = 'SET_USER'
export const SET_PATIENT = 'SET_PATIENT'

export type IActionType =
  | { type: typeof SET_USER; user: IUser }
  | { type: typeof SET_PATIENT; patient: IPatient }
