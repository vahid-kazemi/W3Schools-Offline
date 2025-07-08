qobjects = [
  {
    draganddroptext: "<code>___ -t rsa -b 4096 -C \"your@email.com\"</code>",
    draganddropquestion: "Drag and drop the correct algorithm to generate a new SSH key pair.",
    options: ["ecdsa", "ssh-keygen", "generate", "keymaster"],
    correct: [1]
  },
  {
    question: "Which command adds your private SSH key to the SSH agent?",
    options: [
      "ssh-add ~/.ssh/id_rsa",
      "ssh-copy-id ~/.ssh/id_rsa",
      "ssh -T git@github.com",
      "chmod 600 ~/.ssh/id_rsa"
    ],
    correct: 0
  },
  {
    question: "What should you NEVER do with your private SSH key?",
    options: [
      "Store it securely",
      "Share it with anyone",
      "Use a passphrase",
      "Back it up in a safe place"
    ],
    correct: 1
  },
  {
    question: "Which file do you add to your GitHub/Bitbucket/GitLab account for SSH access?",
    options: [
      "The private key (e.g., id_rsa)",
      "config file",
      "authorized_keys",
      "The public key (e.g., id_rsa.pub)"
    ],
    correct: 3
  }
]
