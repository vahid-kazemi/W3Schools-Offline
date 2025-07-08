qobjects = [
  {
    question: "Which one of the following has a correct syntax for removing a column?",
    options: [
      "<code>DROP COLUMN year FROM cars;</code>",
      "<code>FROM cars DROP COLUMN year;</code>",
      "<code>ALTER TABLE cars DROP COLUMN year;</code>",
      "<code>ALTER COLUMN year FROM cars;</code>"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>___ ___ persons<br>___ ___ firstname;</code>",
    draganddropquestion: "Drag and drop the missing code to drop the 'firstname' column.",
    options: [
      "<code>ALTER</code>",
      "<code>WHERE</code>",
      "<code>DROP</code>",
      "<code>TABLE</code>",
      "<code>ALTER</code>",
      "<code>COLUMN</code>",
      "<code>SET</code>",
      "<code>TYPE</code>",
      "<code>SELECT</code>"
    ],
    correct: [[0, 4], 3, 2, 5]
  },
  
  {
    fillintheblanks: "exercise_create_table9.htm"
  }
]