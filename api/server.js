import express from "express";
const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  const jf = {
    status: "success", // either success or error
    message: "Hi You hit the get endpoint", // message to be displayed
  };
  res.json(jf);
});

app.post("/", (req, res) => {
  //   const jf = {
  //     status: "success", // either success or error
  //     message: "Hi You hit the endpoint", // message to be displayed
  //   };
  //   res.json(jf);

  res.json({
    status: "success", // either success or error
    message: "Hi You hit the post endpoint", // message to be displayed
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);

  console.log(`Server is running on port http://localhost:${PORT}`);
});
