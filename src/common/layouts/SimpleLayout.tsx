import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import Color from "../../res/constants/colors";

interface IProps {
  children: React.ReactNode;
}

const SimpleLayout = ({ children }: IProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Color.PRIMARY, Color.SECONDARY]}
        style={styles.header}
      />
      <View style={styles.content}>
        <View style={styles.body}>{children}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.TEXT_SECONDARY,
  },
  header: {
    flex: 0.9,
    borderBottomRightRadius: 30,
    width: "100%",
    backgroundColor: Color.PRIMARY,
  },
  content: {
    flex: 7,
    backgroundColor: Color.SECONDARY,
  },
  body: {
    flex: 1,
    borderTopRightRadius: 30,
    backgroundColor: Color.TEXT_SECONDARY,
    alignItems: "center",
  },
});

export default SimpleLayout;
