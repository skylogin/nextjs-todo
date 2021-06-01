import React from "react";
import { GetServerSideProps, NextPage } from "next";

import { getTodosAPI } from "../lib/api/todo";
import TodoList from "../components/TodoList";

import { wrapper } from "../store";
import { todoActions } from "../store/todo";


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async({ store }) => {
    // console.log(store);
    try{
      const { data } = await getTodosAPI();
      store.dispatch(todoActions.setTodo(data));
      return { props: { } };
    } catch(e){
      console.log(e);
      return { props: { } };
    }
  }
);



const index: NextPage = () => {
  return <TodoList />;
};

export default index;