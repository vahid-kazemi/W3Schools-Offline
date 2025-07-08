qobjects = [
  {
    question: "What does the <code class='w3-codespan'>%</code> wildcard represent in SQL?",
    options: [
      "Zero or more characters",
      "A single character",
      "Any single character within a range",
      "An exact match for a string"
    ],
    correct: 0
  },
  {
    question: "Which wildcard should be used to represent a single character in SQL?",
    options: [
      "%",
      "_",
      "[]",
      "-"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_wildcards1.htm"
  },
  {
    question: "How do you specify a range of characters in SQL using wildcards?",
    options: [
      "Using '%' with the range inside brackets",
      "Using '_' with the range inside quotes",
      "Using '[]' with the range and a '-' between the characters",
      "Using '{}' with the range and a ',' between the characters"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_wildcards2.htm"
  },
  {
    fillintheblanks: "exercise_wildcards3.htm"
  },
  {
    fillintheblanks: "exercise_wildcards4.htm"
  },
  {
    draganddroptext: "<code>SELECT * FROM Customers WHERE City LIKE ___;</code>",
    draganddropquestion: "Drag and drop the correct wildcard to select cities that start with 'L' and end with 'n'.",
    options: [
      "<code>'L%n'</code>",
      "<code>'_Ln'</code>",
      "<code>'Lxn'</code>",
      "<code>'_Ln%'</code>"
    ],
    correct: [0]
  }
]
