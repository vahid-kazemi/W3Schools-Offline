const qobjects = [
  {
    question: "What is the primary purpose of a stored procedure in SQL Server?",
    options: [
      "To optimize indexing in the database",
      "To save reusable SQL code for repeated use",
      "To create tables automatically",
      "To handle NULL values in queries"
    ],
    correct: 1
  },
  {
    question: "Which of the following is the correct syntax to create a stored procedure?",
    options: [
      "CREATE PROCEDURE procedure_name GO sql_statement AS;",
      "EXEC PROCEDURE procedure_name GO sql_statement;",
      "CREATE PROCEDURE procedure_name GO sql_statement;",
      "CREATE PROCEDURE procedure_name AS sql_statement GO;"
    ],
    correct: 3
  },
  {
    question: "How do you execute a stored procedure named <code class='w3-codespan'>GetCustomers</code>?",
    options: [
      "CALL GetCustomers;",
      "EXEC GetCustomers;",
      "RUN PROCEDURE GetCustomers;",
      "EXECUTE GetCustomers();"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of the <code class='w3-codespan'>@City</code> parameter in the following stored procedure?\n\n<code class='codeblock'>CREATE PROCEDURE SelectCustomers @City nvarchar(30)<br>AS<br>SELECT * FROM Customers WHERE City = @City<br>GO;</code>",
    options: [
      "To define the column to search in the Customers table",
      "To specify a variable for the City filter in the query",
      "To assign default values to all records in the City column",
      "To replace NULL values in the City column"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>___ SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)<br>___<br>SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode<br>___;</code>",
    draganddropquestion: "Drag and drop the correct syntax to create a stored procedure with multiple parameters.",
    options: [
      "<code>SELECT</code>",
      "<code>CREATE PROCEDURE</code>",
      "<code>GO</code>",
      "<code>AS</code>",
      "<code>EXEC</code>",
      "<code>JOIN</code>"
    ],
    correct: [1, 3, 2]
  },
  {
    question: "Which of the following is a valid way to execute a stored procedure with two parameters?",
    options: [
      "EXEC GetCustomerDetails @City = 'London', @PostalCode = 'WA1 1DP';",
      "CALL GetCustomerDetails 'London', 'WA1 1DP';",
      "EXECUTE PROCEDURE GetCustomerDetails(London, WA1 1DP);",
      "EXEC GetCustomerDetails('London', 'WA1 1DP');"
    ],
    correct: 0
  }
]
