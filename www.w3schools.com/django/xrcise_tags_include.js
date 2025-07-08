qobjects = [
  {
    question: "What is a corrext syntax for sending variables into a template via the include tag?",
    options: [
      "<code>{% include 'menu.html' with fname='Jim' %}</code>",
      "<code>{% include 'menu.html' with context = {'fname'='Jim'} %}</code>",
      "<code>{% include 'menu.html' context = {'fname' = 'Jim'} %}</code>",
    ],
    correct: 0
  },
  {
    fillintheblanks: "exercise_template_variables7.htm"
  },
  {
    question: "What is the correct syntax for using a variable named 'firstname' in a template?",
    options: [
      "<code>{{ firstname }}</code>",
      "<code>{ firstname }</code>",
      "<code>% firstname %</code>"
    ],
    correct: 0
  }
]