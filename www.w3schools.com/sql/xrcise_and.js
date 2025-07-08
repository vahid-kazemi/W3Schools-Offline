qobjects = [
  {
    question: "Which SQL keyword is used to filter records based on multiple conditions?",
    options: ["WHERE", "FILTER", "MULTI", "IN"],
    correct: 0
  },
  {
    question: "What will this SQL query return?<br><code class='codeblock'>SELECT * FROM Customers<br>WHERE Country = 'Spain'<br>AND CustomerName LIKE 'G%';</code>",
    options: [
      "All customers from Spain",
      "All customers whose names start with 'G'",
      "All customers from Spain whose names start with 'G'",
      "All customers whose names start with 'Spain'"
    ],
    correct: 2
  },
  {
    question: "What result will this query return?<br><code class='codeblock'>SELECT * FROM Customers<br>WHERE Country = 'Germany'<br>AND City = 'Berlin' AND PostalCode > 12000;</code>",
    options: [
      "Customers from Germany in any city",
      "Customers from Germany in Berlin with a PostalCode over 12000",
      "Customers from Berlin with a PostalCode over 12000",
      "All German customers regardless of city or PostalCode"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_and1.htm"
  },
  {
    question: "True or False:<br>You cannot combine <code class='w3-codespan'>AND</code> and <code class='w3-codespan'>OR</code> operators.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  }
]
