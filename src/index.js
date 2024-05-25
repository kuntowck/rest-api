require('dotenv').config()

const express = require("express");
const usersRoutes = require("./routes/users");
const logRequestMiddleware = require("./middleware/logs");

const app = express();

const port = process.env.PORT || 4000;

app.use(logRequestMiddleware);
app.use(express.json());

app.use("/users", usersRoutes);

app.listen(port, () => {
  console.log(`REST API | Listening at http://localhost:${port}`);
});
