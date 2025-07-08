const qobjects = [
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>NOT NULL</code> constraint?",
    options: [
      "To ensure a column cannot have duplicate values",
      "To enforce that a column must always contain a value",
      "To define a unique identifier for a table",
      "To prevent a table from being dropped"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>CREATE TABLE Employees (<br>&nbsp;&nbsp;ID int ___,<br>&nbsp;&nbsp;Name varchar(255) ___,<br>&nbsp;&nbsp;Age int<br>);</code>",
    draganddropquestion: "Drag and drop the correct keywords to enforce NOT NULL constraints on the ID and Name columns.",
    options: ["<code>NOT NULL</code>", "<code>NULL</code>", "<code>UNIQUE</code>", "<code>ISNULL</code>", "<code>DEFAULT</code>", "<code>NOT NULL</code>"],
    correct: [[0, 5], [0, 5]]
  },  
  {
    question: "What happens if you try to insert a NULL value into a column with a <code class='w3-codespan'>NOT NULL</code> constraint?",
    options: [
      "The value will be automatically converted to a default value",
      "The database will throw an error",
      "The record will be inserted, but the NULL value will be ignored",
      "The record will be inserted, and the column will be filled with a blank space"
    ],
    correct: 1
  },
  {
    question: "How do you define a <code class='w3-codespan'>NOT NULL</code> constraint during table creation?",
    options: [
      "By adding 'NOT NULL' after the column's data type",
      "By adding 'CHECK NOT NULL' after the column's data type",
      "By using the 'ALTER TABLE' statement",
      "By specifying 'DEFAULT NOT NULL' during table creation"
    ],
    correct: 0
  }
]
