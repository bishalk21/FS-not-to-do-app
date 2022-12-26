import "dotenv/config";
import express from "express";
const app = express();
import helmet from "helmet";
import cors from "cors";
import path from "path";

// PORT
// const PORT = 8000;
const PORT = process.env.PORT || 8000;

// middlewares
app.use(express.json());
app.use(helmet());
app.use(cors());

// database
import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();

import taskRouter from "./src/routers/taskRouter.js";

app.use("/api/v1/task", taskRouter);

// static content serve
// - create absolute file path
// - __dirname is a global variable
// - path.resolve() is a method to create absolute path
const __dirname = path.resolve();
// - express.static() is to tell server to serve static files
// - path.join() is a method to join path
// - path.join(__dirname, "frontend", "build") is the absolute path to the frontend/build folder
// - frontend/build is the folder that contains the static content
// app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use(express.static(path.join(__dirname, "/frontend/build")));

// entry or root url endpoint - server
// app.use means use this middleware for all the routes
app.use("/", (req, res) => {
  //   const jf = {
  //     status: "success", // either success or error
  //     message: "Hi You hit the endpoint", // message to be displayed
  //   };
  //   res.json(jf);

  // const jf = {
  //   status: "success", // either success or error
  //   message: "Hi You hit the not to do api endpoint", // message to be displayed
  // };
  // res.json(jf);

  // static serving
  // - sendFile() is a method to send file
  // - path.join() is a method to join path
  // - path.join(__dirname, "frontend", "build", "index.html") is the absolute path to the frontend/build/index.html file
  // - frontend/build/index.html is the file that contains the static content
  // res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
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
