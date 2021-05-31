import React from "react";
import { GetServerSideProps, NextPage } from "next";

import { getTodosAPI } from "../lib/api/todo";
import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

interface IProps {
  todos: TodoType[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  try{
    const { data } = await getTodosAPI();
    return { props: { todos: data } };
  } catch(e){
    console.log(e);
    return { props: { todos: [] } };
  }
};


const index: NextPage<IProps> = ({ todos }) => {
  return <TodoList todos={todos} />;
};

export default index;