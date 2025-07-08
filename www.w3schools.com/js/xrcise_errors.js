qobjects = [
  {
    question: "Only one of the following words is a legal JavaScript statement, which one?",
    options: [
      "<code>find</code>",
      "<code>check</code>",
      "<code>try</code>",
      "<code>execute</code>",
    ],
    correct: 2
  },{
    draganddroptext: "<code class='codeblock'>___ {<br>&nbsp;&nbsp;let x = 'Hello';<br>}<br>___(err) {<br>&nbsp;&nbsp;alert('Something wen wrong');<br>}</code><br>",
    draganddropquestion: "Insert the missing syntax to complete the error handling:",
    options: [
      "<code>if</code>",
      "<code>elseif</code>",
      "<code>catch</code>",
      "<code>repeat</code>",
      "<code>try</code>"
    ],
    correct: [4, 2]
  },
  {
    draganddroptext: "<code class='codeblock'>___ {<br>&nbsp;&nbsp;let x = 'Hello';<br>}<br>___(err) {<br>&nbsp;&nbsp;alert('Something went wrong');<br>___ {<br>&nbsp;&nbsp;alert('Everything went fine');<br>}</code><br>",
    draganddropquestion: "Insert the missing syntax to complete the error handling:",
    options: [
      "<code>default</code>",
      "<code>if</code>",
      "<code>elseif</code>",
      "<code>end</code>",
      "<code>catch</code>",
      "<code>repeat</code>",
      "<code>finally</code>",
      "<code>try</code>"
    ],
    correct: [7, 4, 6]
  },
]