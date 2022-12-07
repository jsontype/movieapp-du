import { useSelector, useDispatch } from "react-redux";
import TodosList from ".";
import { addTodo, completedTodo, deletedTodo } from "../../modules/todos";
import React from "react";
import { RootState } from "../../modules";

export default function TodosContainer() {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const onCreate = (text: string) => dispatch(addTodo(text));
  const onCompleted = (id: number) => dispatch(completedTodo(id));
  const onDelete = (id: number) => dispatch(deletedTodo(id));

  return (
    <TodosList
      todos={todos}
      onCreate={onCreate}
      onCompleted={onCompleted}
      onDelete={onDelete}
    />
  );
}
