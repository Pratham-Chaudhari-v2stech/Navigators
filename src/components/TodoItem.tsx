import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Todo } from '../types/todos';
import { useAppDispatch } from '../redux/hooks';
import {
  toggleTodo,
  deleteTodo,
} from '../redux/todoSlice';

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const dispatch = useAppDispatch();

  const handleToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.todoContainer}
        onPress={handleToggleTodo}>
        <Text
          style={[
            styles.todoText,
            todo.completed && styles.completed,
          ]}>
          {todo.title}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleDeleteTodo}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 10,
  },

  todoContainer: {
    flex: 1,
  },

  todoText: {
    fontSize: 18,
  },

  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },

  delete: {
    color: 'red',
    fontWeight: 'bold',
  },
});