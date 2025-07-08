qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr1 = np.array([5, 2, 3])<br>newarr = np.prod(arr1)</code><br>What will be the result of <code class='w3-codespan'>newarr</code>?",
    options: [
      "<code>30</code>",      
      "<code>21</code>",      
      "<code>10</code>"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr1 = np.array([1, 2, 3])<br>arr2 = np.array([4, 2, 1])<br>newarr = np.prod([arr1, arr2], axis=1)</code><br>What will be the result of <code class='w3-codespan'>newarr</code>?",
    options: [
      "<code>48</code>",      
      "<code>[6 8]</code>",      
      "<code>[4 4 3]</code>"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([1, 2, 3])<br>newarr = np.cumprod(arr)</code><br>What will be the result of <code class='w3-codespan'>newarr</code>?",
    options: [
      "<code>[1 2 6]</code>",      
      "<code>6</code>",      
      "<code>[2 3]</code>"
    ],
    correct: 0
  }
]