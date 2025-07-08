qobjects = [
  {
    question: "What is a correct function for removing array items?",
    options: [
      "<code>array_remove()</code>",
      "<code>array_unset()</code>",
      "<code>array_splice()</code>",
    ],
    correct: 2
  },
  {
    question: "What will the array look like after the splice:<code class='codeblock'>$fruits = array('Apples', 'Bananas', 'Cherries');<br>array_splice($fruits, 1, 2);</code>",
    options: [
      "<code>('Apples', 'Cherries')</code>",
      "<code>('Bananas', 'Cherries')</code>",      
      "<code>('Apples', 'Bananas')</code>",      
      "<code>('Apples')</code>"
    ],
    correct: 3
  },
  {
    question: "What will the array look like after the shift:<code class='codeblock'>$fruits = array('Apples', 'Bananas', 'Cherries');<br>array_shift($fruits);</code>",
    options: [
      "<code>('Apples', 'Bananas')</code>",
      "<code>('Bananas', 'Cherries')</code>",      
      "<code>('Apples')</code>"
    ],
    correct: 1
  }
]