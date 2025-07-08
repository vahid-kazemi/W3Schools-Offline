qobjects = [
  {
    question: "What is a correct syntax for joining <code class='w3-codespan'>list1</code> and <code class='w3-codespan'>list2</code> into <code class='w3-codespan'>list3</code>?",
    options: [
      "<code>list3 = join(list1, list2)</code>",      
      "<code>list3 = list1 + list2</code>",      
      "<code>list3 = [list1, list2]</code>"
    ],
    correct: 1
  },
  {
    question: "What is a correct syntax for adding elements from <code class='w3-codespan'>list2</code> into <code class='w3-codespan'>list1</code>?",
    options: [
      "<code>list1.extend(list2)</code>",      
      "<code>list1.join(list2)</code>",      
      "<code>list1.push(list2)</code>"
    ],
    correct: 0
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>list1 = ['a', 'b' , 'c']<br>list2 = [1, 2, 3]<br>for x in list2:<br>&nbsp;&nbsp;list1.append(x)</code><br>What will be the value of <code class='w3-codespan'>list1</code>?",
    options: [
      "<code>['a', 'b', 'c', 1, 2, 3]</code>",      
      "<code>[1, 2, 3]</code>",      
      "<code>['a', 1, 'b', 2, 'c', 3]</code>"
    ],
    correct: 0
  }
]