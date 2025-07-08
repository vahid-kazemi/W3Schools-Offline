qobjects = [
  {
    draganddroptext: "<code><ol><li>___</li><li>___</li><li>___</li><li>___</li></ol></code>",
    draganddropquestion: "Drag and drop four JOIN types in PostgreSQL.",
    options: [
      "<code>LEFT JOIN</code>",
      "<code>MOST JOIN</code>",
      "<code>TOP JOIN</code>",
      "<code>BOTTOM JOIN</code>",
      "<code>SYNTAX JOIN</code>",
      "<code>RIGHT JOIN</code>",
      "<code>LEAST JOIN</code>",
      "<code>NOT JOIN</code>",
      "<code>PLEASE JOIN</code>",
      "<code>FULL JOIN</code>",
      "<code>POST JOIN</code>",
      "<code>INNER JOIN</code>"
    ],
    correct: [[0, 5, 9, 11], [0, 5, 9, 11], [0, 5, 9, 11], [0, 5, 9, 11]]
  }, 
  {
    question: "Which one is NOT a legal JOIN type in PostgreSQL:",
    options: [
      "<code>INNER JOIN</code>",
      "<code>CROSS JOIN</code>",
      "<code>TOP JOIN</code>",
      "<code>LEFT JOIN</code>"
    ],
    correct: 2
  }, 
  {
    question: "True or False.<br>To be able to join two tables, they must have at least one column with the same name in both tables.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  }
]