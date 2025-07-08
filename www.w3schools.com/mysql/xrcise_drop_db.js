const qobjects = [
  {
    draganddroptext: "<code>___ DATABASE ___;</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to drop a database named 'SchoolDB'.",
    options: [
      "<code>DROP</code>",
      "<code>DATABASE</code>",
      "<code>TABLE</code>",
      "<code>SchoolDB</code>"
    ],
    correct: [0, 3]
  },
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>DROP DATABASE</code> statement?",
    options: [
      "To delete a table from a database",
      "To delete all records in a table",
      "To delete an existing database",
      "To delete specific rows from a database"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_database2.htm"
  },
  {
    question: "What happens when you drop a database?",
    options: [
      "All tables in the database are removed, but the database structure remains",
      "Only empty tables are removed",
      "The database and all its contents are permanently deleted",
      "The database is temporarily deactivated"
    ],
    correct: 2
  },
  {
    question: "What SQL command can confirm the database no longer exists after being dropped?",
    options: [
      "<code>SHOW TABLES;</code>",
      "<code>SELECT DATABASE;</code>",
      "<code>SHOW DATABASES;</code>",
      "<code>DESCRIBE DATABASES;</code>"
    ],
    correct: 2
  }
]
