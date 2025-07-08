qobjects = [
  {
    question: "Consider the following object:<br><code class='codeblock'>const person = {<br>&nbsp;&nbsp;firstname: 'Jane',<br>&nbsp;&nbsp;lastname: 'Doe',<br>&nbsp;&nbsp;fullname: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return this.firstname + ' ' + this.lastname;<br>&nbsp;&nbsp;}<br>};</code><br>How many methods do the object have?",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code class='codeblock'>alert(___ ___ ___ ___);</code>",
    draganddropquestion: "Consider the following object:<br><code class='codeblock'>const person = {<br>&nbsp;&nbsp;firstname: 'Jane',<br>&nbsp;&nbsp;lastname: 'Doe',<br>&nbsp;&nbsp;fullname: function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;return this.firstname + ' ' + this.lastname;<br>&nbsp;&nbsp;}<br>};</code><br>Insert the missing parts to alert 'Jane Doe'.",
    options: [
      "<code>Jane</code>",
      "<code>.</code>",
      "<code>:</code>",
      "<code>person</code>",
      "<code>()</code>",
      "<code>fullname</code>",
      "<code>firstname</code>",
      "<code>lastname</code>",
      "<code>=</code>",
      "<code>Person</code>",
      "<code>name</code>"
    ],
    correct: [3, 1, 5, 4]
  },
  {
    question: "True or False:<br>You are allowed to insert new methods to existing objects.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  }
]