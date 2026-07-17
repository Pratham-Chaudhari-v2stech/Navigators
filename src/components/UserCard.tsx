import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{user.name}</Text>

      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  email: {
    marginTop: 5,
    fontSize: 15,
    color: '#666',
  },
});