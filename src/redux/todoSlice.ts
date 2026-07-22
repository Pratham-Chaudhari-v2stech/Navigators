import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { Todo,TodoState } from "../types/todos";
import { RootState } from "./store";

const initialState:TodoState ={
    todos:[],
}

const todoSlice= createSlice({
    name:'todos',
    initialState,
    reducers:{
         addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(
        todo => todo.id !== action.payload,
      );
    },
    }
})

export const {addTodo, toggleTodo,deleteTodo} = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;
export default todoSlice.reducer
