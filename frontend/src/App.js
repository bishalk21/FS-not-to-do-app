import "./App.css";
import { Container } from "react-bootstrap";
import { AddTaskForm } from "./components/AddTaskForm";
import { ListArea } from "./components/ListArea";
import { useState } from "react";

const weeklyHour = 7 * 24;

function App() {
  // state to store tasklist
  const [tasksList, setTasksList] = useState([]);

  // total hours of all tasklist - reduce
  const totalHours = tasksList.reduce((acc, item) => acc + +item.hours, 0);

  // function to recieve tasklist from search form and update tasklist
  const addTask = (task) => {
    // excedded hours
    if (totalHours + +task.hours > weeklyHour) {
      alert("You have excedded your weekly hours");
      return;
    }

    setTasksList([...tasksList, task]);
  };

  // console.log(tasksList);
  // After we receive the taskList we then use them in list area by passing as props

  // switch function to transfer task from entry to bad
  const switchTask = (id, type) => {
    // console.log(i, type);

    const switchArr = tasksList.map((item, index) => {
      if (item.id === id) {
        item.type = type;
        // return (item.type = type);
        // const dt = (item.type = type);
        // return dt;

        // return { ...item, type: type };
      }
      return item;
    });

    // logic of switch from entry to bad is
    // if index of task is equal to i then change the type to bad
    // else return the item

    setTasksList(switchArr);
  };

  return (
    <div className="wrapper">
      <Container>
        <h1 className="text-center py-5">My Not ToDo List</h1>
        {/* form */}
        <AddTaskForm addTask={addTask} />

        <hr />
        {/* list */}
        <ListArea
          tasksList={tasksList}
          switchTask={switchTask}
          totalHours={totalHours}
        />
      </Container>
    </div>
  );
}

export default App;
