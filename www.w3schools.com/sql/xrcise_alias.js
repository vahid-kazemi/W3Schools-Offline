qobjects = [
  {
    question: "Which SQL statement creates an alias for the CustomerID column as 'ID'?",
    options: [
      "SELECT CustomerID = 'ID' FROM Customers;",
      "SELECT CustomerID AS ID FROM Customers;",
      "SELECT CustomerID TO ID FROM Customers;",
      "SELECT CustomerID 'ID' FROM Customers;"
    ],
    correct: 1
  },
  {
    question: "What is the primary purpose of SQL aliases?",
    options: [
      "To permanently rename a table or column",
      "To create temporary names for columns or tables",
      "To join multiple tables together",
      "To optimize query performance"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_alias1.htm"
  },
  {
    fillintheblanks: "exercise_alias2.htm"
  },
  {
    draganddroptext: "<code>SELECT ProductName AS ___</code>",
    draganddropquestion: "Drag and drop the correct syntax to create an alias for ProductName as 'Great Products'.",
    options: [
      "<code>'Great Products'</code>",
      "<code>[Great Products]</code>",
      "<code>'Products'</code>",
      "<code>[Products]</code>",
      "<code>Great Products</code>"
    ],
    correct: [1]
  }
];
