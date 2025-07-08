qobjects = [
  {
    "question": "Which option allows you to securely copy a file to a remote host?",
    "options": [
      "getfile file.txt user@example.com:/home/user/",
      "securl file.txt user@example.com:/home/user/",
      "scp file.txt user@example.com:/home/user/",
      "download file.txt user@example.com:/home/user/"
    ],
    "correct": 2
  },
  {
    "draganddroptext": "<code>scp ___ /path/to/directory user@example.com:/home/user/</code>",
    "draganddropquestion": "Drag and drop the correct option to recursively copy a directory.",
    "options": ["-r", "-P", "-i"],
    "correct": [0]
  },
  {
    "question": "Which option allows you to specify a port when using SCP?",
    "options": [
      "-r",
      "-P",
      "-C",
      "-v"
    ],
    "correct": 1
  },
  {
    "fillintheblanks": "exercise_scp1.htm"
  }
];
