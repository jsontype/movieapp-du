const ADD_TODO = "todos/ADD_TODO";
const COMPLETED_TODO = "todos/COMPLETED_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

let key = 2;

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  todo: {
    id: key++,
    title: text,
    completed: false,
  },
});
export const completedTodo = (id: number) => ({ type: COMPLETED_TODO, id });
export const deletedTodo = (id: number) => ({ type: DELETE_TODO, id });

const init = [
  {
    id: 1,
    title: "할일목록",
    completed: false,
  },
];

export default function todos(
  state = init,
  action: {
    id: number;
    todo: string;
    type: string;
  }
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case COMPLETED_TODO:
      return state.map((item: any) => {
        return item.id === action.id
          ? { ...item, completed: !item.completed }
          : { ...item };
      });
    case DELETE_TODO:
      return state.filter((item) => {
        return item.id !== action.id;
      });
    default:
      return state;
  }
}
