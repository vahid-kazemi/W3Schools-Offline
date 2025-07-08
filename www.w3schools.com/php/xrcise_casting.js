qobjects = [
  {
    question: "What is a correct syntax to cast a float into a string?",
    options: [
      "<code>$ = (string) 5.6;</code>",
      "<code>$ = tostring(5.6);</code>",
      "<code>$ = (5.6).tostr()</code>"
    ],
    correct: 0
  },
  {
    question: "What is a correct syntax to cast a string into NULL",
    options: [
      "<code>$ = (NULL) &quot;hello&quot;;</code>",
      "<code>$ = (unset) &quot;hello&quot;;</code>",
      "<code>$ = &quot;hello&quot;.toNull()</code>"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_casting1.htm"
  }
]