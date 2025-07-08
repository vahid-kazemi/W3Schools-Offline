qobjects = [
  {
    question: "What is an SQL view?",
    options: [
      "A real table stored in the database",
      "A virtual table based on the result-set of an SQL statement",
      "A function that modifies data in the database",
      "A temporary table used for backup purposes"
    ],
    correct: 1
  },
  {
    question: "Which SQL statement is used to create a view?",
    options: [
      "CREATE TABLE",
      "CREATE VIEW",
      "CREATE FUNCTION",
      "CREATE DATABASE"
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
      "ALTER VIEW",
      "UPDATE VIEW",
      "CREATE OR REPLACE VIEW",
      "MODIFY VIEW"
    ],
    correct: 2
  },
  {
    question: "What is the correct syntax to drop a view?",
    options: [
      "DELETE VIEW view_name;",
      "DROP VIEW view_name;",
      "REMOVE VIEW view_name;",
      "TRUNCATE VIEW view_name;"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>___ view_name AS<br>___ column1, column2, ...<br>___ table_name<br>___ condition;</code>",
    draganddropquestion: "Drag and drop the correct keywords to make sense of the following syntax code:",
    options: ["SELECT", "FROM", "WHERE", "CREATE VIEW"],
    correct: [3, 0, 1, 2]
  }
]
