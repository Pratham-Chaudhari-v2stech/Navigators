import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
  loading: boolean;
}

const SearchBar = ({
  value,
  onChangeText,
  onSearch,
  loading,
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter city name"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        autoCapitalize="words"
        returnKeyType="search"
        onSubmitEditing={onSearch}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={onSearch}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Search</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#2196F3',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
