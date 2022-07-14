import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid"; //uuid

const initialState = {
  task: "",
  hours: "",
  type: "entry",
};

export const TaskForm = ({ addTask }) => {
  const [form, setForm] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    // console.log(form);
    setForm({ ...form, [name]: value }); //square bracket converts key to variable
    //square brackets are used to access the property of an object
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    addTask(form);
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <Row className="g-2">
        <Col md="6">
          <Form.Control
            name="task"
            placeholder="Task Name"
            required
            onChange={handleOnChange}
            l
          />
        </Col>
        <Col md="3">
          <Form.Control
            name="hours"
            placeholder=""
            type="number"
            required
            onChange={handleOnChange}
          />
        </Col>
        <Col md="3">
          <Button type="submit" variant="success">
            {" "}
            Add Task
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
