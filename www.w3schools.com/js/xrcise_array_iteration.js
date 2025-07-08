qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>const x = [45, 4, 9, 16, 25];<br>let y = x.every(myfunc);<br>function myfunc(val) {<br>&nbsp;&nbsp;return val > 20;<br>}</code><br>What will the result of the <code class='w3-codespan'>y</code>?",
    options: [
      "<code>[45, 25]</code>",
      "<code>false</code>",
      "<code>[]</code>",
      "<code>NaN</code>"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>const x = [45, 4, 9, 16, 25];<br>let y = x.some(myfunc);<br>function myfunc(val) {<br>&nbsp;&nbsp;return val > 20;<br>}</code><br>What will the result of the <code class='w3-codespan'>y</code>?",
    options: [
      "<code>[45, 25]</code>",
      "<code>[]</code>",
      "<code>true</code>",
      "<code>2</code>"
    ],
    correct: 2
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>const x = [45, 4, 9, 16, 25];<br>let y = x.map(myfunc);<br>function myfunc(val) {<br>&nbsp;&nbsp;return val > 20;<br>}</code><br>What will the result of the <code class='w3-codespan'>y</code>?",
    options: [
      "<code>[45, 25]</code>",
      "<code>false</code>",
      "<code>true</code>",
      "<code>[true, false, false, false, true]</code>"

    ],
    correct: 3
  }
]