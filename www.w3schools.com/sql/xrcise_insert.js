qobjects = [
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>INSERT INTO</code> statement?",
    options: [
      "To update records in a table",
      "To delete records from a table",
      "To add new records to a table",
      "To retrieve records from a table"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>___ Customers (CustomerName, City, Country)<br>___ ('Cardinal', 'Stavanger', 'Norway');</code>",
    draganddropquestion: "Drag and drop the correct syntax to insert data into the Customers table for specified columns:",
    options: [
      "<code>INSERT INTO</code>",
      "<code>VALUES</code>",
      "<code>ADD INTO</code>",
      "<code>INSERT</code>",
      "<code>VALUE</code>"
    ],
    correct: [0, 1]
  },
  {
    fillintheblanks: "exercise_insert1.htm"
  },
  {
    question: "How can you insert multiple rows with a single <code class='w3-codespan'>INSERT INTO</code> statement in SQL?",
    options: [
      "INSERT INTO table_name VALUES (value1), (value2), (value3);",
      "INSERT INTO table_name VALUES ROWS (value1), (value2), (value3);",
      "INSERT INTO table_name ROWS (value1), (value2), (value3);",
      "INSERT INTO table_name VALUES (value1, value2, value3);"
    ],
    correct: 0
  }
]
