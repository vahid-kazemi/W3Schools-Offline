qobjects = [
  {
    question: "What does the memory address represent in C?",
    options: [
      "The value of a variable",
      "The location where the variable is stored",
      "The data type of the variable",
      "The size of the variable"
    ],
    correct: 1
  },
  {
    question: "Which operator is used to get the memory address of a variable?",
    options: [
      "<code class='w3-codespan'>%</code>",
      "<code class='w3-codespan'>*</code>",
      "<code class='w3-codespan'>&</code>",
      "<code class='w3-codespan'>@</code>"
    ],
    correct: 2
  },
  {
    question: "What will the following code output?<br><code class='codeblock'>int myAge = 45;<br>printf(\"%p\", &myAge);</code>",
    options: [
      "45",
      "The actual memory address of <code class='w3-codespan'>myAge</code>",
      "0",
      "Nothing"
    ],
    correct: 1
  },
  {
    question: "What format specifier should be used to print a pointer value?",
    options: [
      "<code class='w3-codespan'>%d</code>",
      "<code class='w3-codespan'>%c</code>",
      "<code class='w3-codespan'>%f</code>",
      "<code class='w3-codespan'>%p</code>"
    ],
    correct: 3
  },
  {
    question: "Why are pointers important in C?",
    options: [
      "They allow manipulation of data directly in memory",
      "They are faster than variables",
      "They increase the size of variables",
      "They replace the need for variables"
    ],
    correct: 0
  }
]
