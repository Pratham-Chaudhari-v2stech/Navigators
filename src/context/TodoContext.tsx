import { createContext, useContext } from 'react';
import { Dispatch } from 'react';

import { TodoAction, TodoState } from '../types/todos';

interface TodoContextType {
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
}

export const TodoContext =
  createContext<TodoContextType | null>(null);

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (!context) {
    throw new Error(
      'useTodo must be used inside TodoProvider',
    );
  }

  return context;
};
