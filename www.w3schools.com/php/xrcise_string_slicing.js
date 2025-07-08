qobjects = [
  {
    question: "What will be the result of the following slice:<br><code class='codeblock'>$x = &quot;Hello World!&quot;;<br>echo substr($x, 3, 2);</code>",
    options: [
      "<code>ll</code>",
      "<code>el</code>",
      "<code>lo</code>"
    ],
    correct: 2
  },
  {
    question: "What will be the result of the following slice:<br><code class='codeblock'>$x = &quot;Hello World!&quot;;<br>echo substr($x, 3);</code>",
    options: [
      "<code>l</code>",
      "<code>lo World!</code>",
      "<code>Hel</code>"
    ],
    correct: 1
  },
  {
    question: "What will be the result of the following slice:<br><code class='codeblock'>$x = &quot;Hello World!&quot;;<br>echo substr($x, -5);</code>",
    options: [
      "<code>World!</code>",
      "<code>orld!</code>",
      "<code>Hello</code>"
    ],
    correct: 1
  }
]