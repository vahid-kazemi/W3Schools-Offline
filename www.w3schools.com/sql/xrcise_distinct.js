qobjects = [
  {
    question: "Which of the following SQL statements would return a list of all unique countries from a table named 'Customers'?",
    options: [
      "SELECT UNIQUE Country FROM Customers;",
      "SELECT Country FROM Customers;",
      "SELECT DISTINCT Country FROM Customers;",
      "SELECT * FROM Customers WHERE Country IS UNIQUE;"
    ],
    correct: 2
  },
  
  {
    fillintheblanks: "exercise_select3.htm"
  },

  {
    question: "What would be the result of omitting the <code class='w3-codespan'>DISTINCT</code> keyword in a statement like <code class='w3-codespan'>SELECT DISTINCT Country FROM Customers;</code>?",
    options: [
      "It would result in an error",
      "It would return all values in the Country column, including duplicate values.",
      "It would remove all null values from the Country column",
      "It would sort the countries alphabetically"
    ],
    correct: 1
  },

  {
    question: "What does the following SQL statement do?<br><code class='w3-codespan'>SELECT COUNT(DISTINCT Country) FROM Customers;</code>",
    options: [
      "Returns all countries in the Customers table, excluding the 10 first countries",
      "Returns the number of different countries in the Customers table",
      "Returns only the first 10 countries in the Customers table"
    ],
    correct: 1
  },

  {
    question: "In which scenario would you most likely use the <code class='w3-codespan'>DISTINCT</code> keyword?",
    options: [
      "To select all rows from a table",
      "To return unique values from a column that contains duplicates",
      "To delete duplicate rows in a table",
      "To filter rows that contain null values"
    ],
    correct: 1
  }
]
