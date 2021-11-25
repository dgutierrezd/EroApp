import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ButtonPrimary from '../../common/components/ButtonPrimary/ButtonPrimary';
import InputPrimary from '../../common/components/InputPrimary/InputPrimary';
import ImageLayout from '../../common/layouts/ImageLayout';
import Color from '../../res/constants/colors';
import Font from '../../res/constants/fonts';
import FontSize from '../../res/constants/fontSizes';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useActions } from '../../provider';
import { IPatient } from '../../common/types/types';

const radioButtonsStyles = {
  size: 18,
  color: Color.PRIMARY,
  labelStyle: {
    fontFamily: Font.REGULAR,
    fontSize: FontSize.INPUT,
  },
};

const radioButtonsData: RadioButtonProps[] = [
  {
    id: '1', // acts as primary key, should be unique and non-empty string
    label: 'Femenino',
    value: 'femenino',
    ...radioButtonsStyles,
  },
  {
    id: '2',
    label: 'Masculino',
    value: 'masculino',
    ...radioButtonsStyles,
  },
];

const RegisterPatient = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'RegisterPatient'>) => {
  const { setPatient } = useActions();

  const [radioButtons, setRadioButtons] =
    useState<RadioButtonProps[]>(radioButtonsData);

  const [isDisabled, setIsDisabled] = useState(true);

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      age: '',
      sex: '',
    },
  });

  function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {
    for (let index = 0; index < radioButtonsArray.length; index++) {
      const radioButton = radioButtonsArray[index];
      if (radioButton.selected && radioButton.value) {
        setValue('sex', radioButton.value);
        break;
      }
    }
    setRadioButtons(radioButtonsArray);
    setIsDisabled(false);
  }

  const handleOnRegister: SubmitHandler<IPatient> = (data) => {
    setPatient(data);
    navigation.navigate('Test');
  };

  const onInvalidRegister = () => {
    Alert.alert('Error en el registro', errors.age?.message);
  };

  return (
    <ImageLayout>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={styles.content}>
          <Text style={styles.title}>Registro del Paciente</Text>

          <Controller
            control={control}
            name='age'
            rules={{
              required: { value: true, message: 'El campo Edad es requerido' },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <InputPrimary
                placeholder='Edad'
                defaultValue=''
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                keyboardType='number-pad'
              />
            )}
          />

          <View>
            <RadioGroup
              containerStyle={{ marginBottom: 40 }}
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout='row'
            />
          </View>
          <ButtonPrimary
            text='Consultar'
            onPress={handleSubmit(handleOnRegister, onInvalidRegister)}
            disabled={isDisabled}
          />
        </View>
      </ScrollView>
    </ImageLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 50,
    color: Color.TEXT_PRIMARY,
    fontFamily: Font.BOLD,
    fontSize: FontSize.TITLE,
  },
});

export default RegisterPatient;
