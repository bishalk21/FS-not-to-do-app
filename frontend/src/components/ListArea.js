import React from "react";
import { Col, Row } from "react-bootstrap";
import { TaskList } from "./TaskList";

export const ListArea = ({ tasksList, switchTask, totalHours }) => {
  // after we recieve the tasklist from app.js, now we have to filter entry list and bad list - filter method
  //   const entryList = tasksList.filter((item) => item.type === "entry");
  const entryList = tasksList.filter(({ type }) => type === "entry");

  // badlist
  const badList = tasksList.filter(({ type }) => type === "bad");

  // after the list is filtered, pass to tasklist as props

  // bad hours
  const badHours = badList.reduce((acc, item) => acc + +item.hours, 0);

  return (
    <>
      <Row className="g-4 d-flex  justify-content-between">
        {/* Entry List */}
        <Col>
          <TaskList
            title="Entry List"
            arrow="right"
            list={entryList}
            switchTask={switchTask}
          />
        </Col>

        {/* Bad List */}
        <Col className="">
          <TaskList
            title="Bad Task List"
            list={badList}
            switchTask={switchTask}
          />
          <div className="text-end mt-2">
            You could have
            <span className="text-danger">
              <strong> {badHours} </strong> hours!
            </span>
          </div>
        </Col>
        <div className="fw-bold">
          Total time allocated is
          <span className="text-bold">
            <strong> {totalHours} </strong> hours/week!
          </span>
        </div>
      </Row>
    </>
  );
};
