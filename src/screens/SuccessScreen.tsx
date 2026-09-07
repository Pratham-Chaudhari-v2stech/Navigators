import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/AppNavigation';

type SuccessScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Success'
>;

const SuccessScreen = ({ navigation }: SuccessScreenProps) => {
  const handleDone = () => {
    navigation.navigate('Approval');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>✓</Text>

      <Text style={styles.title}>
        Approval Successful
      </Text>

      <Text style={styles.message}>
        Customer approval has been completed successfully.
      </Text>

      <View style={styles.statusContainer}>
        <Text style={styles.status}>
          ✓ Biometric Verified
        </Text>

        <Text style={styles.status}>
          ✓ Signature Captured
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Done"
          onPress={handleDone}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  icon: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },

  statusContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    marginBottom: 30,
  },

  status: {
    fontSize: 16,
    marginBottom: 10,
  },

  buttonContainer: {
    width: '100%',
  },
});

export default SuccessScreen;