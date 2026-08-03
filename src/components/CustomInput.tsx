import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

interface CustomInputProps extends TextInputProps {
  label: string;
}

const CustomInput = ({ label, style, ...props }: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={[styles.input, style]}
        placeholderTextColor={Colors.placeholder}
        {...props}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  label: {
    fontSize: Fonts.size.sm,
    fontWeight: Fonts.weight.medium,
    color: Colors.textPrimary,
    marginBottom: 8,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: Fonts.size.md,
    color: Colors.textPrimary,
    backgroundColor: Colors.surface,
  },
});