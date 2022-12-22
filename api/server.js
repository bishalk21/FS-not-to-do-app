import express from "express";
const app = express();

const PORT = 8000;

// middlewares
app.use(express.json());

import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);

// entry or root url endpoint - server
// app.use means use this middleware for all the routes
app.use("/", (req, res) => {
  //   const jf = {
  //     status: "success", // either success or error
  //     message: "Hi You hit the endpoint", // message to be displayed
  //   };
  //   res.json(jf);
  const jf = {
    status: "success", // either success or error
    message: "Hi You hit the not to do api endpoint", // message to be displayed
  };
  res.json(jf);
});

// global error handler
app.use((error, req, res, next) => {
  // console.log(error);

  //   error.status || (error.status = 500);

  const status = error.status || 500;

  res.status(status).json({
    status: "error", // either success or error
    message: error.message, // message to be displayed
  });

  // writing in the file system or database, or send warning text message to deveops team
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running on port http://localhost:${PORT}`);
});
