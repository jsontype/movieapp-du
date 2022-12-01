import {useSelector,useDispatch} from 'react-redux'
import TodosList from '.'
import {addTodo,completedTodo,deletedTodo} from '../../modules/todos'
import React from 'react'

export default function TodosContainer() {
  const todos = useSelector((state:any) => state.todos)
  const dispatch = useDispatch()

  const onCreate = (text:string) => dispatch<any>(addTodo(text))
  const onCompleted = (id:number) => dispatch<any>(completedTodo(id))
  const onDelete = (id:number) => dispatch<any>(deletedTodo(id))
  return (
    <TodosList>
      todos = {todos}
      onCreate = {onCreate}
      onCompleted = {onCompleted}
      onDelete = {onDelete}
    </TodosList>
  )
}



