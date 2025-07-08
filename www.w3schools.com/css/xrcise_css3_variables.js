qobjects = [
  {
    draganddroptext: "<code>:root {<br>&nbsp;&nbsp;___: #1e90ff;<br>}</code>",
    draganddropquestion: "Drag and drop the correct variable names to declare a global CSS variable for blue colors.",
    options: ["--blue", "--color", "--white", "--background"],
    correct: [0]
  },
  {
    question: "Which CSS function is used to insert the value of a CSS variable?",
    options: [
      "<code>variable()</code>",
      "<code>const()</code>",
      "<code>let()</code>",
      "<code>insert()</code>",
      "<code>var()</code>"
    ],
    correct: 4
  },
  {
    draganddroptext: "<code>body {<br>&nbsp;&nbsp;background-color: ___(___);<br>}</code>",
    draganddropquestion: "Drag and drop the correct variable name to set the background color of the body to blue.",
    options: ["--blue", "--white", "--bg-color", "--text-color", "var"],
    correct: [4, 0]
  },
  {
    draganddroptext: "<code>button {<br>&nbsp;&nbsp;background-color: ___;<br>&nbsp;&nbsp;color: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct <code class='w3-codespan'>var()</code> values to style the button with a white background and blue text.",
    options: ["var(--blue)", "var(--white)", "var(--bg)", "var(--text)"],
    correct: [1, 0]
  },
  {
    draganddroptext: "<code>:root {<br>&nbsp;&nbsp;--blue: #6495ed;<br>&nbsp;&nbsp;--white: #faf0e6;<br>}<br><br>body {<br>&nbsp;&nbsp;background-color: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct <code class='w3-codespan'>var()</code> function to update the body's background color based on the new blue variable.",
    options: ["--blue", "var(--blue)", "blue", "inherit", "var"],
    correct: [1]
  },
  {
    question: "True or False:<br>CSS Variables can have global and local scope.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  }
]
