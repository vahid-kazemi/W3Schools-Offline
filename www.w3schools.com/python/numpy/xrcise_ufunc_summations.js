qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr1 = np.array([5, 1, 2])<br>arr2 = np.array([3, 2, 2])<br>newarr = np.sum([arr1, arr2])</code><br>What will be the result of <code class='w3-codespan'>newarr</code>?",
    options: [
      "<code>[8 3 4]</code>",      
      "<code>[8 7]</code>",      
      "<code>15</code>"
    ],
    correct: 2
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr1 = np.array([5, 1, 2])<br>arr2 = np.array([3, 2, 2])<br>newarr = np.sum([arr1, arr2], axis=1)</code><br>What will be the result of <code class='w3-codespan'>newarr</code>?",
    options: [
      "<code>[8 3 4]</code>",      
      "<code>[8 7]</code>",      
      "<code>15</code>"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr1 = np.array([5, 1, 2])<br>newarr = np.cumsum(arr1)</code><br>What will be the result of <code class='w3-codespan'>newarr</code>?",
    options: [
      "<code>[5 6 8]</code>",      
      "<code>8</code>",      
      "<code>15</code>"
    ],
    correct: 0
  }
]