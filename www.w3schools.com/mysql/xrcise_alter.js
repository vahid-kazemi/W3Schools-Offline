qobjects = [
  {
    draganddroptext: "<code>___ TABLE Persons ___ COLUMN DateOfBirth;</code>",
    draganddropquestion: "Drag and drop the correct keywords to form a statement that deletes the 'DateOfBirth' column from the 'Persons' table.",
    options: [
      "<code>ALTER</code>",
      "<code>DROP</code>",
      "<code>ADD</code>",
      "<code>MODIFY</code>"
    ],
    correct: [0, 1]
  },
  {
    question: "Which SQL statement adds a new column named 'Email' to the 'Employees' table?",
    options: [
      "<code>ALTER TABLE Employees ADD COLUMN Email varchar(255);</code>",
      "<code>ALTER Employees ADD COLUMN Email varchar(255);</code>",
      "<code>ALTER TABLE Employees ADD Email varchar(255);</code>",
      "<code>MODIFY TABLE Employees ADD COLUMN Email varchar(255);</code>"
    ],
    correct: 2
  },
  {
    question: "What does the SQL <code class='w3-codespan'>ALTER TABLE</code> statement allow you to do?",
    options: [
      "Create a new table in the database",
      "Delete all data from a table",
      "Add, delete, or modify columns in an existing table",
      "Insert data into a table"
    ],
    correct: 2
  },
  {
    question: "What will the following SQL statement do?<br><code class='codeblock'>ALTER TABLE Customers DROP COLUMN Email;</code>",
    options: [
      "Delete all records in the 'Email' column",
      "Delete the 'Email' column from the 'Customers' table",
      "Change the data type of the 'Email' column",
      "Rename the 'Email' column to 'CustomerEmail'"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_database6.htm"
  },
  {
    fillintheblanks: "exercise_database7.htm"
  }
]
