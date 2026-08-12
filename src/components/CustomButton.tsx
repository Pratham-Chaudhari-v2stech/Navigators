import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
}

const CustomButton = ({ title, style, ...props }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style]}
      {...props}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 8,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: Colors.white,
    fontSize: Fonts.size.md,
    fontWeight: Fonts.weight.semiBold,
  },
});
