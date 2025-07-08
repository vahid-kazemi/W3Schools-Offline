qobjects = [
  {
    question: "What is a correct syntax for joining <code class='w3-codespan'>tuple1</code> and <code class='w3-codespan'>tuple2</code> into <code class='w3-codespan'>tuple3</code>?",
    options: [
      "<code>tuple3 = join(tuple1, tuple2)</code>",      
      "<code>tuple3 = tuple1 + tuple2</code>",      
      "<code>tuple3 = [tuple1, tuple2]</code>"
    ],
    correct: 1
  },
  {
    question: "What is a legal way to turn this tuple: <code class='w3-codespan'>(1,2,3)</code> into this tuple:<code class='w3-codespan'>(1,2,3,1,2,3)?",
    options: [
      "<code class='codeblock'>tuple1 = (1,2,3)<br>tuple1 = tuple1 * 2</code>",      
      "<code class='codeblock'>tuple1 = (1,2,3)<br>tuple1.double()</code>",      
      "<code class='codeblock'>tuple1 = (1,2,3)<br>tuple1.add(_self)</code>"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>tuple1 = ('a', 'b' , 'c')<br>tuple2 = (1, 2, 3)<br>tuple3 = tuple2 + tuple1</code><br>What will be the value of <code class='w3-codespan'>tuple3</code>?",
    options: [
      "<code>('a', 'b', 'c', 1, 2, 3)</code>",      
      "<code>(1, 2, 3, 'a', 'b', 'c')</code>",      
      "<code>('a', 1, 'b', 2, 'c', 3)</code>"
    ],
    correct: 1
  }
]