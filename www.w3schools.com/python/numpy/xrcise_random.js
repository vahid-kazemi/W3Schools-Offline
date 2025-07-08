qobjects = [
  {
    question: "Which one of the following functions returns a random number from 0 to 100?",
    options: [
      "<code>random.rand(100)</code>",      
      "<code>random.randint(100)</code>",            
      "<code>random.choice(100)</code>"
    ],
    correct: 1
  },
  {
    question: "Which one of the following functions returns a random floating number from 0 to 1?",
    options: [
      "<code>random.rand()</code>",      
      "<code>random.float()</code>",            
      "<code>random.r()</code>"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>x=random.randint(100, size=(2))</code><br>What is true about the value of <code class='w3-codespan'>x</code>?",
    options: [
      "<code class='w3-codespan'>x</code> will be a 2-D array containing random integers from 0 to 100",      
      "<code class='w3-codespan'>x</code> will be a 1-D array containing 100 random integers from 0 to 2",      
      "<code class='w3-codespan'>x</code> will be a 1-D array containing 2 random integers from 0 to 100"
    ],
    correct: 2
  }
]