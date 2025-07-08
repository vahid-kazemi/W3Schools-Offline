qobjects = [
  {
    draganddroptext: "<code>#div1 {<br>&nbsp;&nbsp;width: ___(100% - 50px);<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS math function to calculate the width of a div.",
    options: ["calc", "max", "min", "average"],
    correct: [0]
  },
  {
    question: "Which CSS math function would you use to set a width to at least 50% or 300px, whichever is larger?",
    options: [
      "<code>calc()</code>",
      "<code>min()</code>",
      "<code>max()</code>",
      "<code>average()</code>"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>#div1 {<br>&nbsp;&nbsp;width: ___(50%, 300px);<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS math function to set the width to the largest value between 50% and 300px.",
    options: ["calc", "max", "min", "average"],
    correct: [1]
  },
  {
    question: "What does the <code class='w3-codespan'>calc()</code> function do in CSS?",
    options: [
      "Chooses the largest value from a list of values",
      "Chooses the smallest value from a list of values",
      "Performs a mathematical calculation for a property value",
      "Sets a default value for properties"
    ],
    correct: 2
  },
  {
    question: "Which of the following is a correct use of the <code class='w3-codespan'>calc()</code> function?",
    options: [
      "<code>width: calc(100% - 50px);</code>",
      "<code>width: calc(100% , 50px);</code>",
      "<code>width: calc(100% * px50);</code>",
      "<code>width: calc(100% add 50px);</code>"
    ],
    correct: 0
  },
  {
    question: "What does the <code class='w3-codespan'>max()</code> function do?",
    options: [
      "Chooses the largest value from a list of values",
      "Performs a mathematical calculation",
      "Chooses the smallest value from a list of values",
      "Sets a fixed value for properties"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>#div1 {<br>&nbsp;&nbsp;width: ___(50%, 300px);<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS math function to set the width to the smallest value between 50% and 300px.",
    options: ["calc", "max", "min", "average"],
    correct: [2]
  },
  {
    draganddroptext: "<code>#div1 {<br>&nbsp;&nbsp;height: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property value to set the height of the div to be exactly 200 pixels.",
    options: ["200px", "calc(200px)", "max(200px)", "min(200px)"],
    correct: [0]
  },
  {
    draganddroptext: "<code>#div1 {<br>&nbsp;&nbsp;width: ___(50% + ___);<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS math function and value to calculate a width that is 50% plus 20 pixels.",
    options: ["calc", "20px", "max", "min", "10px"],
    correct: [0, 1]
  }
]
