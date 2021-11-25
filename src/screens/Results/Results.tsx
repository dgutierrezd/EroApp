import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PieChart } from "react-native-chart-kit";
import ImageLayout from "../../common/layouts/ImageLayout";
import { RootStackParamList } from "../../navigation/types";
import Color from "../../res/constants/colors";
import Font from "../../res/constants/fonts";
import FontSize from "../../res/constants/fontSizes";

const { height, width } = Dimensions.get("window");

const chartConfig = {
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  // backgroundGradientFrom: "#1E2923",
  // backgroundGradientFromOpacity: 0,
  // backgroundGradientTo: "#08130D",
  // backgroundGradientToOpacity: 0.5,
  // strokeWidth: 3, // optional, default 3
  // barPercentage: 0.5,
};

const Results = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Results">) => {
  const handleOnPress = () => {
    navigation.navigate("RegisterPatient");
  };

  const data = route.params?.questions
    .filter((question) => question.isYes)
    .map((question, index) => {
      return {
        name: `Pregunta ${index + 1}: ${question.name}`,
        weight: question.weight,
        color: question.color,
        legendFontColor: Color.TEXT_QUESTION,
        legendFontSize: FontSize.ANSWER,
      };
    });

  return (
    <ImageLayout>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>
            La probabilidad de presentar riesgo de erosión es de:
          </Text>
          {data && (
            <>
              <View style={styles.questions}>
                <PieChart
                  data={data}
                  width={width}
                  height={280}
                  chartConfig={chartConfig}
                  accessor={"weight"}
                  backgroundColor={"transparent"}
                  paddingLeft={"0"}
                  center={[width / 4, 0]}
                  hasLegend={false}
                />
                <View style={styles.sum}>
                  <Text style={styles.sumText}>
                    {data.reduce((partial_sum, a) => partial_sum + a.weight, 0)}
                    %
                  </Text>
                  <Text style={styles.totalText}>Total</Text>
                </View>
              </View>
              <View style={styles.answersGroup}>
                {data.map((answer, index) => (
                  <View key={index} style={styles.answer}>
                    <View
                      style={[styles.number, { backgroundColor: answer.color }]}
                    >
                      <Text style={styles.numberText}>
                        {answer.weight}
                        <Text style={styles.percentage}>%</Text>
                      </Text>
                    </View>
                    <Text style={styles.answersText}>{answer.name}</Text>
                  </View>
                ))}
              </View>
            </>
          )}
          <TouchableOpacity onPress={handleOnPress}>
            <Image
              style={styles.image}
              source={require("../../res/assets/images/nuevoPaciente.png")}
            />
            <Text style={styles.footerText}>Nuevo Paciente</Text>
          </TouchableOpacity>
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
    marginTop: 44,
    marginHorizontal: 50,
    textAlign: "center",
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: 20,
  },
  questions: {
    alignItems: "center",
    justifyContent: "center",
  },
  sum: {
    backgroundColor: Color.TEXT_SECONDARY,
    borderRadius: 100,
    height: 175,
    width: 175,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  sumText: {
    fontFamily: Font.BOLD,
    fontSize: FontSize.TOTAL,
    color: Color.TEXT_PRIMARY,
    lineHeight: 60,
  },
  totalText: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.ANSWER,
    color: Color.TEXT_PRIMARY,
  },
  answersGroup: {
    alignSelf: "flex-start",
    marginHorizontal: 30,
    width: "70%",
  },
  answer: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",
  },
  answersText: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.ANSWER,
    color: Color.TEXT_QUESTION,
  },
  number: {
    borderRadius: 100,
    width: 45,
    height: 45,
    justifyContent: "center",
    marginRight: 8,
  },
  numberText: {
    fontFamily: Font.BOLD,
    fontSize: FontSize.INFO,
    color: Color.TEXT_SECONDARY,
    padding: 8,
    textAlign: "center",
  },
  percentage: {
    fontSize: FontSize.PERCENTAGE,
  },
  image: {
    resizeMode: "contain",
    height: height * 0.05,
    marginTop: 30,
    marginBottom: 10,
  },
  footerText: {
    textAlign: "center",
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.ANSWER,
    marginBottom: 20,
  },
});

export default Results;
