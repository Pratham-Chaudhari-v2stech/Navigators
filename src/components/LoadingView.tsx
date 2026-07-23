import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {styles} from '../styles/Homestyle';

const LoadingView = () => {
  return (
    <View style={styles.centerContainer}>
      <ActivityIndicator size="large" />

      <Text style={styles.message}>Loading Posts...</Text>
    </View>
  );
};

export default LoadingView;