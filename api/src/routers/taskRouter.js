import express from "express";
import {
  getTasks,
  insertTask,
  getSingleTask,
  deleteTask,
  updateTask,
  deleteManyTask,
} from "../model/task/TaskModel.js";
const router = express.Router();

// let fakeDb = [
//   { task: "watching tv", hr: 10, _id: 1 },
//   { task: "reading", hr: 5, _id: 2 },
//   { task: "coding", hr: 2, _id: 3 },
//   { task: "sleeping", hr: 1, _id: 4 },
//   { task: "eating", hr: 1, _id: 5 },
// ];

router.get("/:_id?", async (req, res, next) => {
  try {
    // console.log(req.params);
    // const { _id } = req.params;
    // let data = fakeDb;
    // if (_id) {
    //   data = data.filter((item) => item._id === +_id);
    // }
    // const result = await getTasks();
    const { _id } = req.params;
    const result = _id ? await getSingleTask(_id) : await getTasks();
    res.json({
      status: "success",
      message: "you hit the get root route",
      //   data,
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    //call the db to add the task to the db
    const result = await insertTask(req.body);
    console.log(result);

    result?._id
      ? res.json({
          status: "success",
          message: "New task has been added",
          result,
        })
      : res.json({
          status: "error",
          message: "New task has not been added",
          result,
        });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

router.patch("/", async (req, res, next) => {
  try {
    // console.log(req.body);
    const { _id, type } = req.body;
    const result = await updateTask(_id, type);
    // console.log(result);
    res.json({
      status: "success",
      message: "you hit the patch root route",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

// router.delete("/", async (req, res, next) => {
//   try {
//     // const { _id } = req.body;
//     // console.log(_id);

//     // const { _id } = req.params;
//     // const filterArg = fakeDb.filter((item) => item?._id !== +_id);
//     // fakeDb = filterArg;
//     const { _id } = req.body;
//     const result = _id ? await deleteTask(_id) : console.log("no id");

//     res.json({
//       status: "success",
//       message: "you hit the delete root route",
//       result,
//     });
//   } catch (error) {
//     error.status = 500;
//     next(error);
//   }
// });

router.delete("/", async (req, res, next) => {
  try {
    const ids = req.body;
    const result = await deleteManyTask(ids);

    res.json({
      status: "success",
      message: "you hit the delete root route",
      result,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});

export default router;
