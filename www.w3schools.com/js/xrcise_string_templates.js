qobjects = [
  {
    question: "What do the back-ticks used for template strings in JavaScript look like?",
    options: [
      "<code>&quot; &quot;</code>",
      "<code>' '</code>",
      "<code>` `</code>",
      "<code>/ \\</code>"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code class='codeblock'>let firstName = 'John';<br>let lastName = 'Doe';<br>___(`Hello ___ ___!`);</code><br>",
    draganddropquestion: "Insert the missing parts to alert 'Hello John Doe!':",
    options: [
      "<code>${firstname}</code>",
      "<code>[firstname]</code>",
      "<code>alert</code>",
      "<code>${lastname}</code>",
      "<code>[lastname]</code>",
      "<code>write</code>",
      "<code>document</code>"
    ],
    correct: [2, 0, 3]
  },

  {
    question: "True or False.<br>Template strings allows multi line strings.",
    options: [
      "True",
      "False"
    ],
    correct: 0
  }
]