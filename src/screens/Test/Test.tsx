import React, { useContext, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonPrimary from "../../common/components/ButtonPrimary/ButtonPrimary";
import ImageLayout from "../../common/layouts/ImageLayout";
import Color from "../../res/constants/colors";
import Font from "../../res/constants/fonts";
import FontSize from "../../res/constants/fontSizes";
import Question from "./Question";
import Question1Icon from "../../res/assets/icons/question1.svg";
import Question2Icon from "../../res/assets/icons/question2.svg";
import Question3Icon from "../../res/assets/icons/question3.svg";
import Question4Icon from "../../res/assets/icons/question4.svg";
import Question5Icon from "../../res/assets/icons/question5.svg";
import Question6Icon from "../../res/assets/icons/question6.svg";
import Question7Icon from "../../res/assets/icons/question7.svg";
import Question8Icon from "../../res/assets/icons/question8.svg";
import Question9Icon from "../../res/assets/icons/question9.svg";
import Question10Icon from "../../res/assets/icons/question10.svg";
import { initialQuestions } from "../../res/constants/questions";
import { StateContext } from "../../provider/provider";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

const icons = [
  Question1Icon,
  Question2Icon,
  Question3Icon,
  Question4Icon,
  Question5Icon,
  Question6Icon,
  Question7Icon,
  Question8Icon,
  Question9Icon,
  Question10Icon,
];

const Test = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Test">) => {
  const [questions, setQuestions] = useState(initialQuestions);

  const onHandleChange = (id: number, value: string) => {
    const newQuestions = questions.slice();
    newQuestions[id].isYes = value === "yes";

    setQuestions(newQuestions);
  };

  const hasAllQuestionsAnswer = () => {
    for (let index = 0; index < questions.length; index++) {
      const question = questions[index];

      if (question.isYes === undefined) {
        return false;
      }
    }

    return true;
  };

  const onPressResults = () => {
    navigation.navigate("Results", { questions });
  };

  return (
    <ImageLayout>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Preguntas riesgo de erosión</Text>
          <View style={styles.questions}>
            {questions.map((question, index) => (
              <Question
                key={index}
                id={index}
                question={question}
                Icon={icons[index]}
                onHandleChange={onHandleChange}
              />
            ))}
          </View>
          <ButtonPrimary
            text="Resultados"
            onPress={onPressResults}
            disabled={!hasAllQuestionsAnswer()}
          />
          <View style={styles.footer}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.footerText}>
                Consulte aquí las referencias
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 30,
    marginBottom: 30,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
  },
  questions: {
    width: "100%",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    marginTop: 20,
  },
  footerText: {
    color: Color.PRIMARY_DARK,
    fontFamily: Font.REGULAR,
    textDecorationLine: "underline",
  },
});

export default Test;
