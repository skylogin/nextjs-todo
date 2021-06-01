import { createSlice, createStore, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../types/todo";

export const SET_TODO_LIST = "todo/SET_TODO_LIST";

interface TodoReduxState {
  todos: TodoType[];
}

const initialState: TodoReduxState = {
  todos: [],
};

const todo = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo(state, action: PayloadAction<TodoType[]>){
      state.todos = action.payload;
    }
  }
});

export const todoActions = { ...todo.actions };

export default todo;