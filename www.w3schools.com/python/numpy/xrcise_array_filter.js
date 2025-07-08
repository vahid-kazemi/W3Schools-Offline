qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array(['a', 'b', 'c'])<br>x = arr[[True, False, True]]<br>print(x)</code><br>What will be the printed result?",
    options: [
      "<code>['b']</code>",      
      "<code>['a' 'c']</code>",            
      "<code>['a' 'b' 'c']</code>"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([1, 2, 3, 4, 5, 6])<br>filter_arr = arr > 3<br>print(filter_arr)</code><br>What will be the printed result?",
    options: [
      "<code>[False True]</code>",
      "<code>[False False False True True True]</code>",
      "<code>[4 5 6]</code>"
    ],
    correct: 1
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([7, 8, 9, 10])<br>filter_arr = arr > 9<br>newarr = arr[filter_arr]<br>print(newarr)</code><br>What will be the printed result?",
    options: [
      "<code>[10]</code>",
      "<code>[False False False  True]</code>",      
      "<code>[False False True  True]</code>",            
      "<code>[9 10]</code>"
    ],
    correct: 0
  }
]