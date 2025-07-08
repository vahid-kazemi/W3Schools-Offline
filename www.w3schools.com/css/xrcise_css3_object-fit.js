qobjects = [
  {
    question: "What is the purpose of the CSS <code class='w3-codespan'>object-fit</code> property?",
    options: [
      "To add a shadow effect to an element.",
      "To crop an image to a circle.",
      "To resize an image or video to fit its container.",
      "To apply a filter effect to an image."
    ],
    correct: 2
  },
  {
    question: "Which is the default value of the <code class='w3-codespan'>object-fit</code> property?",
    options: [
      "<code>cover</code>",
      "<code>contain</code>",
      "<code>fill</code>",
      "<code>none</code>"
    ],
    correct: 2
  },
  {
    question: "What happens when <code class='w3-codespan'>object-fit: cover;</code> is applied to an image?",
    options: [
      "The image is stretched to fill the container, ignoring its aspect ratio.",
      "The image keeps its aspect ratio and fills the container, but is clipped if necessary.",
      "The image keeps its aspect ratio and resizes to fit entirely within the container.",
      "The image is not resized."
    ],
    correct: 1
  },
  {
    question: "Which value of <code class='w3-codespan'>object-fit</code> scales the image to the smallest version of <code class='w3-codespan'>none</code> or <code class='w3-codespan'>contain</code>?",
    options: [
      "<code>scale-down</code>",
      "<code>cover</code>",
      "<code>fill</code>",
      "<code>contain</code>"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>img {<br>&nbsp;&nbsp;width: 300px;<br>&nbsp;&nbsp;height: 200px;<br>&nbsp;&nbsp;object-fit: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to ensure the image resizes while maintaining its aspect ratio, but may be clipped.",
    options: ["contains", "scale-down", "fit", "cover", "fill", "none"],
    correct: [3]
  },
  {
    draganddroptext: "<code>img {<br>&nbsp;&nbsp;width: 300px;<br>&nbsp;&nbsp;height: 200px;<br>&nbsp;&nbsp;object-fit: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to ensure the image is not resized.",
    options: ["none", "contain", "fill"],
    correct: [0]
  }
]
