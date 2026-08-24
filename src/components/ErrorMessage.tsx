import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage = ({message}: ErrorMessageProps) => {
  if (!message) {
    return null;
  }

  return <Text style={styles.error}>{message}</Text>;
};

const styles = StyleSheet.create({
  error: {
    marginTop: 4,
    fontSize: 13,
    color: '#DC2626',
  },
});

export default ErrorMessage;