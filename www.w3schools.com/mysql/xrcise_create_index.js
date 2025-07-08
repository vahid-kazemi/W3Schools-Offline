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
      "<code>CREATE INDEX idx_id ON Persons (ID);",
      "<code>CREATE INDEX UNIQUE idx_id ON Persons (ID);</code>",
      "<code>CREATE UNIQUE INDEX idx_id ON Persons (ID);</code>",
      "<code>CREATE INDEX idx_id UNIQUE ON Persons (ID);</code>"
    ],
    correct: 2
  },
  {
    question: "What is the correct syntax to create an index on both the 'LastName' and 'FirstName' columns?",
    options: [
      "<code class='codeblock'>CREATE INDEX idx_fullname<br>ON Persons (LastName, FirstName);</code>",
      "<code class='codeblock'>CREATE INDEX idx_fullname<br>ON (LastName, FirstName) IN Persons;</code>",
      "<code class='codeblock'>CREATE UNIQUE INDEX idx_fullname<br>ON Persons (LastName AND FirstName);</code>",
      "<code class='codeblock'>CREATE INDEX idx_fullname<br>ON Persons {LastName, FirstName};</code>"
    ],
    correct: 0
  },
  {
    question: "Which SQL statement is used to delete an index in a table?",
    options: [
      "<code>DROP INDEX</code>",
      "<code>DROP ALTER</code>",
      "<code>ALTER TABLE</code>",
      "<code>DELETE INDEX</code>"
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
