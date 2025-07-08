qobjects = [
  {
    draganddroptext: "<code>___ ___ ___ (<br>&nbsp;&nbsp;brand VARCHAR(255),<br>&nbsp;&nbsp;model VARCHAR(255)<br>);</code>",
    draganddropquestion: "Drag and drop the missing code to create a table named 'cars'.",
    options: [
      "<code>cars</code>",
      "<code>TABLE</code>",
      "<code>INSERT</code>",
      "<code>MAKE</code>",
      "<code>CREATE</code>",
      "<code>AS</code>",
      "<code>MODEL</code>"],
    correct: [4, 1, 0]
  },
  {
    question: "True or False.<br>If you avoid specifying the data-type when creating a field, it will get the data-type VARCHAR(255).",
    options: [
      "True",
      "False"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>CREATE TABLE cars (<br>&nbsp;&nbsp;brand VARCHAR(255),<br>&nbsp;&nbsp;model VARCHAR(255)<br>&nbsp;&nbsp;___ ___<br>);</code>",
    draganddropquestion: "Drag and drop the missing code to create an integer field named 'year'.",
    options: [
      "<code>FLOAT</code>",
      "<code>INTEGER</code>",
      "<code>INT</code>",
      "<code>BIG</code>",
      "<code>NUMBER</code>",
      "<code>year</code>"
    ],
    correct: [5, [1, 2]]
  },
  {
    fillintheblanks: "exercise_create_table3.htm"
  }
]