qobjects = [
  {
    question: "What is the primary purpose of the SQL <code class='w3-codespan'>DEFAULT</code> constraint?",
    options: [
      "To ensure all values in a column are unique",
      "To set a default value for a column when no value is specified",
      "To limit the range of values in a column",
      "To prevent NULL values in a column"
    ],
    correct: 1
  },
  {
    question: "How do you add a <code class='w3-codespan'>DEFAULT</code> constraint to an existing table in SQL Server?",
    options: [
      "ALTER TABLE Persons ADD DEFAULT 'Sandnes' TO City;",
      "ALTER TABLE Persons ADD CONSTRAINT df_City DEFAULT 'Sandnes' FOR City;",
      "ALTER TABLE Persons MODIFY City SET DEFAULT 'Sandnes';",
      "ALTER TABLE Persons ALTER COLUMN City DEFAULT 'Sandnes';"
    ],
    correct: 1
  },
  {
    question: "Which SQL statement drops a <code class='w3-codespan'>DEFAULT</code> constraint in MySQL?",
    options: [
      "ALTER TABLE Persons DROP DEFAULT ON City;",
      "ALTER TABLE Persons ALTER City REMOVE DEFAULT;",
      "ALTER TABLE Persons ALTER City DROP DEFAULT;",
      "ALTER TABLE Persons DELETE DEFAULT City;"
    ],
    correct: 2
  },
  {
    question: "What happens when a new row is inserted into a table with a column that has a <code class='w3-codespan'>DEFAULT</code> constraint and no value is provided for that column?",
    options: [
      "The operation fails",
      "The column is left NULL",
      "The column gets the default value",
      "The column inherits the value from the previous row"
    ],
    correct: 2
  }
]
