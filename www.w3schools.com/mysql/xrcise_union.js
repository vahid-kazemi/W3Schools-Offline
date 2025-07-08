qobjects = [
  {
    draganddroptext: "<code>___ City ___ Customers<br>___<br>___ City ___ Suppliers<br>___ ___ City;</code>",
    draganddropquestion: "Drag and drop all keywords to make a legal SQL statement",
    options: [
      "<code>FROM</code>",
      "<code>BY</code>",
      "<code>UNION</code>",
      "<code>SELECT</code>",
      "<code>FROM</code>",
      "<code>SELECT</code>",
      "<code>ORDER</code>"
    ],
    correct: [[3,5],[0,4],2,[3,5],[0,4],6,1]
  },
  {
    question: "<code class='w3-codespan'>UNION</code> selects only distinct values, how can write the <code class='w3-codespan'>UNION</code> keyword to also select duplicate values?",
    options: [
      "<code>UNION DISTINCT -1</code>",
      "<code>UNION NO DISTINCT</code>",
      "<code>UNION ALL</code>",
      "<code>UNION MAX</code>"
    ],
    correct: 2
  },
  {
    question: "True or False.<br>When using <code class='w3-codespan'>UNION ALL</code> you cannot use a <code class='w3-codespan'>WHERE</code> clause in the same SQL statement.",
    options: [
      "True",
      "False",
    ],
    correct: 1
  }
];
