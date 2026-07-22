import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { useAppDispatch } from '../redux/hooks';
import { addTodo } from '../redux/todoSlice';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    dispatch(
      addTodo({
        id: Date.now().toString(),
        title: trimmedTitle,
        completed: false,
      }),
    );

    setTitle('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Todo..."
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddTodo}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});