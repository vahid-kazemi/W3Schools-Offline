qobjects = [
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>SELECT</code> statement?",
    options: [
      "To insert data into a database",
      "To select data from a database",
      "To delete data from a database",
      "To update data in a database"
    ],
    correct: 1
  },

  {
    fillintheblanks: "exercise_select1.htm"
  },

  {
    fillintheblanks: "exercise_select2.htm"
  },

  {
    question: "How would you select the 'CustomerName' and 'City' columns from a table named 'Customers'?",
    options: [
      "SELECT CustomerName City FROM Customers;",
      "SELECT * FROM Customers;",
      "SELECT CustomerName, City FROM Customers;",
      "SELECT CustomerName AND City FROM Customers;"
    ],
    correct: 2
  },

  {
    draganddroptext: "<code>___ ___ Customers;</code>",
    draganddropquestion: "Drag and drop the correct syntax to select all columns from a table named 'Customers'",
    options: [
      "<code>SELECT *</code>",
      "<code>GET *</code>",
      "<code>SELECT ALL</code>",
      "<code>FROM</code>"
    ],
    correct: [0, 3]
  }
]
