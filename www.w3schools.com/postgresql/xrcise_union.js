qobjects = [
  {
    question: "What is the primary purpose of the <code class='w3-codespan'>UNION</code> operator?",
    options: [
      "To create a new table with combined columns",
      "To delete duplicate rows in a table",
      "To perform a self join",
      "To combine the result-sets of two or more SELECT statements"
    ],
    correct: 3
  },
  {
    question: "What is the key difference between <code class='w3-codespan'>UNION</code> and <code class='w3-codespan'>UNION ALL</code>?",
    options: [
      "UNION includes all rows, including duplicates, while UNION ALL removes duplicates",
      "UNION removes duplicates by default, while UNION ALL includes all rows",
      "UNION sorts the rows, while UNION ALL does not",
      "There is no difference between UNION and UNION ALL"
    ],
    correct: 1
  },
  {
    question: "Which condition must be met when using the <code class='w3-codespan'>UNION</code> operator?",
    options: [
      "The tables must have the same number of rows",
      "The SELECT statements must have the same number of columns with similar data types",
      "The tables must have a primary key",
      "The columns must be indexed"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>SELECT city FROM customers<br>___<br>SELECT city FROM suppliers<br>ORDER BY city;</code>",
    draganddropquestion: "Drag and drop the correct syntax to combine cities from 'customers' and 'suppliers' with duplicate values.",
    options: [
      "<code>City</code>",
      "<code>UNION</code>",
      "<code>UNION ALL</code>",
      "<code>ORDER BY</code>",
      "<code>WHERE</code>"
    ],
    correct: [2]
  }
]
