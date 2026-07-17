import React, { useCallback, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import UserCard from '../components/UserCard';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'List'
>;

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export default function ListScreen({ navigation }: Props) {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    try {
      const data = await AsyncStorage.getItem('users');

      if (data) {
        setUsers(JSON.parse(data));
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadUsers();
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList<User>
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <UserCard user={item} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No Registered Users
          </Text>
        }
      />

      <Text
        style={styles.addUser}
        onPress={() => navigation.navigate('Signup')}>
        + Add User
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f5f5f5',
  },

  emptyText: {
    marginTop: 80,
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },

  addUser: {
    backgroundColor: '#2196F3',
    color: 'white',
    textAlign: 'center',
    padding: 15,
    borderRadius: 8,
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
});