import { useEffect} from "react";
const ADD_TODO = "todos/ADD_TODO";
const COMPLETED_TODO = "todos/COMPLETED_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

let id = 2;

export const addTodo = (text:string) => ({
  type:ADD_TODO,
  todo:{
    id:id++,
    text
  }
})
export const completedTodo = (id:number) => ({type:COMPLETED_TODO,id})
export const deletedTodo = (id:number) => ({type:DELETE_TODO,id})

let init:any = []
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => { return res.json() })
    .then((json) => {
      const result = json.filter((item:any) => { return item.userId === 1 })
      init = result
    })
}, [])

export default function todos(state = init ,action: any){
  switch(action.type){
    case ADD_TODO:
      return [...state,action.todo]
    case DELETE_TODO:
      return state.filter((item: { id: any; }) => {
        item.id!==state.id;
      })
    case COMPLETED_TODO:
      return state.map((item: any) => {
        return item.id ===state.id ? 
        {...state,completed:!state.completed}
        :item;
      })
    default: return state

  }
}