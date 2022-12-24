import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";

const initialState = {
  task: "",
  hours: "",
  type: "entry",
};

export const AddTaskForm = ({ addTask }) => {
  // state to store the data from search form
  const [tasks, setTasks] = useState(initialState);

  // function to capture the data from search form and pass it to app.js
  const handleOnSearch = (e) => {
    // getting name and value from search form
    const { name, value } = e.target;
    // console.log(name, value);

    // updating the state
    setTasks({ ...tasks, [name]: value });
    // name in square bracket is for dynamic property name of form
  };

  // function to handle form submit and pass the tasks to app
  const handleOnSubmit = (e) => {
    e.preventDefault(); // prevent from browser to load

    // passing the tasks to app
    // no need now sending data to database where id will be assigned
    // addTask({ ...tasks, id: uuidv4() });
    addTask(tasks);
  };

  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <Row className="g-2 d-flex align-items-center justify-content-between">
          <Col md={7}>
            <Form.Control
              name="task"
              placeholder="Task Name"
              required
              onChange={handleOnSearch}
            />
          </Col>
          <Col md={3}>
            <Form.Control
              name="hours"
              placeholder="10"
              required
              onChange={handleOnSearch}
            />
          </Col>

          <Col md={2} className="d-flex justify-content-center">
            <Button variant="success" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};
