qobjects = [
  {
    "question": "Which command retrieve a web page the web page http://example.com?",
    "options": [
      "getfile http://example.com",
      "download http://example.com",
      "retrive http://example.com",
      "curl http://example.com"
    ],
    "correct": 3
  },
  {
    "draganddroptext": "<code>curl -___ http://example.com/file.txt</code>",
    "draganddropquestion": "Drag and drop the correct option to save the file with the same name as the remote file.",
    "options": ["O", "L", "I"],
    "correct": [0]
  },
  {
    fillintheblanks: "exercise_curl1.htm"
  },
  {
    "question": "Which option allows <code>curl</code> to follow redirects?",
    "options": [
      "-O",
      "-L",
      "-I",
      "-h"
    ],
    "correct": 1
  }
]
