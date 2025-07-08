qobjects = [
  {
    question: "Which function in MySQL is used to handle <code class='w3-codespan'>NULL</code> values by providing an alternative value?",
    options: [
      "NULL()",
      "ISNULL()",
      "IFNULL()",
      "NVL()"
    ],
    correct: 2
  },
  {
    question: "What will happen if you do not handle <code class='w3-codespan'>NULL</code> values in an expression like <code class='w3-codespan'>UnitPrice * (UnitsInStock + UnitsOnOrder)</code>?",
    options: [
      "The result will be NULL if any value in the expression is NULL.",
      "The result will default to 0.",
      "The query will fail to execute.",
      "The NULL value will be ignored."
    ],
    correct: 0
  },
  {
    question: "There is also another function we can use to achieve similar result as with the <code class='w3-codespan'>IFNULL()</code> function, which one?",
    options: [
      "ISNULL()",
      "NVL()",
      "COALESCE()"
    ],
    correct: 2
  }
]
