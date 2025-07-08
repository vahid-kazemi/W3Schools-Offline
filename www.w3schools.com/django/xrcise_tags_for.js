qobjects = [
  {
    question: "What is the correct syntax for <i>ending</i> a for loop?",
    options: [
      "<code>{% end for %}</code>",
      "<code>{% next %}</code>",
      "<code>{% endfor %}</code>",
      "<code>{% end %}</code>"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_template_variables5.htm"
  },
  {
    question: "What is the correct syntax for doing the loop in reversed order?",
    options: [
      "<code>{% for x in members reversed %}</code>",
      "<code>{% for x in members -1 %}</code>",
      "<code>{% for -x in members %}</code>"
    ],
    correct: 0
  },
  {
    question: "What is the correct variable name for returning the current iteration inide a for loop?",
    options: [
      "<code>forloop.this</code>",
      "<code>forloop.counter</code>",
      "<code>forloop.number</code>"
    ],
    correct: 1
  }
]