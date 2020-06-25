const connection = require("./connection");
connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

const seeAllTodos = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM todos", (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
};

const showTodo = (todoID) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM todos WHERE ?",
      [{ id: todoID }],
      (err, data) => {
        err ? reject(err) : resolve(data);
      }
    );
  });
};
const addTodo = (userText) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO todos SET ?",
      [{ text: userText }],
      (err, data) => {
        err ? reject(err) : resolve({ msg: "add success" });
      }
    );
  });
};
const deleteTodo = (todoID) => {
  return new Promise((resolve, reject) => {
    connection.query("DELETE FROM todos WHERE ?", [{ id: todoID }], (err) => {
      err ? reject(err) : resolve({ msg: "delete success" });
    });
  });
};

const editTodo = (obj) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE todos SET ? WHERE ?",
      [
        { text: obj.todoText, completed: obj.todoCompleted },
        { id: obj.todoID },
      ],
      (err) => {
        err ? reject(err) : resolve({ msg: "edit success" });
      }
    );
  });
};

module.exports = { seeAllTodos, showTodo, addTodo, deleteTodo, editTodo };
