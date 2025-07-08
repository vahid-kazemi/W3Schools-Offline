const qobjects = [
  {
    question: "In SQL Server, which function can be used to replace <code class='w3-codespan'>NULL</code> values with a specified alternative?",
    options: [
      "NVL()",
      "ISNULL()",
      "IFNULL()",
      "COALESCE()"
    ],
    correct: 1
  },
  {
    question: "Which function in MySQL is used to handle <code class='w3-codespan'>NULL</code> values by providing an alternative value?",
    options: [
      "COALESCE()",
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
    question: "Which function is supported by both Oracle and SQL Server to handle <code class='w3-codespan'>NULL</code> values?",
    options: [
      "NVL()",
      "ISNULL()",
      "IFNULL()",
      "COALESCE()"
    ],
    correct: 3
  },
  {
    question: "Which function is specific to Oracle for replacing <code class='w3-codespan'>NULL</code> values?",
    options: [
      "ISNULL()",
      "IFNULL()",
      "NVL()",
      "COALESCE()"
    ],
    correct: 2
  }
]
