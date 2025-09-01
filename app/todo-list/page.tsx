import TodoForm from "@/components/TodoForm";
import React from "react";
import Todos from "@/components/Todos";

const ToDoList = () => {
  return (
    <div className="max-w-lg">
      <TodoForm />
      <Todos />
    </div>
  );
};

export default ToDoList;
