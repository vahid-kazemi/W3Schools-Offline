qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([1, 2, 3, 4])<br>newarr = np.diff(arr)</code><br>What will be the result of <code class='w3-codespan'>newarr</code>?",
    options: [
      "<code>[1 1 1 1]</code>",      
      "<code>[1 1 1]</code>",      
      "<code>-2</code>"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([5, 7, 3, 4])<br>newarr = np.diff(arr)</code><br>What will be the result of <code class='w3-codespan'>newarr</code>?",
    options: [
      "<code>[ 2 1]</code>",      
      "<code>[ 2 1 1]</code>",      
      "<code>[ 2 -4  1]</code>"
    ],
    correct: 2
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([1, 2, 3, 4])<br>newarr = np.diff(arr, n=2)</code><br>What will be the result of <code class='w3-codespan'>newarr</code>?",
    options: [
      "<code>[1 1 1]</code>",      
      "<code>[0 0]</code>",      
      "<code>[1 1 1 1]</code>"
    ],
    correct: 1
  }
]