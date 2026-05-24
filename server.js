const express = require("express");

const app = express();

const PORT = 3000;

const todos = [
  {
    id: 1,
    text: "Study Express",
    completed: false,
  },
];

app.get("/", (req, res) => {
  res.send("Todo API Server");
});

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});