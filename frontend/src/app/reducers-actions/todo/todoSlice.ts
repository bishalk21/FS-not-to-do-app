import { createSlice } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  name: string;
  done: boolean;
};

const initialSlice: { todos: Todo[] } = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialSlice,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Math.floor(Math.random() * 1000).toString(),
        name: action.payload,
        done: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
