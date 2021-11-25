import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Color from '../../../res/constants/colors';
import Font from '../../../res/constants/fonts';
import FontSize from '../../../res/constants/fontSizes';

interface IProps {
  text: string;
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const ButtonPrimary = ({ text, disabled, onPress }: IProps) => {
  return (
    <TouchableOpacity style={[styles.button, disabled && styles.disabledButton]} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Color.PRIMARY,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '50%'
  },
  disabledButton: {
    opacity: 0.4,
  },
  text: {
    color: Color.TEXT_SECONDARY,
    fontFamily: Font.MEDIUM,
    fontSize: FontSize.BUTTON,
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default ButtonPrimary;
