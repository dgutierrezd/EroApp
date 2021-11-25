import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Alert,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonPrimary from "../../common/components/ButtonPrimary/ButtonPrimary";
import InputPrimary from "../../common/components/InputPrimary/InputPrimary";
import SimpleLayout from "../../common/layouts/SimpleLayout";
import { IUser } from "../../common/types/types";
import { RootStackParamList } from "../../navigation/types";
import { useActions } from "../../provider";
import Color from "../../res/constants/colors";
import Font from "../../res/constants/fonts";
import FontSize from "../../res/constants/fontSizes";

const emailRegex = RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);

const Register = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Register">) => {
  const [isChecked, setChecked] = useState(false);

  const { setUser } = useActions();

  const handleOnPressAbout = () => {
    navigation.navigate("About");
  };

  const handleOnPressPolicies = () => {
    navigation.navigate("PrivacyPolicies");
  };

  const handleOnRegister: SubmitHandler<IUser> = (data) => {
    setUser(data);
    navigation.navigate("NewPatient");
  };

  const onInvalidRegister = () => {
    Alert.alert(
      "Error en el registro",
      errors.email?.type === "pattern"
        ? errors.email.message
        : "Todos los campos deben ser diligenciados"
    );
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      fullName: "",
      occupation: "",
    },
  });

  return (
    <SimpleLayout>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../res/assets/images/logo.png")}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Registro</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
              pattern: {
                value: emailRegex,
                message: "Formato de E-mail incorrecto. Ej: correo@gmail.com",
              },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputPrimary
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="fullName"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputPrimary
                placeholder="Nombre Completo"
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="occupation"
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputPrimary
                placeholder="Especialidad"
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
              />
            )}
          />
          <View style={styles.useTerms}>
            <Checkbox
              style={{ width: 14, height: 14 }}
              value={isChecked}
              onValueChange={setChecked}
            />
            <Text style={styles.useTermsText}>
              Acepto los Términos y Condiciones de Uso y las{" "}
              <Text
                style={styles.privacyPolicies}
                onPress={handleOnPressPolicies}
              >
                Políticas de Privacidad
              </Text>
            </Text>
          </View>
          <ButtonPrimary
            text="Ingresar"
            disabled={!isChecked}
            onPress={handleSubmit(handleOnRegister, onInvalidRegister)}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity onPress={handleOnPressAbout}>
            <Text style={styles.footerText}>Acerca de</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SimpleLayout>
  );
};

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  imageContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: height * 0.13,
    resizeMode: "contain",
    marginBottom: 10,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 30,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
  },
  useTerms: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  useTermsText: {
    paddingLeft: 10,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.REGULAR,
  },
  privacyPolicies: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.REGULAR,
    textDecorationLine: "underline",
  },
  footer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    color: Color.INFO,
    fontFamily: Font.REGULAR,
    textDecorationLine: "underline",
  },
});

export default Register;
