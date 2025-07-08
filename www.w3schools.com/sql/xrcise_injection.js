qobjects = [
  {
    question: "What is SQL injection?",
    options: [
      "A technique to optimize SQL queries",
      "A code injection technique to access or destroy a database",
      "A method to protect SQL queries from being hacked",
      "A debugging process for SQL queries"
    ],
    correct: 1
  },
  {
    question: "What does the statement <code>1=1</code> in a SQL query imply?",
    options: [
      "A logical statement that is always true",
      "A conditional operator for database sorting",
      "To copy data from one table into a new table",
      "To create an index on a table"
    ],
    correct: 0
  },
  {
    question: "Which approach helps prevent SQL injection attacks?",
    options: [
      "Using concatenated SQL strings",
      "Using the NULL operator",
      "Using SQL parameters",
      "Allowing multiple SQL statements in a query"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>SELECT * FROM Customers WHERE CustomerId = ___;</code>",
    draganddropquestion: "Drag and drop the correct parameterized placeholder to complete the SQL query.",
    options: ["@0", ":id", "?param", "@CustomerId"],
    correct: [0]
  }
]
