qobjects = [
  {
    question: "What is the primary purpose of the SQL <code class='w3-codespan'>SELECT INTO</code> statement?",
    options: [
      "To update data in an existing table",
      "To copy data from one table into a new table",
      "To delete data from a table",
      "To create an index on a table"
    ],
    correct: 1
  },
  {
    question: "Which of the following SQL statements creates a backup copy of the 'Customers' table?",
    options: [
      "SELECT * FROM Customers INTO CustomersBackup;",
      "SELECT INTO CustomersBackup FROM Customers;",
      "SELECT * INTO CustomersBackup FROM Customers;",
      "SELECT INTO Customers FROM CustomersBackup;"
    ],
    correct: 2
  },
  {
    question: "How can you copy only specific columns into a new table using <code class='w3-codespan'>SELECT INTO</code>?",
    options: [
      "SELECT column1, column2 INTO newtable FROM oldtable;",
      "SELECT INTO newtable column1, column2 FROM oldtable;",
      "SELECT column1, column2 INTO oldtable FROM newtable;",
      "SELECT INTO oldtable column1, column2 FROM newtable;"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>SELECT * ___ CustomersGermany<br>___ Customers<br>___ Country = '___';</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to create a new table with German customers only.",
    options: [
      "<code>*</code>",
      "<code>Germany</code>",
      "<code>Country</code>",
      "<code>FROM</code>",
      "<code>WHERE</code>",
      "<code>ALL</code>",
      "<code>INTO</code>",
      "<code>UNION</code>"
    ],
    correct: [6, 3, 4, 1]
  },
  {
    draganddroptext: "<code>SELECT Customers.CustomerName, Orders.OrderID<br>___ CustomersOrderBackup<br>FROM Customers<br>___ Orders ___ Customers.CustomerID = Orders.CustomerID;</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to copy data from multiple tables into a new table.",
    options: [
      "<code>SELECT</code>",
      "<code>INTO</code>",
      "<code>ALL</code>",
      "<code>FROM</code>",
      "<code>LEFT JOIN</code>",
      "<code>IN</code>",
      "<code>ON</code>"
    ],
    correct: [1, 4, 6]
  }
];
