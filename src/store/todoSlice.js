import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [{ id: uuidv4(), text: "Это ваша первая задача", completed: false }],
    filter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoCompleted: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodoCompleted, editTodo, setFilter } =
  todoSlice.actions;
export default todoSlice.reducer;
