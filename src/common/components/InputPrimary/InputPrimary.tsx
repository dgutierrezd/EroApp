import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import Color from '../../../res/constants/colors';
import Font from '../../../res/constants/fonts';
import FontSize from '../../../res/constants/fontSizes';

const InputPrimary = ({ ...props }: TextInputProps) => {

  return (
    <TextInput
      style={styles.inputContent}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  inputContent: {
    color: Color.TEXT_PRIMARY,
    fontSize: FontSize.INPUT,
    fontFamily: Font.REGULAR,
    height: 55,
    width: '85%',
    marginBottom: 38,
    backgroundColor: Color.TEXT_SECONDARY,
    paddingHorizontal: 19,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
  },
});

export default InputPrimary;
