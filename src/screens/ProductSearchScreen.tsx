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
import ProductCard from '../components/ProductCard';

import useDebounce from '../hooks/useDebounce';
import useFetch from '../hooks/useFetch';

import { ProductResponse } from '../types/product';
import { RootStackParamList } from '../navigations/types';
import { BASE_URL } from '../constants/api';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'ProductSearch'
>;

const ProductSearchScreen = ({ navigation }: Props) => {
  const [search, setSearch] = useState('');

  const inputRef = useRef<TextInput>(null);

  const debouncedSearch = useDebounce(search, 500);

  const { data, loading, error } = useFetch<ProductResponse>(
    `${BASE_URL}/products/search?q=${debouncedSearch}`
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Product Search',
    });

    inputRef.current?.focus();
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }: { item: ProductResponse['products'][number] }) => (
      <ProductCard product={item} />
    ),
    []
  );

  return (
    <View style={styles.container}>
      <SearchBar
        ref={inputRef}
        value={search}
        onChangeText={setSearch}
        placeholder="Search products..."
      />

      {loading && <ActivityIndicator size="large" />}

      {error && (
        <Text style={styles.error}>
          Something went wrong.
        </Text>
      )}

      {!loading &&
        data &&
        data.products.length === 0 && (
          <Text style={styles.empty}>
            No Products Found
          </Text>
        )}

      <FlatList
        data={data?.products ?? []}
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

export default ProductSearchScreen;

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