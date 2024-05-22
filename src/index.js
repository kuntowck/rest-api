const express = require("express");
const usersRoutes = require("./routes/users");
const logRequestMiddleware = require("./middleware/logs");

const app = express();

const port = 3000;

app.use(logRequestMiddleware);

app.get("/", (req, res) => {
  res.send("Get Method!");
});

app.post("/", (req, res) => {
  res.json({
    nama: "kunto",
    email: "kuntowck@gmail.com",
  });
});

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`REST API | Listening at http://localhost:${port}`);
});
