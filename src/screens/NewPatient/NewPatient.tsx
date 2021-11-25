import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageLayout from '../../common/layouts/ImageLayout';
import { RootStackParamList } from '../../navigation/types';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';

const NewPatient = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'NewPatient'>) => {
  const handleOnPress = () => {
    navigation.navigate('RegisterPatient');
  };

  return (
    <ImageLayout>
      <View style={styles.container}>
        <Text style={styles.title}>Nuevo Paciente</Text>
        <TouchableOpacity style={styles.imageContainer} onPress={handleOnPress}>
          <Image
            style={styles.image}
            source={require('../../res/assets/images/nuevoPaciente.png')}
          />
        </TouchableOpacity>
      </View>
    </ImageLayout>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    marginBottom: 30,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
  },
  imageContainer: {
    backgroundColor: Color.TEXT_SECONDARY,
    borderRadius: 100,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
  },
  image: {
    resizeMode: 'contain',
    height: height * 0.1,
    width: height * 0.1,
    margin: 40,
  },
});

export default NewPatient;
