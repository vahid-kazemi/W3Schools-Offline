qobjects = [
  {
    question: "What is a legal syntax for executing a function called 'myfunc' when the browser window resizes?",
    options: [
      "<code>window.listen('resize', myfunc);</code>",
      "<code>window.addEventListener('resize', myfunc);</code>",
      "<code>window.addEvent('resize', myfunc);</code>",
      "<code>window.execute(myfunc, 'resize');</code>"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_js_dom_html9.htm"
  },
  {
    draganddroptext: "<code class='codeblock'>document.getElementById('demo').___('click', ___(){<br>&nbsp;&nbsp;alert('Hello');});</code>",
    draganddropquestion: "Insert the missing syntax for a function to execute when an element is clicked.",
    options: [
      "<code>execute</code>",
      "<code>function</code>",
      "<code>document</code>",
      "<code>onmouse</code>",
      "<code>addEventListener</code>",
      "<code>addFunction</code>"
      
    ],
    correct: [4, 1]
  }
]