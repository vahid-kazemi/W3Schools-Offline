const qobjects = [
  {
    draganddroptext: "<code>___ ___ ( ___ varchar(255), ___ int, ___ varchar(255) );</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords and column names to create a table named 'Customers' with columns 'Name', 'ID', and 'Address'.",
    options: [
      "<code>Customers</code>",
      "<code>Name</code>",
      "<code>ID</code>",
      "<code>Address</code>",
      "<code>CREATE TABLE</code>"
    ],
    correct: [4, 0, [1,3], 2, [1,3]]
  },
  {
    question: "What is the primary purpose of the SQL <code class='w3-codespan'>CREATE TABLE</code> statement?",
    options: [
      "To create a new table in a database",
      "To insert data into a table",
      "To join a table",
      "To delete a table from a database"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_database3.htm"
  },
  {
    question: "What does the 'datatype' parameter in the <code class='w3-codespan'>CREATE TABLE</code> statement specify?",
    options: [
      "The default value of the column",
      "The name of the column",
      "The type of data the column can hold",
      "The primary key for the column"
    ],
    correct: 2
  }
]
