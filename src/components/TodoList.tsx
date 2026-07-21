import React from 'react';
import {
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';

import TodoItem from './TodoItem';
import { useTodo } from '../context/TodoContext';

const TodoList = () => {
  const { state } = useTodo();

  if (state.todos.length === 0) {
    return (
      <Text style={styles.empty}>
        No Todos Added
      </Text>
    );
  }

  return (
    <FlatList
      data={state.todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <TodoItem todo={item} />
      )}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  empty: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 40,
    color: 'gray',
  },
});