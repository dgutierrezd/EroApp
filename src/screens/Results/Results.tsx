import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useEffect } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PieChart, ProgressChart } from "react-native-chart-kit";
import ImageLayout from "../../common/layouts/ImageLayout";
import { RootStackParamList } from "../../navigation/types";
import Color from "../../res/constants/colors";
import Font from "../../res/constants/fonts";
import FontSize from "../../res/constants/fontSizes";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Circle } from "react-native-svg";

const { height, width } = Dimensions.get("window");

const chartConfig = {
  color: (opacity = 1) => `rgb(0, 144, 208, ${opacity})`,
  backgroundGradientFrom: "#000000",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#000000",
  backgroundGradientToOpacity: 0,
  barPercentage: 0.5,
};

const Results = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Results">) => {
  const handleOnPress = () => {
    navigation.navigate("RegisterPatient");
  };

  const dataWeight = () => {
    let tempData = 0;
    route.params?.questions
      .filter((question) => question.isYes)
      .map((question, index) => {
        tempData += question.weight;
      });
    return tempData;
  };

  const data = {
    data: [0, 0, dataWeight() / 100],
    color: [Color.PRIMARY],
  };

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
                <AnimatedCircularProgress
                  size={224}
                  width={10}
                  fill={dataWeight()}
                  fillLineCap="round"
                  tintColor={Color.PRIMARY}
                  backgroundColor={Color.SECONDARY}
                  backgroundWidth={5}
                  padding={10}
                />
                {/* <ProgressChart
                  data={data}
                  width={width}
                  height={280}
                  chartConfig={chartConfig}
                  center={[width / 4, 0]}
                  hasLegend={false}
                  hideLegend={true}
                  strokeWidth={15}
                />*/}
                <View style={styles.sum}>
                  <Text style={styles.sumText}>
                    {data.data.reduce(
                      (partial_sum, a) => (partial_sum + a) * 100,
                      0
                    )}
                    <Text style={{ fontSize: 30, marginBottom: 30 }}>%</Text>
                  </Text>
                </View>
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
    backgroundColor: Color.PRIMARY,
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
    color: Color.TEXT_SECONDARY,
    lineHeight: 60,
  },
  totalText: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.ANSWER,
    color: Color.TEXT_SECONDARY,
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
    alignSelf: "center",
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
