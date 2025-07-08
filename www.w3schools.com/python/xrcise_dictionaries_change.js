qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>x = {'type' : 'fruit', 'name' : 'banana'}</code><br>What is a correct syntax for changing the <code class='w3-codespan'>type</code> from <code class='w3-codespan'>fruit</code> to <code class='w3-codespan'>berry</code>?",
    options: [
      "<code>x{'type'} = 'berry'</code>",      
      "<code>x['type'] = 'berry'</code>",      
      "<code>x.get('type') = 'berry'</code>"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_dictionaries2.htm"
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>x = {'type' : 'fruit', 'name' : 'banana'}</code><br>What is a correct syntax for changing the <code class='w3-codespan'>name</code> from <code class='w3-codespan'>banana</code> to <code class='w3-codespan'>apple</code>?",
    options: [
      "<code>x.update({'name': 'apple'})</code>",      
      "<code>x.update('name' = 'apple')</code>",      
      "<code>x.update('name','apple')</code>"
    ],
    correct: 0
  },
]