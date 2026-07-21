export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
}

export type TodoAction =
  | {
      type: 'ADD_TODO';
      payload: string;
    }
  | {
      type: 'DELETE_TODO';
      payload: number;
    }
  | {
      type: 'TOGGLE_TODO';
      payload: number;
    };