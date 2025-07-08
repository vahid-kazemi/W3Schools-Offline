qobjects = [
  {
    question: "What is a correct syntax for looping through the values of this dictionary:<br><code class='codeblock'>x = {'type' : 'fruit', 'name' : 'apple'}</code>",
    options: [
      "<code class='codeblock'>for y in x.values():<br>&nbsp;&nbsp;print(y)</code>",      
      "<code class='codeblock'>for y in x:<br>&nbsp;&nbsp;print(y)</code>",      
      "<code class='codeblock'>for y in x:<br>&nbsp;&nbsp;print(y.value())</code>"
    ],
    correct: 0
  },
  {
    question: "What is a correct syntax for looping through the keys AND values of this dictionary:<br><code class='codeblock'>x = {'type' : 'fruit', 'name' : 'apple'}</code>",
    options: [
      "<code class='codeblock'>for y, z in x:<br>&nbsp;&nbsp;print(y, z)</code>",
      "<code class='codeblock'>for y, z in x.items():<br>&nbsp;&nbsp;print(y, z)</code>",      
      "<code class='codeblock'>for (y, z) in x:<br>&nbsp;&nbsp;print(y, z)</code>"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_sets_loop1.htm"
  },
  {
    question: "What is a correct syntax for looping through the keys of this dictionary:<br><code class='codeblock'>x = {'type' : 'fruit', 'name' : 'apple'}</code>",
    options: [
      "<code class='codeblock'>for y in x.names():<br>&nbsp;&nbsp;print(y)</code>",      
      "<code class='codeblock'>for y in x.keys():<br>&nbsp;&nbsp;print(y)</code>",      
      "<code class='codeblock'>for y in x.types():<br>&nbsp;&nbsp;print(y)</code>"
    ],
    correct: 1
  }
]