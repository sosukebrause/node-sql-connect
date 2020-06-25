const express = require("express");
const router = express.Router();
const {
  seeAllTodos,
  showTodo,
  addTodo,
  deleteTodo,
  editTodo,
} = require("../config/orm");

router.get("/api", (req, res) => {
  seeAllTodos()
    .then((allTodos) => res.send(allTodos))
    .catch((err) => res.send(err));
});

router.get("/api/find/:id", (req, res) => {
  // console.log(parseInt(req.params.id));
  // res.send("find by id");
  // res.send(req.params.id);
  const id = parseInt(req.params.id);
  showTodo(id)
    .then((todo) => {
      res.json(todo);
    })
    .catch((err) => res.json(err));
});

router.post("/api", (req, res) => {
  // res.json(req.body);
  addTodo(req.body.text)
    .then((submitResult) => {
      res.json(submitResult);
    })
    .catch((err) => res.json(err));
});

router.delete("/api/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.send(id);
  deleteTodo(id)
    .then((deleteResponse) => res.send(deleteResponse))
    .catch((err) => res.json(err));
});

router.patch("/api", (req, res) => {
  console.log(req.body);
  editTodo({
    todoText: req.body.todoText,
    todoId: parseInt(req.body.todoId),
    todoCompleted: req.body.todoCompleted === "false" ? false : true,
  })
    .then((editResponse) => res.json(editResponse))
    .catch((err) => res.json(err));
});

module.exports = router;
