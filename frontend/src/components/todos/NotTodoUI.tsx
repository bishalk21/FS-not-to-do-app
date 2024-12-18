import TodosList from "./TodosList";
import AddTodo from "./AddTodo";

export type Todo = {
  id: number;
  name: string;
  done: boolean;
};

// generics
// type NotTodoUIProps<TypeId> = {
//   id: TypeId;
// };

// const NotTodoUIGen: React.FC<NotTodoUIProps<number>> = ({ id }) => {};

// type user<typeId> = {
//   id: typeId;
//   name: string;
// };

// const user1: user<number> = {
//   id: 1,
//   name: "John",
// };

// const user2: user<string> = {
//   id: "1",
//   name: "John",
// };

const NotTodoUI: React.FC = () => {
  // const [inputValue, setInputValue] = useState("");
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (!inputValue) {
  //     return;
  //   }
  //   const newTodo: Todo = {
  //     id: Math.floor(Math.random() * 1000),
  //     name: inputValue,
  //     done: false,
  //   };
  //   setTodos([...todos, newTodo]);
  //   setInputValue("");
  // };

  // console.log(todos);

  return (
    <>
      <div className="flex justify-center flex-col items-center text-center">
        <AddTodo />
        <TodosList />
      </div>
    </>
  );
};

export default NotTodoUI;
