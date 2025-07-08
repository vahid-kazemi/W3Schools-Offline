const qobjects = [
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>CREATE DATABASE</code> statement?",
    options: [
      "To create a new table in an existing database",
      "To delete an existing database",
      "To create a new SQL database",
      "To modify an existing database"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_database1.htm"
  },
  {
    question: "What should you ensure before creating a new database?",
    options: [
      "You have guest privileges",
      "You have admin privileges",
      "You have at least one existing table",
      "You have a backup of all other databases"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>___ DATABASE ___;</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to create a database named 'SchoolDB'.",
    options: ["CREATE", "DATABASE", "TABLE", "SchoolDB"],
    correct: [0, 3]
  },
  {
    question: "After creating a database, how can you confirm its creation?",
    options: [
      "By running the command SHOW DATABASES;",
      "By restarting the SQL server",
      "By creating a table inside the database",
      "By running a SELECT query"
    ],
    correct: 0
  }
]
