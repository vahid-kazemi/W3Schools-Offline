qobjects = [
  {
    question: "True or False:<br>Videos cannot be responsive.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>video {<br>&nbsp;&nbsp;___: ___%;<br>&nbsp;&nbsp;___: auto;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to ensure the video scales down but never exceeds its original size.",
    options: ["100", "max-width", "50", "height", "flex", "200", "75"],
    correct: [1,0,3]
  },
  {
    question: "Why is <code class='w3-codespan'>max-width: 100%;</code> preferred for responsive videos?",
    options: [
      "It scales the video to 50% of the device's screen width.",
      "It prevents videos from scaling larger than their original size.",
      "It disables video scaling altogether."
    ],
    correct: 1
  }
]
