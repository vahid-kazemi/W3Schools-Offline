qobjects = [
  {
    draganddroptext: "<code>if (x < 5 ___ x < 10)</code>",
    draganddropquestion: "Drag and drop the correct logical operator to ensure both conditions must be true.",
    options: ["&&", "||", "!", "=="],
    correct: [0]
  },
  {
    question: "What does the logical operator <code class='w3-codespan'>||</code> do in C#?",
    options: [
      "Returns True if both conditions are true.",
      "Returns True if at least one condition is true.",
      "Reverses the result of a condition.",
      "Returns True if both conditions are false."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>___(x < 5 && x < 10)</code>",
    draganddropquestion: "Drag and drop the correct operator to reverse the result of the condition.",
    options: ["&&", "||", "!", "=="],
    correct: [2]
  },
  {
    question: "What does the logical operator <code class='w3-codespan'>&&</code> do in C#?",
    options: [
      "Returns True if at least one condition is true.",
      "Returns True only if both conditions are true.",
      "Reverses the result of a condition.",
      "Checks if two values are equal."
    ],
    correct: 1
  },
  {
    question: "What will the following code output?<br><code class='w3-codespan'>int x = 7;<br>Console.WriteLine(x > 5 && x < 10);</code>",
    options: [
      "True",
      "False",
      "7",
      "Error"
    ],
    correct: 0
  }
]
