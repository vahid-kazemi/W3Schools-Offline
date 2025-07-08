qobjects = [
  {
    question: "Consider this syntax:<br><code class='codeblock'>a = {'name' : 'John', 'age' : '20'}<br>b = {'name' : 'May', 'age' : '23'}<br>customers = {'c1' : a, 'c2' : b}</code><br> what will be a correct syntax for printing the name 'May'?",
    options: [
      "<code class='w3-codespan'>print(customers['c2']['name'])</code>",      
      "<code class='w3-codespan'>print(customers.c2.b['name'])</code>",      
      "<code class='w3-codespan'>print(customers.c2.name)</code>"
    ],
    correct: 0
  },

  {
    fillintheblanks: "exercise_dictionaries_nested1.htm"
  },
  {
    question: "True or False. A dictionary can only have one level of nested dictionaries.",
    options: [
      "True",      
      "False"
    ],
    correct: 1
  }
]