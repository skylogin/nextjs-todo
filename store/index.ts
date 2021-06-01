import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { TypedUseSelectorHook, useSelector as useReduxSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todo from "./todo";

const rootReducer = combineReducers({
  todo: todo.reducer,
});

const reducer = (state: any, action: any) => {
  if(action.type === HYDRATE){
    const nextState = {
      ...state,
      ...action.payload,
    };

    if(state.count){
      nextState.count = state.count;
    }
    return nextState;
  }
  return rootReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

const initStore = () => {
  return configureStore({
    reducer,
    devTools: true,
  });
};

export const wrapper = createWrapper(initStore);


declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;