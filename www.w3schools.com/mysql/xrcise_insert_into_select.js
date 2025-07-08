qobjects = [
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>INSERT INTO SELECT</code> statement?",
    options: [
      "To copy data from one table and insert it into another table",
      "To delete rows from one table and insert them into another",
      "To test for the existence of any record in a subquery",
      "To combine rows from two or more tables, based on a related column between them"
    ],
    correct: 0
  },
  {
    question: "True or False:<br>The <code class='w3-codespan'>INSERT INTO SELECT</code> statement requires that the data types in source and target tables match.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  },
  {
    question: "How do you copy specific columns from 'Suppliers' to 'Customers'?",
      options: [
        "INSERT INTO Customers<br>SELECT SupplierName, City<br>FROM Suppliers;",
        "INSERT INTO Customers (CustomerName, City)<br>SELECT SupplierName, City<br>FROM Suppliers;",
        "INSERT INTO Customers (CustomerName, City)<br>FROM Suppliers<br>SELECT SupplierName, City;",
        "SELECT SupplierName, City<br>INTO Customers (CustomerName, City)<br>FROM Suppliers;"
      ],
    correct: 1
  },
  {
    draganddroptext: "<code>INSERT INTO Customers<br>(CustomerName, City, Country)<br>___ SupplierName, City, Country<br>FROM ___;</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to complete the query.",
    options: [
      "<code>SELECT</code>",
      "<code>Suppliers</code>",
      "<code>WHERE</code>",
      "<code>INTO</code>"
    ],
    correct: [0, 1]
  }
]
