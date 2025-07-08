qobjects = [
  {
    question: "What will be the result of <code class='w3-codespan'>$z</code> in the following code example:<br><code class='codeblock'>$x = 5;<br>$y = 10;<br>$z = &quot;$x . $y&quot;;</code>",
    options: [
      "<code>5 . 10</code>",
      "<code>15</code>",
      "<code>5.10</code>"
    ],
    correct: 0
  },
  {
    question: "What will be the result of <code class='w3-codespan'>$z</code> in the following code example:<br><code class='codeblock'>$x = 5;<br>$y = 10;<br>$z = &quot;$x$y&quot;;</code>",
    options: [
      "An error will be raised",
      "<code>510</code>",
      "<code>$x$y</code>"
    ],
    correct: 1
  },
  {
    question: "What will be the result of <code class='w3-codespan'>$z</code> in the following code example:<br><code class='codeblock'>$x = 5;<br>$y = 10;<br>$z = $x . $y;</code>",
    options: [
      "<code>510</code>",
      "<code>15</code>",
      "<code>5 10</code>",
      "<code>5 . 10</code>"
    ],
    correct: 0
  }
]