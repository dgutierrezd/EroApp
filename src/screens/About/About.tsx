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

const About = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'About'>) => {
  const handleOnBack = () => {
    navigation.goBack();
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
          <Text style={styles.title}>Acerca de (v 2.1.1.)</Text>
          <View style={styles.useTerms}>
            <Text style={styles.useTermsText}>
              El app de probabilidad de riesgo para caries dental es una
              aplicación basada en la evidencia científica que busca ayudar al
              odontólogo general y especialista a determinar una probabilidad
              cuantificable del riesgo de caries, para que lo pueda considerar
              en su plan de tratamiento y compartir con su paciente. Los
              artículos fundamentales de la app son:{'\n\n'}
              <Text style={styles.referenceText}>
                Nobre MA, Sezinando A, Fernandes I, Maló P. Risk Score to
                Predict Dental Caries in Adult Patients for Use in the Clinical
                Setting. J Clin Med. 2019; 8(2):203{'\n\n'}
              </Text>
              <Text style={styles.referenceText}>
                Brons-Piche E, Eckert GJ, Fontana M. Predictive Validity of a
                Caries Risk Assessment Model at a Dental School. J Dent Educ.
                2019; 83(2):144-150.{'\n\n'}
              </Text>
              <Text style={styles.referenceText}>
                Mejàre I, Axelsson S, Dahlén G, Espelid I, Norlund A, Tranæus S,
                Twetman S. Caries risk assessment. A systematic review. Acta
                Odontol Scand. 2014;72(2):81-91{'\n\n\n'}
              </Text>
              Autores académicos:{'\n'}Odontólogas Olga Patricia López Soto y
              Adriana Marcela López Macías.{'\n\n'}Autores ingenieros:{'\n'}
              Ingeniero de Sistemas Carlos Andres Zapata Ospina y Joven
              Investigador Nicolas Forero Segovia
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
  referenceText: {
    fontFamily: Font.BOLD,
  },
  privacyPolicies: {
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.REGULAR,
    textDecorationLine: 'underline',
  },
});

export default About;
