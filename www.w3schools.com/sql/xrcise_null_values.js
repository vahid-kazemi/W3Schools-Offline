qobjects = [
  {
    question: "What is a <code class='w3-codespan'>NULL</code> value in SQL?",
    options: [
      "A field with no value",
      "A field with a zero value",
      "A field containing spaces",
      "A field that has been deleted"
    ],
    correct: 0
  },
  
  {
    question: "How can you test for <code class='w3-codespan'>NULL</code> values in SQL?",
    options: [
      "Using the = operator",
      "Using the IS NULL operator",
      "Using the != operator",
      "Using the < operator"
    ],
    correct: 1
  },
  
  {
    question: "Which of the following SQL queries would retrieve customers with no address provided?",
    options: [
      "SELECT * FROM Customers WHERE Address = NULL;",
      "SELECT * FROM Customers WHERE Address IS NULL;",
      "SELECT * FROM Customers WHERE Address != NULL;",
      "SELECT * FROM Customers WHERE Address <> NULL;"
    ],
    correct: 1
  },


  {
    fillintheblanks: "exercise_null1.htm"
  },


  {
    fillintheblanks: "exercise_null2.htm"
  },

  {
    question: "What is the correct SQL syntax to test if a field is <code class='w3-codespan'>NOT NULL</code>?",
    options: [
      "SELECT column_name FROM table WHERE column_name IS NOT NULL;",
      "SELECT column_name FROM table WHERE column_name != NULL;",
      "SELECT column_name FROM table WHERE column_name <> NULL;",
      "SELECT column_name FROM table WHERE column_name = NOT NULL;"
    ],
    correct: 0
  },

  {
    draganddroptext: "<code>SELECT * FROM Customers WHERE ___ ___;</code>",
    draganddropquestion: "Select the correct syntax to test for empty values in an 'Address' field:",
    options: [
      "<code>IS NULL</code>",
      "<code>Address</code>",
      "<code>!=</code>",
      "<code>IS ZERO</code>"
    ],
    correct: [1, 0]
  }
]
