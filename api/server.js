import "dotenv/config";
import express, { Router } from "express";
const app = express();

const PORT = process.env.PORT || 8000;
import helmet from "helmet";
import cors from "cors";

import path from "path";

// middleware
app.use(express.json());
app.use(helmet());
app.use(cors());

import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();

import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/task", taskRouter);

//static content server
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"));
});

app.use((error, req, res, next) => {
  console.log(error, "error");
  const status = error.status || 500;
  res.status(status).json({
    status: "error",
    message: error.message,
  });
  // writing file system to log error
});

app.listen(PORT, (error) => {
  //listen is for
  error && console.log(error);
  console.log(`Server is running on port http://localhost:${PORT}`);
});
