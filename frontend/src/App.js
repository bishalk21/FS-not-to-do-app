import "./App.css";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { TaskForm } from "./Components/TaskForm";
import { ListArea } from "./Components/ListArea";
import { useState, useEffect } from "react";
import {
  fetchTasks,
  postTask,
  patchTask,
  deleteTask,
} from "./helpes/axiosHelpers";

const weeklyHours = 7 * 24;

function App() {
  const [tasks, setTasks] = useState([]); // [] is the initial value
  const total = tasks.reduce((acc, item) => acc + +item.hours, 0);
  const [ids, setIds] = useState([]);

  useEffect(() => {
    getTaskFromServer();
  }, []);

  const getTaskFromServer = async () => {
    const data = await fetchTasks();
    setTasks(data.result);
    data.status === "success" && setTasks(data.result);
  };

  const addTask = async (task) => {
    // addTask is a function that takes in a task
    if (total + +task.hours > weeklyHours) {
      alert("You have exceeded the weekly hours");
      return;
    }
    // console.log(task);
    // setTasks([...tasks, task]);
    // ...tasks is the spread operator which spreads the array and adds the task to the end of the array
    const result = await postTask(task);
    // console.log(result);
    if (result.status === "success") {
      result.status === "success" && getTaskFromServer();
    }
  };
  const switchTaskType = async (_id, type) => {
    // i is the index of the task
    // task is the task object
    // console.log(id, task);
    //   const toDeleteIds = [...tasks]; // ...tasks is the spread operator which spreads the array
    //   toDeleteIds[i].type = task.type === "entry" ? "bad" : "entry";
    //   setTasks(toDeleteIds);
    // };
    // high order function - takes in a function as an argument   and returns a function as an argument
    // const switchArg = tasks.map((item, index) => {
    //   if (item._id === id) {
    //     return { ...item, type: task };
    //   } else {
    //     return item;
    //   }
    // });
    // setTasks(switchArg);
    const data = await patchTask({ _id, type });
    data.status === "success" && getTaskFromServer();
  };
  const handleOnDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }
    const data = await deleteTask(ids);

    if (data.status === "success") {
      getTaskFromServer();
      setIds([]);
    }
    // const tempArg = tasks.filter((item) => !ids.includes(item.id));
    // setTasks(tempArg);
    // setIds([]);
  };
  const handleOnCheck = (e) => {
    const { checked, value, name } = e.target; //{ checked, value, name } is the destructuring assignment syntax
    console.log(checked, value, name);

    if (value === "entry" || value === "bad") {
      // if the task is in the  list then delete it from the  list
      let toDeleteIds = [];
      tasks.forEach((item) => {
        if (item.type === value) {
          toDeleteIds.push(item._id);
        }
      });
      if (checked) {
        // if the checkbox is checked then delete the task from the  list
        setIds([...ids, ...toDeleteIds]);
        // spread operator - spreads the array
      } else {
        // if the checkbox is not checked then remove the task to the  list
        // console.log("now remove")
        const tempArr = ids.filter((_id) => !toDeleteIds.includes(_id));
        setIds(tempArr);
      }
      return;
    }
    if (checked) {
      setIds([...ids, value]);
    } else {
      const tempArr = ids.filter((item) => item !== value);
      setIds(tempArr);
    }
  };

  return (
    <div className="wrapper">
      <Container>
        {/* form comp */}
        <h1 className="text-center py-3">My Not To Do List</h1>
        <TaskForm addTask={addTask} />{" "}
        {/* addTask is a function that takes in a task */}
        <hr />
        {/* list comp */}
        <ListArea
          ids={ids}
          tasks={tasks}
          switchTaskType={switchTaskType}
          total={total}
          handleOnCheck={handleOnCheck}
        />{" "}
        {/* tasks is the argument that is passed to ListArea */}
        <div className="mt-2">
          {ids.length > 0 ? (
            <Button variant="danger" onClick={handleOnDelete}>
              Delete
            </Button>
          ) : null}
        </div>
      </Container>
    </div>
  );
}

export default App;
