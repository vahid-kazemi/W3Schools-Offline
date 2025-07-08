qobjects = [
  {
    draganddroptext: "<code>___ Orders.OrderID, Customers.CustomerName<br>___ Orders<br>___ Customers ___ Orders.CustomerID=Customers.CustomerID;</code>",
    draganddropquestion: "Drag and drop all keywords to make a legal SQL statement",
    options: [
      "<code>FROM</code>",
      "<code>SELECT</code>",
      "<code>ON</code>",
      "<code>RIGHT JOIN</code>"
    ],
    correct: [1,0,3,2]
  },
  {
    question: "True or False.<br>You cannot have more than one <code class='w3-codespan'>RIGHT JOIN</code> keyword in a SQL statement.",
    options: [
      "True",
      "False",
    ],
    correct: 1
  },
  {
    question: "True or False.<br>Consider the following code:<br><code class='codeblock'>SELECT OrderID, CustomerName<br>FROM Orders<br>RIGHT JOIN Customers ON Orders.CustomerID = Customers.CustomerID</code>The <code class='w3-codespan'>RIGHT JOIN</code> keyword returns all records from the right table (Customers), even if the customer does not have any order.",
    options: [
      "True",
      "False",
    ],
    correct: 0
  }
];
