import { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addTodo } from "@/app/reducers-actions/todo/todoSlice";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded-md"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button type="submit" className="border border-gray-300 p-2 rounded-md">
          Add
        </Button>
      </form>
    </>
  );
};

export default AddTodo;
