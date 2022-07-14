import React from "react";
import { Button, Table } from "react-bootstrap";
import { Form } from "react-bootstrap";

export const TaskList = ({
  title,
  arrow,
  list = [],
  switchTaskType,
  handleOnCheck,
  name,
  ids,
}) => {
  // console.log(deleteTask);
  //arrow is used to show the arrow on the side of the title
  // list is the default value
  return (
    <div className="mt-3">
      <h2 className="text-center">{title}</h2>{" "}
      {/* title is the argument that is passed to TaskList */}
      <div className="table">
        <Table striped>
          <thead>
            <tr>
              <th>
                <Form.Check
                  type="checkbox"
                  value={name}
                  onChange={handleOnCheck}
                />
              </th>
              <th>Task</th>
              <th>Hours</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map(
              (
                item,
                i //map helps to iterate through the array
              ) => (
                <tr>
                  <td>
                    {" "}
                    <Form.Check
                      type="checkbox"
                      value={item._id}
                      onChange={handleOnCheck}
                      checked={ids.includes(item._id)}
                      // ananymous function  is used to pass the id of the task to deleteTask
                    />{" "}
                  </td>
                  <td>{item.task}</td>
                  <td>{item.hours}</td>
                  <td>
                    {arrow === "right" ? (
                      <Button
                        variant="success"
                        onClick={() => switchTaskType(item._id, "bad")}
                      >
                        {" "}
                        <i class="fa-solid fa-arrow-right"></i>{" "}
                      </Button>
                    ) : (
                      <Button
                        variant="danger"
                        onClick={() => switchTaskType(item._id, "entry")}
                      >
                        {" "}
                        <i class="fa-solid fa-arrow-left"></i>
                      </Button>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
