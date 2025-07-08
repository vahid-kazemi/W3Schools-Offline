qobjects = [
  {
    draganddroptext: '<code>#!/bin/sh\n___ -r \'console.log\' *.js</code>',
    draganddropquestion: 'Drag and drop the correct command to search for "console.log" in all .js files in a pre-commit hook.',
    options: ['ls', 'grep', 'chmod'],
    correct: [1]
  },
  {
    fillintheblanks: 'exercise_hooks1.htm'
  },
  {
    question: 'Which hook runs before you make a commit and can be used to check code style?',
    options: [
      'pre-commit',
      'commit-msg',
      'pre-push',
      'pre-receive'
    ],
    correct: 0
  }
]
