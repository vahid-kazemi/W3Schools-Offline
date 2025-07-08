qobjects = [
  {
    question: "What does the SQL <code class='w3-codespan'>AVG()</code> function do?",
    options: [
      "Returns the sum of a numeric column",
      "Returns the average value of a numeric column",
      "Counts the number of rows in a table",
      "Finds the maximum value in a numeric column"
    ],
    correct: 1
  },
  {
    question: "Which of the following queries will return the average price of products?",
    options: [
      "<code>SELECT SUM(Price) FROM Products;</code>",
      "<code>SELECT COUNT(Price) FROM Products;</code>",
      "<code>SELECT MAX(Price) FROM Products;</code>",
      "<code>SELECT AVG(Price) FROM Products;</code>"
    ],
    correct: 3
  },
  {
    fillintheblanks: "exercise_functions4.htm"
  },
  {
    question: "What does the <code class='w3-codespan'>AVG()</code> function ignore while calculating the average?",
    options: [
      "Zero values",
      "Negative values",
      "NULL values",
      "Duplicate values"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>SELECT ___(Price) FROM Products;</code>",
    draganddropquestion: "Drag and drop the correct function to calculate the average price of products.",
    options: [
      "<code>AVG</code>",
      "<code>SUM</code>",
      "<code>COUNT</code>",
      "<code>MAX</code>"
    ],
    correct: [0]
  }
]
