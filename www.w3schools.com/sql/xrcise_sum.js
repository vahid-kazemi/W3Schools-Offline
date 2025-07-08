qobjects = [
  {
    question: "What does the SQL <code class='w3-codespan'>SUM()</code> function do?",
    options: [
      "Counts the number of rows in a table",
      "Returns the total sum of a numeric column",
      "Calculates the average value of a column",
      "Returns the maximum value in a column"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_functions5.htm"
  },
  {
    question: "Which of the following queries would return the sum of all Quantity values in the 'OrderDetails' table?",
    options: [
      "<code>SELECT SUM(Quantity) FROM OrderDetails;</code>",
      "<code>SELECT COUNT(Quantity) FROM OrderDetails;</code>",
      "<code>SELECT TOTAL(Quantity) FROM OrderDetails;</code>",
      "<code>SELECT SUM(ProductID) FROM OrderDetails;</code>"
    ],
    correct: 0
  },
  {
    question: "What will the following query return?<br><code class='codeblock'>SELECT SUM(Quantity)<br>FROM OrderDetails<br>WHERE ProductID = 11;</code>",
    options: [
      "The total sum of all Quantity values in the OrderDetails table",
      "The total sum of Quantity values where ProductID is 11",
      "The sum of all ProductID values where Quantity is 11",
      "The average of Quantity values where ProductID is 11"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>SELECT ___(Quantity) FROM OrderDetails;</code>",
    draganddropquestion: "Drag and drop the correct function to calculate the total quantity from the OrderDetails table.",
    options: [
      "<code>SUM</code>",
      "<code>AVG</code>",
      "<code>MAX</code>",
      "<code>MIN</code>"
    ],
    correct: [0]
  }
]
