import { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { deleteTodo } from "@/redux/reducers-actions/todo/todoSlice";
// import { Todo } from "./NotTodoUI";

// interface TodosListProps {
//   todos: Todo[];
//   setTodos: (todos: Todo[]) => void;
// }

// generics
// type User = {
//   id: number | string;
//   name: string;
// };

// const user3: User = {
//   id: 1,
//   name: "John",
// };

// type UserInfo<TypeID> = {
//   id: TypeID;
//   name: string;
// };

// const user: UserInfo<number> = {
//   id: 1,
//   name: "John",
// };

// const user2: UserInfo<string> = {
//   id: "1",
//   name: "John",
// };

const TodosList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const [completed, setCompleted] = useState(false);

  const handleDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="text-center">
      <h2>Todos</h2>
      {todos.length === 0 ? (
        <p>No Todos Found</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={completed ? todo.done : true}
                onChange={() => setCompleted(!completed)}
              />
              {todo.name}
              <Button
                onClick={() => handleDeleteTodo(todo.id)}
                className="ml-2"
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodosList;
