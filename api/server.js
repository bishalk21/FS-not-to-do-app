import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import dbConnect from "./src/config/dbConfig.js";
const app = express();

const PORT = 8000;

app.use(express.json()); // to parse json data
app.use(express.urlencoded({ extended: true })); // to parse form data
app.use(helmet()); // for security headers
app.use(cors()); // to enable cors

app.use("/", (req, res) => {
  const jf = {
    status: "success",
    message: "Hi You hit the endpoint",
  };
  res.json(jf);
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";

  res.status(status).json({
    status,
    message,
  });
});

dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error && console.log(error);
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection error", error);
  });
