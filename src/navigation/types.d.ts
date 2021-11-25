import { IQuestion } from "../common/types/types";

export type RootStackParamList = {
  Register: undefined
  About: undefined
  PrivacyPolicies: undefined
  NewPatient: undefined
  RegisterPatient: undefined
  Test: undefined
  Results: {questions: IQuestion[]} | undefined
}
