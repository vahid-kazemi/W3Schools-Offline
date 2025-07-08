qobjects = [
  {
    question: "What is a correct syntax for adding a new property to the <code class='w3-codespan'>Person</code> object constructor?",
    options: [
      "<code>Person.hometown = 'Roma';</code>",
      "<code>Person.prototype.hometown = 'Roma';</code>",
      "<code>new Person.hometown = 'Roma';</code>",
      "<code>Person['hometown'] = 'Roma';</code>"
    ],
    correct: 1
  },
  {
    question: "It is common to use these object literals instead of <code class='w3-codespan'>new Object()</code>, which ones?",
    options: [
      "<code>()</code>",
      "<code>{}</code>",
      "<code>[]</code>"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code class='codeblock'>___ Person(fname) ___<br>&nbsp;&nbsp;___.firstname ___ fname;<br>___</code><br>",
    draganddropquestion: "Insert the missing parts to complete the object constructor:",
    options: [
      "<code>}</code>",
      "<code>this</code>",
      "<code>;</code>",
      "<code>{</code>",
      "<code>function</code>",
      "<code>,</code>",
      "<code>=</code>",
      "<code>:</code>",
      "<code>new</code>",
      "<code>(</code>",
      "<code>)</code>",
    ],
    correct: [4, 3, 1, 6, 0]
  }
]