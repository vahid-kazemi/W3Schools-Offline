const qobjects = [
  {
    question: "Which SQL operator is used to add two numbers?",
    options: ["+", "-", "*", "/"],
    correct: 0
  },
  {
    question: "What does the <code class='w3-codespan'>%</code> operator do in SQL?",
    options: [
      "Calculates the percentage of a value",
      "Returns the remainder of a division",
      "Performs bitwise AND operation"
    ],
    correct: 1
  },
  {
    question: "Which SQL operator is used to check if a value matches a pattern?",
    options: [
      "=", 
      "LIKE", 
      "IN", 
      "BETWEEN"
    ],
    correct: 1
  },
  {
    question: "Which of these operators is a <b>compound operator</b> in SQL?",
    options: [
      "=", 
      "+=", 
      "AND", 
      "IN"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of the <code class='w3-codespan'>BETWEEN</code> operator in SQL?",
    options: [
      "To check if a value is between a given range",
      "To compare two columns",
      "To check for matching patterns in strings",
      "To combine multiple conditions"
    ],
    correct: 0
  },
  {
    question: "The <code class='w3-codespan'><></code> operator in SQL is equivalent to:",
    options: [
      "=", 
      "NOT", 
      "NOT EQUAL", 
      "BETWEEN"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>SELECT * FROM Customers<br>WHERE City = 'Berlin' ___ Age ___ 30;</code>",
    draganddropquestion: "Drag and drop the correct SQL operators to complete the query.",
    options: ["City =", "AND", "<", "Population", "City"],
    correct: [1, 2]
  },
]
