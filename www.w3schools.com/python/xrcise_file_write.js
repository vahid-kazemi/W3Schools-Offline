qobjects = [
  {
    question: "What happens to the original file content if you open a file like this:<br><code class='codeblock'>open('demofile3.txt', 'w')</code>",
    options: [
      "The original content will be overwritten",
      "Any new content will be added after the original content"
    ],
    correct: 0
  },
  {
    question: "If you open a file like this:<br><code class='codeblock'>with open('demofile3.txt', 'w') as f:</code><br>What happens if the file does not exist?",
    options: [
      "It will return an error",      
      "A file will be created"
    ],
    correct: 1
  },
  {
    question: "Consider this code:<br><code class='codeblock'>with open('demofile3.txt', 'w') as f:</code><br>What could you replace the 'w' with to instead return an error if the file already exists?",
    options: [
      "<code>'x'</code>",      
      "<code>'b'</code>",      
      "<code>'t'</code>"
    ],
    correct: 0
  }  
  
]