qobjects = [
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>CREATE INDEX</code> statement?",
    options: [
      "To create a backup of a table",
      "To retrieve data more quickly by creating indexes",
      "To ensure data integrity in a table",
      "To delete an existing index in a table"
    ],
    correct: 1
  },
  {
    question: "How can you create a unique index on the 'ID' column in the 'Persons' table?",
    options: [
      "CREATE INDEX idx_id ON Persons (ID);",
      "CREATE INDEX UNIQUE idx_id ON Persons (ID);",
      "CREATE UNIQUE INDEX idx_id ON Persons (ID);",
      "CREATE INDEX idx_id UNIQUE ON Persons (ID);"
    ],
    correct: 2
  },
  {
    question: "What is the correct syntax to create an index on both the 'LastName' and 'FirstName' columns?",
    options: [
      "CREATE INDEX idx_fullname ON Persons (LastName, FirstName);",
      "CREATE INDEX idx_fullname ON (LastName, FirstName) IN Persons;",
      "CREATE UNIQUE INDEX idx_fullname ON Persons (LastName AND FirstName);",
      "CREATE INDEX idx_fullname ON Persons {LastName, FirstName};"
    ],
    correct: 0
  },
  {
    question: "Which SQL statement is used to delete an index in a table?",
    options: [
      "DROP INDEX",
      "DROP ALTER",
      "ALTER TABLE",
      "DELETE INDEX"
    ],
    correct: 0
  },
  {
    question: "What happens when you update a table with indexes?",
    options: [
      "The table updates faster because of the index",
      "The index does not affect the update process",
      "The update takes longer because the index also needs to be updated",
      "Indexes are temporarily removed during updates"
    ],
    correct: 2
  },
]
