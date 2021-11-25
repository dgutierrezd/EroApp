import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonPrimary from '../../common/components/ButtonPrimary/ButtonPrimary';
import SimpleLayout from '../../common/layouts/SimpleLayout';
import { RootStackParamList } from '../../navigation/types';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';
import * as WebBrowser from 'expo-web-browser';

const PrivacyPolicies = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'PrivacyPolicies'>) => {
  const handleOnBack = () => {
    navigation.goBack();
  };

  const handleOnPressInfo = () => {
    WebBrowser.openBrowserAsync(
      'https://www.autonoma.edu.co/politica-de-tratamiento-de-datos-uam'
    );
  };

  return (
    <SimpleLayout>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../res/assets/images/logo.png')}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>
            Política de Protección de datos: Universidad Autónoma de Manizales
            Resolución No. 223 (Diciembre 12 de 2016)
          </Text>
          <View style={styles.useTerms}>
            <Text style={styles.useTermsText}>
              Que la constitución política de Colombia en su artículo 15
              consagra los derechos fundamentales autónomos a la intimidad
              personal y familiar, el derecho al buen nombre y el derecho al
              habeas data, esto es, el derecho a conocer, actualizar y
              rectificar las informaciones que sobre las personas han sido
              recogidas en bancos de datos y en archivos de entidades públicas y
              privada. {' '}
              <Text style={styles.moreInfo} onPress={handleOnPressInfo}>
                Mas información
              </Text>
            </Text>
          </View>
          <ButtonPrimary text="Regresar" onPress={handleOnBack} />
        </View>
      </ScrollView>
    </SimpleLayout>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: height * 0.13,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 20,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
    textAlign: 'center'
  },
  useTerms: {
    marginBottom: 20,
    alignItems: 'flex-start',
    width: '95%',
  },
  useTermsText: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.REGULAR,
  },
  moreInfo: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    textDecorationLine: 'underline',
  },
  referenceText: {
    fontFamily: Font.BOLD,
  },
  privacyPolicies: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.REGULAR,
    textDecorationLine: 'underline',
  },
});

export default PrivacyPolicies;
