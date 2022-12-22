import React from "react";
import { Button, Form, Table } from "react-bootstrap";

export const TaskList = ({
  title,
  arrow,
  list = [],
  switchTask,
  handleCheckbox,
  name,
  ids,
}) => {
  //   console.log(list);
  // after receiving list, we have to map the list and display it in table

  return (
    <div className="mt-3">
      <h2 className="text-center">{title}</h2>
      <div className="table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                {" "}
                <Form.Check
                  type="checkbox"
                  label=""
                  value={name}
                  //   onChange={() => handleCheckbox()}
                  onChange={handleCheckbox}
                />
              </th>
              <th>Task</th>
              <th>Hours</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => (
              <tr key={i}>
                <td>
                  {" "}
                  <Form.Check
                    type="checkbox"
                    label=""
                    value={item.id}
                    //   onChange={() => handleCheckbox()}
                    onChange={handleCheckbox}
                    checked={ids.includes(item.id)}
                  />
                </td>
                <td>{item.task}</td>
                <td>{item.hours} hours</td>
                <td>
                  {arrow === "right" ? (
                    <Button
                      variant="success"
                      onClick={() => switchTask(item.id, "bad")}
                    >
                      <i className="fas fa-arrow-right"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="danger"
                      onClick={() => switchTask(item.id, "entry")}
                    >
                      <i className="fas fa-arrow-left"></i>
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
