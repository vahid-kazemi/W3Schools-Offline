const qobjects = [
  {
    draganddroptext: "<code>___ TABLE ___;</code>",
    draganddropquestion: "Drag and drop the correct keywords to form a statement that deletes the 'Customers' table.",
    options: [
      "<code>DROP</code>",
      "<code>DELETE</code>",
      "<code>TRUNCATE</code>",
      "<code>Customers</code>"
    ],
    correct: [0, 3]
  },
  {
    question: "What does the SQL <code class='w3-codespan'>DROP TABLE</code> statement do?",
    options: [
      "Deletes a table and all its data from the database",
      "Renames an existing table",
      "Copies a table and its data to a new table"
    ],
    correct: 0
  },
  {
    question: "Which of the following SQL statements will delete the table 'Orders'?",
    options: [
      "DROP Orders;",
      "DELETE TABLE Orders;",
      "DROP TABLE Orders;",
      "TRUNCATE Orders;"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_database4.htm"
  },
  {
    fillintheblanks: "exercise_database5.htm"
  },
  {
    question: "What will happen if you try to <code class='w3-codespan'>DROP</code> a table that does not exist?",
    options: [
      "An error will occur.",
      "The query will be ignored without any error.",
      "The table will be created first, then dropped.",
      "It will drop all tables in the database."
    ],
    correct: 0
  },
  {
    question: "Which of the following SQL statements will delete all data inside the table 'Products' but retain the table structure?",
    options: [
      "<code>DROP TABLE Products;</code>",
      "<code>DELETE TABLE Products;</code>",
      "<code>TRUNCATE TABLE Products;</code>",
      "<code>REMOVE Products;</code>"
    ],
    correct: 2
  }
]
