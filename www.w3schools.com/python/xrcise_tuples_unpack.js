qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>fruits = ('apple', 'banana', 'cherry')<br>(x, y, z) = fruits<br>print(y)</code><br>What will be the value of <code class='w3-codespan'>y</code>?",
    options: [
      "apple",
      "banana",
      "cherry"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>fruits = ('apple', 'banana', 'cherry')<br>(x, *y) = fruits<br>print(y)</code><br>What will be the value of <code class='w3-codespan'>y</code>?",
    options: [
      "<code>banana</code>",
      "<code>['banana', 'cherry']</code>",    
      "<code>banana, cherry</code>"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>fruits = ('apple', 'banana', 'cherry', 'mango')<br>(x, *y, z) = fruits<br>print(y)</code><br>What will be the value of <code class='w3-codespan'>y</code>?",
    options: [
      "<code>['banana', 'cherry']</code>",
      "<code>['banana', 'cherry', 'mango']</code>",    
      "<code>['cherry', 'mango']</code>"
    ],
    correct: 0
  }
]