import React, { ReactNode, useReducer } from 'react';

import { TodoContext } from './TodoContext';

import {
  initialState,
  todoReducer,
} from '../reducers/todoReducer';

interface Props {
  children: ReactNode;
}

const TodoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(
    todoReducer,
    initialState,
  );

  return (
    <TodoContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;