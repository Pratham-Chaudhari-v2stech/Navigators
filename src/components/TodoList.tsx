import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import TodoItem from './TodoItem';
import { useAppSelector } from '../redux/hooks';
import { selectTodos } from '../redux/todoSlice';

const TodoList = () => {
  const todos = useAppSelector(selectTodos);

  if (todos.length === 0) {
    return (
      <Text style={styles.empty}>
        No Todos Added
      </Text>
    );
  }

  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <TodoItem todo={item} />}
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