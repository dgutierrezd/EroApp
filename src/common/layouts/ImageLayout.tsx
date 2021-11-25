import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Color from "../../res/constants/colors";

interface IProps {
  children: React.ReactNode;
}

const ImageLayout = ({ children }: IProps) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[Color.PRIMARY, Color.SECONDARY]}
        style={styles.header}
      >
        <Image
          style={styles.image}
          source={require("../../res/assets/images/grupo.png")}
        />
      </LinearGradient>
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
    flex: 1,
    borderBottomLeftRadius: 30,
    width: "100%",
    backgroundColor: Color.PRIMARY,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 75,
    resizeMode: "contain",
  },
  content: {
    flex: 4,
    backgroundColor: Color.SECONDARY,
  },
  body: {
    flex: 1,
    borderTopRightRadius: 30,
    backgroundColor: Color.TEXT_SECONDARY,
    alignItems: "center",
  },
});

export default ImageLayout;
