import React from "react";
import { GetServerSideProps, NextPage } from "next";

import { getTodosAPI } from "../lib/api/todo";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

import { wrapper } from "../store";
import { todoActions } from "../store/todo";

interface IProps {
  todos: TodoType[];
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async({ store }) => {
    // console.log(store);
    try{
      const { data } = await getTodosAPI();
      store.dispatch(todoActions.setTodo(data));
      return { props: { todos: data } };
    } catch(e){
      console.log(e);
      return { props: { todos: [] } };
    }
  }
);



const index: NextPage<IProps> = ({ todos }) => {
  return <TodoList todos={todos} />;
};

export default index;