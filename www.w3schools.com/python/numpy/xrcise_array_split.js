qobjects = [
  {
    question: "One of these functions can be used to split an array into multiple arrays. Which one?",
    options: [
      "<code>array_split()</code>",      
      "<code>decatenate()</code>",            
      "<code>decat()</code>"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([1, 2, 3, 4, 5, 6])<br>newarr = np.array_split(arr, 3)<br>print(newarr[0])</code><br>What will be the printed result?",
    options: [
      "<code>[1 2]</code>",      
      "<code>1</code>",      
      "<code>3</code>"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array(['a', 'b', 'c'])<br>newarr = np.array_split(arr, 3)</code><br>How many arrays will <code class='w3-codespan'>newarr</code> contain?",
    options: [
      "<code>1</code>",      
      "<code>2</code>",            
      "<code>3</code>",
      "<code>4</code>"      
    ],
    correct: 2
  }
]