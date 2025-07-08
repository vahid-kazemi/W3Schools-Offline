qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array(['a', 'b', 'c'])<br>for x in arr:<br>&nbsp;&nbsp;print('Hello ' + x)</code><br>What will be the printed result?",
    options: [
      "<code class='codeblock'>Hello a b c</code>",      
      "<code class='codeblock'>Hello ['a', 'b', 'c']</code>",            
      "<code class='codeblock'>Hello a<br>Hello b<br>Hello c</code>"                        
    ],
    correct: 2
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([[1, 2, 3], [4, 5, 6]])<br>for x in arr:<br>&nbsp;&nbsp;print(x)</code><br>What will be the printed result?",
    options: [
      "<code class='codeblock'>[1 2 3]<br>[4 5 6]</code>",      
      "<code class='codeblock'>1<br>2<br>3<br>4<br>5<br>6</code>",            
      "<code class='codeblock'>Array()<br>Array()</code>"                        
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>import numpy as np<br>arr = np.array([1, 2, 3, 4, 5, 6, 7, 8])<br>for x in np.nditer(arr[::2]):<br>&nbsp;&nbsp;print(x)</code><br>What will be the printed result?",
    options: [
      "<code class='codeblock'>1<br>3<br>5<br>7</code>",            
      "<code class='codeblock'>2<br>4<br>6<br>8</code>",            
      "<code class='codeblock'>3<br>4<br>5<br>6<br>7<br>8</code>"
    ],
    correct: 0
  }
]