import React from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {
  fetchUsersRequest,
} from '../redux/users/userSlice';

import {RootState} from '../redux/store';

const UserSearchScreen = () => {
  const dispatch = useDispatch();

  const {
    users,
    loading,
    error,
  } = useSelector(
    (state: RootState) => state.users,
  );

  const handleFetchUsers = () => {
    dispatch(fetchUsersRequest());
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        User Search
      </Text>

      <Button
        title="Fetch Users"
        onPress={handleFetchUsers}
      />

      {loading && (
        <ActivityIndicator />
      )}

      {error && (
        <Text style={styles.error}>
          {error}
        </Text>
      )}

      <FlatList
        data={users}
        keyExtractor={item =>
          item.id.toString()
        }
        renderItem={({item}) => (
          <View style={styles.user}>
            <Text>
              {item.firstName} {item.lastName}
            </Text>

            <Text>
              {item.email}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  user: {
    paddingVertical: 12,
    borderBottomWidth: 1,
  },

  error: {
    marginVertical: 10,
  },
});

export default UserSearchScreen;