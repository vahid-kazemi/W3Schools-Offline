qobjects = [
  {
    question: "What is the purpose of the ternary operator in C?",
    options: [
      "To write multiple lines of code within an if...else statement",
      "To replace a simple if...else statement with a single line of code",
      "To handle complex conditions that require nested if statements",
      "To declare a new variable"
    ],
    correct: 1
  },
  {
    question: "What is the correct syntax for using the ternary operator?",
    options: [
      "<code class='w3-codespan'>variable = condition ? expressionTrue : expressionFalse;</code>",
      "<code class='w3-codespan'>if (condition) ? expressionTrue : expressionFalse;</code>",
      "<code class='w3-codespan'>condition ? var = expressionTrue : variable = expressionFalse;</code>"
    ],
    correct: 0
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int time = 20;<br>(time < 18) ? printf(\"Good day.\") : printf(\"Good evening.\");</code>",
    options: [
      "Good day.",
      "Good evening.",
      "No output",
      "An error"
    ],
    correct: 1
  },
  {
    question: "Rewrite the following code using the ternary operator:<br><code class='codeblock'>int x = 5;<br>if (x > 10) {<br>&nbsp;&nbsp;printf(\"Greater\");<br>} else {<br>&nbsp;&nbsp;printf(\"Smaller\");<br>}</code>",
    options: [
      "<code class='w3-codespan'>(x > 10) ? printf(\"Greater\") : printf(\"Smaller\");</code>",
      "<code class='w3-codespan'>(x < 10) ? printf(\"Greater\") : printf(\"Smaller\");</code>",
      "<code class='w3-codespan'>printf(\"Greater\") ? (x > 10) : printf(\"Smaller\");</code>",
      "<code class='w3-codespan'>(x > 10) : printf(\"Greater\") ? printf(\"Smaller\");</code>"
    ],
    correct: 0
  }
]
