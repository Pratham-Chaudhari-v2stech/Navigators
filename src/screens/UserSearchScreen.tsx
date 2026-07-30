import React, {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import SearchBar from '../components/SearchBar';
import UserCard from '../components/UserCard';

import useDebounce from '../hooks/useDebounce';
import useFetch from '../hooks/useFetch';

import { UserResponse } from '../types/user';
import { RootStackParamList } from '../navigations/types';
import { BASE_URL } from '../constants/api';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'UserSearch'
>;

const UserSearchScreen = ({ navigation }: Props) => {
  const [search, setSearch] = useState('');

  const inputRef = useRef<TextInput>(null);

  const debouncedSearch = useDebounce(search, 500);

  const { data, loading, error } = useFetch<UserResponse>(
    `${BASE_URL}/users/search?q=${debouncedSearch}`
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'User Search',
    });

    inputRef.current?.focus();
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }: { item: UserResponse['users'][number] }) => (
      <UserCard user={item} />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <SearchBar
        ref={inputRef}
        value={search}
        onChangeText={setSearch}
        placeholder="Search users..."
      />

      {loading && <ActivityIndicator size="large" />}

      {Boolean(error) && (
        <Text style={styles.error}>
          Something went wrong.
        </Text>
      )}

      {!loading &&
        data &&
        data.users.length === 0 && (
          <Text style={styles.empty}>
            No Users Found
          </Text>
        )}

      <FlatList
        data={data?.users ?? []}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews
      />
    </View>
  );
};

export default UserSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },

  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});