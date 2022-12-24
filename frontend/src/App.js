import "./App.css";
import { Button, Container } from "react-bootstrap";
import { AddTaskForm } from "./components/AddTaskForm";
import { ListArea } from "./components/ListArea";
import { useEffect, useState } from "react";
import { fetchTasks, postTask } from "./helpers/axiosHelper";

const weeklyHour = 7 * 24;

function App() {
  // state to store tasklist
  const [tasksList, setTasksList] = useState([]);

  const [ids, setIds] = useState([]);

  // useEffect hook - allow us to execute the code once component completes re-renders
  useEffect(() => {
    getTaskServer();
  }, []);

  // getting task from db
  const getTaskServer = async () => {
    const data = await fetchTasks();
    console.log(data);
    data.status === "success" && setTasksList(data.result);
  };

  // total hours of all tasklist - reduce
  const totalHours = tasksList.reduce((acc, item) => acc + +item.hours, 0);

  // function to recieve tasklist from search form and update tasklist
  const addTask = (task) => {
    // excedded hours
    if (totalHours + +task.hours > weeklyHour) {
      alert("You have excedded your weekly hours");
      return;
    }

    //local state - task added
    // setTasksList([...tasksList, task]);

    // sending data to the server
    const result = postTask(task);
    result.status === "success" && getTaskServer();
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

  // state for checkbox and selecting item in task list and deleting according to the checked item
  // - we get ids from the task list according to list being checked or selected by creating function in main comp.
  // - we pass the function to tasklist as props
  // - function to delete the checked item in main comp
  // - we pass the function to tasklist as props
  // - we pass the ids to the function in main comp

  // function to handle checkbox
  const handleCheckbox = (e) => {
    const { checked, name, value } = e.target;
    // console.log(checked, name, value);

    if (value === "entry" || value === "bad") {
      // if checked then add the id to ids otherwise take them out
      // add all entry list ids
      // filter id returns whole item while
      // map returns only id and
      // reduce returns only one id and
      // find returns only one id a
      let deleteIds = [];
      tasksList.forEach((item) => {
        if (item.type === value) {
          // return item.id;
          deleteIds.push(item.id);
        }
      });
      if (checked) {
        // console.log(entryIds);

        setIds([...ids, ...deleteIds]);
      } else {
        // remove all entry list ids
        // console.log("remove");
        const tempArrIds = ids.filter((id) => !deleteIds.includes(id));
        setIds(tempArrIds);
      }
      return;
    }

    // if checked then add the id to ids otherwise take them out
    if (checked) {
      // add invidual ids
      setIds([...ids, value]);
    } else {
      // remove individual ids
      const tempArrIds = ids.filter((id) => id !== value);
      setIds(tempArrIds);
    }
  };

  // delete function
  const deleteTask = () => {
    // confirm
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }

    const tempArr = tasksList.filter((item) => !ids.includes(item.id));
    setTasksList(tempArr);
    setIds([]);
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
          handleCheckbox={handleCheckbox}
          ids={ids}
        />

        {/* Ddelete button only on item select to delete */}
        <div className="mt-3">
          {ids.length > 0 && (
            <Button
              variant="danger"
              className="float-right"
              onClick={deleteTask}
            >
              Delete Selected Task
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default App;
