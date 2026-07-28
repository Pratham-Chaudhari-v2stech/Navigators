import React, { forwardRef } from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

interface SearchBarProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = forwardRef<TextInput, SearchBarProps>(
  ({ value, onChangeText, placeholder, ...rest }, ref) => {
    return (
      <View style={styles.container}>
        <TextInput
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          autoCapitalize="none"
          autoCorrect={false}
          {...rest}
        />
      </View>
    );
  }
);

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    fontSize: 16,
  },
});