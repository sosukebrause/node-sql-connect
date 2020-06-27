DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
USE todo_db;
CREATE TABLE todos (
  id INT NOT NULL AUTO_INCREMENT,
  text VARCHAR(80) NOT NULL,
  completed BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);
INSERT INTO todos(text)
VALUES ("Mysql programmers get a lot of money");
INSERT INTO todos(text)
VALUES ("finish the course");
INSERT INTO todos(text)
VALUES ("study everything");
INSERT INTO todos(text)
VALUES ("never give up");
INSERT INTO todos(text)
VALUES ("have fun");
INSERT INTO todos(text)
VALUES ("share knowledge");
INSERT INTO todos(text)
VALUES ("final new");

SELECT * FROM todos;
SELECT text, id FROM todos WHERE completed = true;
SELECT * FROM todos WHERE id = 3;

UPDATE todos SET text = "Love your mom" WHERE id = 3;
UPDATE todos SET completed = true WHERE id = 1;

DELETE FROM todos WHERE id =2;
DELETE FROM todos WHERE id =6;