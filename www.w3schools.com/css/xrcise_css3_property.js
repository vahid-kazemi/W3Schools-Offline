qobjects = [
  {
    question: "What is the primary purpose of the CSS <code class='w3-codespan'>@property</code> rule?",
    options: [
      "To create and define custom properties with constraints, default values, and inheritance.",
      "To manage CSS variables dynamically using JavaScript.",
      "To define global styles for all elements."
    ],
    correct: 0
  },
  {
    question: "Which of the following is a benefit of using the <code class='w3-codespan'>@property</code> rule?",
    options: [
      "Allows type checking for custom properties.",
      "Enables setting default values for custom properties.",
      "Defines inheritance behavior for custom properties.",
      "All of the above."
    ],
    correct: 3
  },
  {
    draganddroptext: "<code>@property --myColor {<br>&nbsp;&nbsp;___: \"&lt;color&gt;\";<br>&nbsp;&nbsp;___: true;<br>&nbsp;&nbsp;___: lightgray;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property names to complete the custom property definition for <code class='w3-codespan'>--myColor</code>.",
    options: ["inheritance", "object", "syntax", "inherits", "val", "initial-value", "type"],
    correct: [2, 3, 5]
  },
  {
    draganddroptext: "<code>@property --fontSize {<br>&nbsp;&nbsp;___: \"&lt;length&gt;\";<br>&nbsp;&nbsp;___: true;<br>&nbsp;&nbsp;___: 16px;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property names to define a custom property for font size.",
    options: ["syntax", "object", "inherits", "val", "initial-value", "type"],
    correct: [0, 2, 4]
  }
]
