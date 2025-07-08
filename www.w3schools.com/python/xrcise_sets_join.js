qobjects = [
  {
    question: "What is a correct syntax for joining <code class='w3-codespan'>set1</code> and <code class='w3-codespan'>set2</code> into <code class='w3-codespan'>set3</code>?",
    options: [
      "<code>set3 = join(set1, set2)</code>",      
      "<code>set3 = set1 + set2</code>",      
      "<code>set3 = set1.union(set2)</code>"
    ],
    correct: 2
  },
  {
    question: "What is a correct syntax for joining multiple sets into one new set called <code class='w3-codespan'>set5</code>?",
    options: [
      "<code>set5 = join(set1, set2, set3, set4)</code>",      
      "<code>set5 = set1 | set2 | set3 | set4</code>",      
      "<code>set5.union(set1, set2, set3, set4)</code>"
    ],
    correct: 1
  },
  {
    question: "There are many ways to join sets in Python. Which one of the following methods keeps ONLY the duplicates?",
    options: [
      "<code>intersection()</code>",      
      "<code>union()</code>",      
      "<code>difference()</code>"
    ],
    correct: 0
  }
]