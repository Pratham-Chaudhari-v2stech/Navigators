import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const OfflineBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>⚠ No Internet Connection</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#D32F2F',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default OfflineBanner;