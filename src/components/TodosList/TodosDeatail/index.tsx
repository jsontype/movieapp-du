import React from "react"
import { useState } from "react"


export default function TodosDetail({todos,setTodos}:any) {
  const render = todos.map((item:any) => {
    // 삭제
    const onDelete = (id: number) => {
      const result = todos.filter((item:any) => { return item.id !== id })
      setTodos(result)
    }
    // 수정  
    const onChecked = (id:number) => {
      const result = todos.map((item:any) => { return item.id === id ? { ...item, completed: !item.completed } : { ...item }})
      setTodos(result)
    }
    const titleClass = item.completed ? 'checked' : 'unchecked'
    return (
      <div className="todo" key={item.id}>
        <span>#{item.id} / </span>
        <span className={titleClass} onClick={() => onChecked(item.id)}>제목: {item.title} {item.completed && '👍'}</span>
        <span className="deleteBtn" onClick={() => onDelete(item.id)}>❌</span>
      </div>
    )
  })
  return (
    render
  )
}
