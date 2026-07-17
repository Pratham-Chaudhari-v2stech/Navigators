import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  title: string;
};

export default function CustomHeader({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    paddingHorizontal: 20,
    justifyContent: 'center',
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
});