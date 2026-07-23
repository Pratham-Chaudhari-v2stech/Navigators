import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/Homestyle';

interface ErrorViewProps {
  message: string;
  onRetry: () => void;
}

const ErrorView: React.FC<ErrorViewProps> = ({message, onRetry}) => {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.errorText}>{message}</Text>

      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryButtonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorView;