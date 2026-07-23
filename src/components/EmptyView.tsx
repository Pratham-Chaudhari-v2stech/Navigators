import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/Homestyle';

const EmptyView = () => {
  return (
    <View style={styles.centerContainer}>
      <Text style={styles.message}>No Posts Found</Text>
    </View>
  );
};

export default EmptyView;