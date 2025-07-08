qobjects = [
  {
    question: "What is a correct syntax for creating a comment in JavaScript?",
    options: [
      "<code># this is a comment</code>",
      "<code>// this is a comment</code>",
      "<code>'' this is a comment</code>",
      "<code>## this is a comment</code>"        
    ],
    correct: 1
  },
  {
    draganddroptext: "<code class='codeblock'>___<br>This code will<br>be ignored by JavaScript<br>and will NOT be executed<br>___</code>",
    draganddropquestion: "Select the correct syntax for commenting out the entire section of the code.",
    options: [
      "<code>//</code>",
      "<code>*/</code>",
      "<code>##</code>",
      "<code>'''</code>",
      "<code>'''</code>",
      "<code>/*</code>",
      "<code>//</code>",
    ],
    correct: [5, 1]
  },
  {
    question: "What will be the value of <code class='w3-codespan'>x</code>?<br><code class='codeblock'>x = 5;<br>//x = 7;</code>",
    options: [
      "<code>5</code>",
      "<code>7</code>"
    ],
    correct: 0
  },
  
]