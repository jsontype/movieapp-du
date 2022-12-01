import '../../App.scss'
import React, { useState } from 'react'



export default function TodosList({todos,onCreate,onDelete,onCompleted}:any) {
  // JS
    const [text, setText] = useState('')




  // 추가


  const onChange = (e: { target: { value: React.SetStateAction<string> } }) => {
    setText(e.target.value)
  }    
  const render = todos.map((item: any) => {
    // 삭제

    // 수정

    const titleClass = item.completed ? "checked" : "unchecked";
    return (
      <div className="todo" key={item.id}>
        <span>#{item.id} / </span>
        <span className={titleClass} onClick={() => onCompleted(item.id)}>
          제목: {item.title} {item.completed && "👍"}
        </span>
        <span className="deleteBtn" onClick={() => onDelete(item.id)}>
          ❌
        </span>
      </div>
    );
  });

  // XML
  return (
    <div className="App">
      <form onSubmit={onCreate}>
        <input name="title" type="text" onChange={onChange} value={text} required></input>
        <button type="submit">등록</button>
      </form>
      {render}
    </div>
  )
}