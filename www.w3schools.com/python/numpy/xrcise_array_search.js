qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([15, 38, 41, 46])<br>x = np.where(arr%2 == 1)<br>print(x)</code><br>What will be the printed result?",
    options: [
      "<code>(array([1, 3]),)</code>",      
      "<code>(array([15, 41]),)</code>",            
      "<code>(array([0, 2]),)</code>",
      "<code>(array([38, 46]),)</code>"
    ],
    correct: 2
  },
  {
    fillintheblanks: "exercise_array_search1.htm"
  },
  {
    question: "Which NumPy function can be used to find where specifed elements belong in the array?",
    options: [
      "<code>searchsorted()</code>",      
      "<code>findindex()</code>",            
      "<code>searchindex()</code>"
    ],
    correct: 0
  }
]