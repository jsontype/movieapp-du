import styles from "./style.module.scss";
import React, { useState, useCallback, memo } from "react";

type TodoProps = {
  id: number;
  title: string;
  completed: boolean;
};

type TodosListProps = {
  todos: TodoProps[];
  onCreate: (text: string) => void;
  onCompleted: (id: number) => void;
  onDelete: (id: number) => void;
};

const TodosList = ({
  todos,
  onCreate,
  onDelete,
  onCompleted,
}: TodosListProps) => {
  // JS
  const [text, setText] = useState("");

  const onSubmit = useCallback(
    (e: { preventDefault: () => void }) => {
      e.preventDefault();
      onCreate(text);
      setText("");
    },
    [text]
  );

  // 추가

  const onChange = useCallback(
    (e: { target: { value: React.SetStateAction<string> } }) => {
      setText(e.target.value);
    },
    [setText]
  );
  const render = todos.map((item: any) => {
    // 삭제

    // 수정

    const titleClass = item.completed ? "checked" : "unchecked";
    return (
      <div key={item.id}>
        <span>#{item.id} / </span>
        <span
          className={styles[titleClass]}
          onClick={() => onCompleted(item.id)}
        >
          제목: {item.title} {item.completed && "👍"}
        </span>
        <span className={styles.deleteBtn} onClick={() => onDelete(item.id)}>
          ❌
        </span>
      </div>
    );
  });

  // XML
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="title"
          type="text"
          onChange={onChange}
          value={text}
          required
        ></input>
        <button type="submit">등록</button>
      </form>
      <div>{render}</div>
    </div>
  );
};
export default memo(TodosList);
