qobjects = [
  {
    question: "Which one of these is a dictionary?",
    options: [
      "<code>x = ('apple', 'banana', 'cherry')</code>",
      "<code>x = {'type' : 'fruit', 'name' : 'banana'}</code>",
      "<code>x = ['apple', 'banana', 'cherry']</code>"
    ],
    correct: 1
  },
  {
    question: "True or False.<br>Dictionary items cannot be removed after the dictionary has been created.",
    options: [
      "True",      
      "False"
    ],
    correct: 1
  },  
  {
    question: "True or False.<br>A dictionary cannot have two keys with the same name.",
    options: [
      "True",      
      "False"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>x = {'type' : 'fruit', 'name' : 'banana'}</code><br><code>print(___(x))</code>",
    draganddropquestion: "Select the correct function to print the number of key/value pairs in the dictionary:",
    options: [
      "<code>length</code>",
      "<code>size</code>",
      "<code>len</code>",
      "<code>items</code>"
    ],
    correct: [2]
  }    
]