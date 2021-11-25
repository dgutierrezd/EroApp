import { IQuestion } from "../../common/types/types";

const question1: IQuestion = {
  name: "¿Consume jugo de fruta al menos siete veces por semana?",
  weight: 4,
  isYes: undefined,
  color: "#00000029",
};

const question2: IQuestion = {
  name: "¿Consume bebidas ácidas (energizantes, jugos en cajita) diariamente?",
  weight: 25,
  isYes: undefined,
  color: "#035572",
};

const question3: IQuestion = {
  name: "¿Consume yogurt, gaseosa o bebidas hidratantes tres o más veces al día?",
  weight: 10,
  isYes: undefined,
  color: "#707070",
};

const question4: IQuestion = {
  name: "¿Consume dulces o caramelos ácidos o de sabor a limón?",
  weight: 7,
  isYes: undefined,
  color: "#FF8500",
};

const question5: IQuestion = {
  name: "¿Tienes preferencias por el consumo de alimentos con sabor o contenido de vinagre?",
  weight: 7,
  isYes: undefined,
  color: "#0090D0",
};

const question6: IQuestion = {
  name: "¿Dentro de sus hábitos de higiene bucal emplea cepillo eléctrico?",
  weight: 4,
  isYes: undefined,
  color: "#3C4E86",
};

const question7: IQuestion = {
  name: "¿Realiza actividades física acompañada del consumo de bebidas hidratantes ?",
  weight: 7,
  isYes: undefined,
  color: "#66E2FF",
};

const question8: IQuestion = {
  name: "¿Presenta consumo continuo de bebidas alcohólicas de forma diaria o varias veces por semanas a lo largo de un periodo largo de tiempo?",
  weight: 25,
  isYes: undefined,
  color: "#0069A3",
};

const question9: IQuestion = {
  name: "¿Ha presentado síntomas de devolución del alimento o regurgitamiento con una frecuencia diaria o de varias veces en la semana?",
  weight: 1,
  isYes: undefined,
  color: "#FFDA00",
};

const question10: IQuestion = {
  name: "¿Presenta resequedad en la boca de forma frecuente y constante? ¿Falta de saliva?",
  weight: 10,
  isYes: undefined,
  color: "#000000",
};

export const initialQuestions = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10,
];
