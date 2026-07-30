import React, { memo } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { User } from '../types/user';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: user.image }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.name}>
          {user.firstName} {user.lastName}
        </Text>

        <Text style={styles.email}>
          {user.email}
        </Text>
      </View>
    </View>
  );
};

export default memo(UserCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  content: {
    marginLeft: 12,
    flex: 1,
  },

  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  email: {
    marginTop: 4,
    color: '#666',
    fontSize: 14,
  },
});