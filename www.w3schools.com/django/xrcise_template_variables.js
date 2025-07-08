qobjects = [
  {
    question: "What is a correct syntax for creating a variable in a template?",
    options: [
      "<code>{% with firstname='Tobias' %}</code>",
      "<code>{% let firstname='Tobias' %}</code>",
      "<code>{% include firstname='Tobias' %}</code>"
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_template_variables1.htm"
  },
  {
    question: "What is a correct syntax for creating a variable in a View?",
    options: [
      "<code class='codeblock'>context = 'firstname = Linus'</code>",
      "<code class='codeblock'>context = ['firstname']<br>values = ['Linus']</code>",
      "<code class='codeblock'>context = {<br>&nbsp;&nbsp;'firstname': 'Linus',<br>}</code>",
    ],
    correct: 2
  }
]