import React from "react";
import { GetServerSideProps, NextPage } from "next";

import { getTodosAPI } from "../lib/api/todo";

import TodoList from "../components/TodoList";
import { TodoType } from "../types/todo";

export const getServerSideProps: GetServerSideProps = async () => {
  try{
    const { data } = await getTodosAPI();
    console.log(data);
    return { props: {} };
  } catch(e){
    console.log(e);
    return { props: {} };
  }
};


const index: NextPage = () => {
  return <TodoList todos={[]} />;
};

export default index;