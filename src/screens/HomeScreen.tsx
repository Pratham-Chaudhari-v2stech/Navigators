import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/types';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Smart Search
      </Text>

      <Text style={styles.subtitle}>
        Search Products or Users
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('ProductSearch')
        }>
        <Text style={styles.buttonText}>
           Search Products
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('UserSearch')
        }>
        <Text style={styles.buttonText}>
           Search Users
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 16,
    borderRadius: 10,
    marginBottom: 16,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});