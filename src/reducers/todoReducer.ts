import { TodoAction, TodoState } from '../types/todos';

export const initialState: TodoState = {
  todos: [],
};

export const todoReducer = (
  state: TodoState,
  action: TodoAction,
): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ],
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(
          todo => todo.id !== action.payload,
        ),
      };

    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : todo,
        ),
      };

    default:
      return state;
  }
};