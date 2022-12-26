import express from "express";
import {
  deleteAllTask,
  deleteTask,
  getSingleTask,
  getTask,
  insertTask,
  updateTask,
} from "../model/TaskModel.js";
const router = express.Router();

//fake database to get data - practice
// let tasks = [
//   {
//     _id: 1,
//     task: "Coding",
//     hours: 12,
//   },
//   {
//     _id: 2,
//     task: "Netflix",
//     hours: 12,
//   },
//   {
//     _id: 3,
//     task: "Reading",
//     hours: 12,
//   },
//   {
//     _id: 4,
//     task: "Writing",
//     hours: 12,
//   },
// ];

router.get("/:_id?", async (req, res, next) => {
  try {
    // to throw error?
    // throw new Error("This is an error");

    // query the db and get all the task - practice
    // const { _id } = req.params;
    // let data = tasks;
    // console.log(_id);
    // if (_id) {
    //   data = tasks.filter((task) => task._id === +_id);
    // }

    // const result = await getTask(); - to get all task

    const { _id } = req.params;
    const result = _id ? await getSingleTask(_id) : await getTask();

    res.json({
      status: "success", // either success or error
      message: "return from get method, task router", // message to be displayed
      result,
    });
  } catch (error) {
    // console.log(error);
    // res.json({
    //   status: "error", // either success or error
    //   message: error.message, // message to be displayed
    // });
    error.status = 500;
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    // console.log(req.body);

    // query the db and store the data
    // tasks.push(req.body);

    const result = await insertTask(req.body);
    // in execution - not pure js so waits in the mt queue

    // console.log(result);

    result?._id
      ? res.json({
          status: "success", // either success or error
          message: "The new task has been added", // message to be displayed
        })
      : res.json({
          status: "success", // either success or error
          message: "Sorry, the task cannot be added", // message to be displayed
          result,
        });
  } catch (error) {
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    // console.log(req.body);
    // query the db and update the data
    const { _id, type } = req.body;

    const result = await updateTask(_id, type);
    // console.log(result);

    res.json({
      status: "success", // either success or error
      message: "return from patch method, tsk router", // message to be displayed
      result,
    });
  } catch (error) {
    next(error);
  }
});

// if sent in url
// router.delete("/:_id", (req, res, next) => { -- for single task
//   try {
//     const { _id } = req.params;

//     // delete query in db
//     // tasks = tasks.filter((task) => task._id !== +_id);
//     const filteredArr = tasks.filter((task) => task?._id !== +_id);
//     // console.log(filteredArr);
//     tasks = filteredArr;

//     res.json({
//       status: "success", // either success or error
//       message: "return from delete method, tsk router", // message to be displayed
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// if sent in body
router.delete("/", async (req, res, next) => {
  try {
    // const { _id } = req.body;
    // delete query in db
    // tasks = tasks.filter((task) => task._id !== +_id);
    // const filteredArr = tasks.filter((task) => task?._id !== +_id);
    // console.log(filteredArr);
    // tasks = filteredArr;

    // delete query in db

    // for single task delete by id
    // const { _id } = req.params;
    // const result = await deleteTask(_id);

    // for multiple task delete by id
    // const { ids } = req.body;
    const ids = req.body;
    const result = await deleteAllTask(ids);
    // console.log(result);

    res.json({
      status: "success", // either success or error
      message: "return from delete method, tsk router", // message to be displayed
      result,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
