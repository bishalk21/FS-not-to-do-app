import express from "express";
const router = express.Router();

//fake database to get data
let tasks = [
  {
    _id: 1,
    task: "Coding",
    hours: 12,
  },
  {
    _id: 2,
    task: "Netflix",
    hours: 12,
  },
  {
    _id: 3,
    task: "Reading",
    hours: 12,
  },
  {
    _id: 4,
    task: "Writing",
    hours: 12,
  },
];

router.get("/:_id?", (req, res, next) => {
  try {
    // to throw error?
    // throw new Error("This is an error");

    // query the db and get all the task
    const { _id } = req.params;

    let data = tasks;
    console.log(_id);

    if (_id) {
      data = tasks.filter((task) => task._id === +_id);
    }

    res.json({
      status: "success", // either success or error
      message: "return from get method, task router", // message to be displayed
      data,
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

router.post("/", (req, res, next) => {
  try {
    console.log(req.body);

    // query the db and store the data
    tasks.push(req.body);

    res.json({
      status: "success", // either success or error
      message: "return from post method, tsk router", // message to be displayed
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/", (req, res, next) => {
  try {
    res.json({
      status: "success", // either success or error
      message: "return from patch method, tsk router", // message to be displayed
    });
  } catch (error) {
    next(error);
  }
});

// if sent in url
// router.delete("/:_id", (req, res, next) => {
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
router.delete("/", (req, res, next) => {
  try {
    const { _id } = req.body;

    // delete query in db
    // tasks = tasks.filter((task) => task._id !== +_id);
    const filteredArr = tasks.filter((task) => task?._id !== +_id);
    // console.log(filteredArr);
    tasks = filteredArr;

    res.json({
      status: "success", // either success or error
      message: "return from delete method, tsk router", // message to be displayed
    });
  } catch (error) {
    next(error);
  }
});

export default router;
