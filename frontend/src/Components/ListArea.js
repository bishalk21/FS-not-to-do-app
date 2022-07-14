import React from "react";
import { Col, Row } from "react-bootstrap";
import { TaskList } from "./TaskList";

export const ListArea = ({ tasks, switchTaskType, handleOnCheck, ids }) => {
  //   console.log(tasks);
  //tasks is used in filtering
  //   console.log(switchTaskType);
  const total = tasks.reduce((acc, item) => acc + +item.hours, 0);
  const entryList = tasks.filter((task) => task.type === "entry"); //entryList is the filtered list of tasks
  const badList = tasks.filter((task) => task.type === "bad");
  const badHours = badList.reduce((acc, item) => acc + +item.hours, 0);
  return (
    <div className="list-area">
      <Row>
        <Col>
          <TaskList
            ids={ids}
            title="Entry List"
            name="entry"
            arrow="right"
            list={entryList}
            switchTaskType={switchTaskType}
            handleOnCheck={handleOnCheck}
          />
          {/* entryList is  */}
        </Col>

        <Col>
          <TaskList
            ids={ids}
            title="Bad List"
            name="bad"
            list={badList}
            switchTaskType={switchTaskType}
            handleOnCheck={handleOnCheck}
          />
          <div className="saving text-end text-danger fw-bold">
            You could have saved {badHours} hrs
          </div>
        </Col>
      </Row>
      <div className="text-center fw-bold">
        Total hours allocated is {total} hrs per week{" "}
      </div>
    </div>
  );
};
