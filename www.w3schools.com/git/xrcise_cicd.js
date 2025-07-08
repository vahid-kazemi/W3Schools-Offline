qobjects = [
  {
    draganddroptext: '<code>on: [___]</code>',
    draganddropquestion: 'Drag and drop the correct event to trigger a CI/CD workflow on every code push.',
    options: ['pull_request', 'push', 'merge'],
    correct: [1]
  },
  {
    fillintheblanks: 'exercise_cicd1.htm'
  },
  {
    question: 'Which file tells GitHub Actions how to run CI for your project?',
    options: [
      '.gitlab-ci.yml',
      '.travis.yml',
      '.github/workflows/ci.yml',
      'azure-pipelines.yml'
    ],
    correct: 2
  }
]
