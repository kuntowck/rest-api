require("dotenv").config();

const express = require("express");
const usersRoutes = require("./routes/users");
const logRequestMiddleware = require("./middleware/logs");
const uploadFileMiddleware = require("./middleware/uploadFile");

const app = express();

const port = process.env.PORT || 4000;

app.use(logRequestMiddleware);
app.use(express.json());
app.use("/assets", express.static("public/images"));

app.use("/users", usersRoutes);
app.post("/", uploadFileMiddleware.single("photo"), (req, res) => {
  res.json({
    message: "Upload file berhasil!",
  });
});

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(port, () => {
  console.log(`REST API | Listening at http://localhost:${port}`);
});
