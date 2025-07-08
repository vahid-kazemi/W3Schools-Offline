qobjects = [
  {
    question: "What is NOT a correct syntax for declaring variables?",
    options: [
      "<code>let x;</code>",
      "<code>dim x;</code>",
      "<code>var x;",
      "<code>const x;</code>"        
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>let x = 5;<br>x = 7;<br>x = x + x;<br>alert(x);</code><br>What will be the alerted result?",
    options: [
      "<code>10</code>",
      "<code>12</code>",
      "<code>14</code>"
    ],
    correct: 2
  },
  {
    question: "Which one is NOT a legal variable name?",
    options: [
      "<code>first-name</code>",
      "<code>first_name</code>",
      "<code>first$name</code>",
      "<code>first3name</code>"
    ],
    correct: 0
  },
  {
    fillintheblanks : "exercise_js_variables1.htm"
  },
  {
    fillintheblanks : "exercise_js_variables2.htm"
  },
  {
    fillintheblanks : "exercise_js_variables3.htm"
  },
  {
    draganddroptext: "<code>let fname = ___ , lname = ___ ___ ___ = ___</code>",
    draganddropquestion: "On one single line, declare three variables named fname, lname, and age, with the values John, Doe, and 46.",
    options: [
      "<code>const</code>",
      "<code>46</code>",
      "<code>:</code>",
      "<code>John</code>",
      "<code>.</code>",
      "<code>'Doe'</code>",
      "<code>fname</code>",
      "<code>,</code>",
      "<code>'John'</code>",
      "<code>'age'</code>",
      "<code>Doe</code>",
      "<code>(</code>",
      "<code>)</code>",
      "<code>age</code>",
      "<code>var</code>",
    ],
    correct: [8, 5, 7, 13, 1]
  }
]