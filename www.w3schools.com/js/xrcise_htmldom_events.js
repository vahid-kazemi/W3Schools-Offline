qobjects = [
  {
    question: "What is a legal HTML attribute used for adding some action when a button is clicked?",
    options: [
      "<code>&lt;button onclick='alert(10)'>Click me&lt;/button></code>",
      "<code>&lt;button click='alert(10)'>Click me&lt;/button></code>",
      "<code>&lt;button press='alert(10)'>Click me&lt;/button></code>"
    ],
    correct: 0
  },
  {
    question: "What is a legal JavaScript syntax for adding some action when a button is clicked?",
    options: [
      "<code>document.getElementById('x').click = alert(5);</code>",      
      "<code>document.getElementById('x').onclick = alert(5);</code>",
      "<code>document.getElementById('x').onmouseclick = alert(5);</code>"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code class='codeblock'>&lt;div ___='console.log('Entered');</code>",
    draganddropquestion: "Insert the correct event attribute to add some action when the mouse cursor moves over an element.",
    options: [
      "<code>oncursorout</code>",
      "<code>oncursorin</code>",
      "<code>onmouseout</code>",
      "<code>onmousein</code>",
      "<code>onmouseover</code>",
      "<code>onmousehover</code>"
    ],
    correct: [4]
  }
]