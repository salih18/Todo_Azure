require("dotenv").config();
const express = require("express");
const connectDB = require("./server/config/db");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use("/api/users", require("./server/routes/api/users"));
app.use("/api/auth", require("./server/routes/api/auth"));
app.use("/api/todos", require("./server/routes/api/todos"));
app.use("/api/tags", require("./server/routes/api/tags"));

app.use(express.static("./client/todo-app/build"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: __dirname + "/client/todo-app/build/" });
});

const { PORT } = process.env;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
