const qobjects = [
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
    question: "Which of the following SQL statements will create a table named 'Books' with columns for ID, Title, and Author?",
    options: [
      "CREATE TABLE Books (ID int, Title varchar(255), Author varchar(255));",
      "CREATE Books TABLE (ID int, Title varchar(255), Author varchar(255));",
      "CREATE TABLE (Books) (ID int, Title varchar(255), Author varchar(255));",
      "CREATE DATABASE TABLE (Books) (ID int, Title varchar(255), Author varchar(255));"
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
  },
  {
    draganddroptext: "<code>___ ___ ( ___ varchar(255), ___ int, ___ varchar(255) );</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords and column names to create a table named 'Customers' with columns 'Name', 'ID', and 'Address'.",
    options: ["Customers", "Name", "ID", "Address", "CREATE TABLE"],
    correct: [4, 0, 1, 2, 3]
  }
]
