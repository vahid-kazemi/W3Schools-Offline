qobjects = [
  {
    question: "Which SQL statement adds a new column named 'Email' to the 'Employees' table?",
    options: [
      "ALTER TABLE Employees ADD COLUMN Email varchar(255);",
      "ALTER Employees ADD COLUMN Email varchar(255);",
      "ALTER TABLE Employees ADD Email varchar(255);",
      "MODIFY TABLE Employees ADD COLUMN Email varchar(255);"
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
  },
  {
    question: "Which syntax is correct for changing the data type of a column in MySQL?",
    options: [
      "ALTER TABLE table_name ALTER COLUMN column_name datatype;",
      "ALTER TABLE table_name MODIFY COLUMN column_name datatype;",
      "MODIFY COLUMN column_name datatype;",
      "CHANGE table_name column_name datatype;"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>___ TABLE Persons ___ COLUMN DateOfBirth;</code>",
    draganddropquestion: "Drag and drop the correct keywords to form a statement that deletes the 'DateOfBirth' column from the 'Persons' table.",
    options: ["ALTER", "DROP", "ADD", "MODIFY"],
    correct: [0, 1]
  },
  {
    question: "How do you rename a column in a table in SQL Server?",
    options: [
      "ALTER TABLE table_name RENAME COLUMN old_name TO new_name;",
      "EXEC sp_rename 'table_name.old_name', 'new_name', 'COLUMN';",
      "ALTER COLUMN table_name old_name TO new_name;",
      "CHANGE COLUMN table_name old_name TO new_name;"
    ],
    correct: 1
  }
]
