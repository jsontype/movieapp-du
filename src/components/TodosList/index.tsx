import '../../App.scss'
import React, { useState, useEffect, useRef } from 'react'
import TodoDetail from './TodosDeatail'

interface Todos{
  completed:boolean
  id:number
  title:string
  userId:number
}


export default function TodosList() {
  // JS
    const [todos, setTodos] = useState<Todos[]>([])
    const [text, setText] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => { return res.json() })
      .then((json) => {
        const result = json.filter((item:any) => { return item.userId === 1 })
        setTodos(result)
      })
  }, [])

  const nextId = useRef(21) // todos.length + 1 왜 안 되지?

  // 추가
  const onCreate = (e: { preventDefault: () => void }) => {
    e.preventDefault() // form의 리다이렉팅을 방지
    setTodos([...todos, {
      completed: false,
      id: nextId.current,
      title: text,
      userId: 1,
    }])
    nextId.current++
  }

  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setText(e.target.value)
  }    


  // XML
  return (
    <div className="App">
      <form onSubmit={onCreate}>
        <input name="title" type="text" onChange={onChange} value={text} required></input>
        <button type="submit">등록</button>
      </form>
      <TodoDetail todos={todos} setTodos={setTodos}></TodoDetail>
    </div>
  )
}