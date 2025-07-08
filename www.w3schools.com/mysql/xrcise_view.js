qobjects = [
  {
    draganddroptext: "<code class='codeblock'>___ Norwegians AS<br>___ Firstname, Lastname<br>___ Persons<br>___ Country = 'Norway';</code>",
    draganddropquestion: "Drag and drop the correct keywords to make sense of the following syntax code:",
    options: [
      "<code>SELECT</code>",
      "<code>FROM</code>",
      "<code>WHERE</code>",
      "<code>CREATE VIEW</code>"
    ],
    correct: [3, 0, 1, 2]
  },
  {
    question: "Which SQL statement is used to create a view?",
    options: [
      "<code>CREATE TABLE</code>",
      "<code>CREATE VIEW</code>",
      "<code>CREATE FUNCTION</code>",
      "<code>CREATE DATABASE</code>"
    ],
    correct: 1
  },
  {
    question: "What happens when you query a view?",
    options: [
      "The database retrieves pre-stored static data",
      "The database engine recreates the view with up-to-date data",
      "The view is converted into a real table",
      "The query is ignored if the view is not indexed"
    ],
    correct: 1
  },
  {
    question: "Which SQL statement adds or modifies the columns of an existing view?",
    options: [
      "<code>ALTER VIEW</code>",
      "<code>UPDATE VIEW</code>",
      "<code>CREATE OR REPLACE VIEW</code>",
      "<code>MODIFY VIEW</code>"
    ],
    correct: 2
  },
  {
    question: "What is the correct syntax to drop a view?",
    options: [
      "<code>DELETE VIEW view_name;</code>",
      "<code>DROP VIEW view_name;</code>",
      "<code>REMOVE VIEW view_name;</code>",
      "<code>TRUNCATE VIEW view_name;</code>"
    ],
    correct: 1
  }
]
