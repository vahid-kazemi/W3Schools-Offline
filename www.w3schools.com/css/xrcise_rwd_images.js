qobjects = [
  {
    draganddroptext: "<code>img {<br>&nbsp;&nbsp;width: ___%;<br>&nbsp;&nbsp;height: auto;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property value to make the image scale to 100% of its container width while maintaining its aspect ratio.",
    options: ["50", "75", "100", "auto"],
    correct: [2]
  },
  {
    draganddroptext: "<code>img {<br>&nbsp;&nbsp;___: ___%;<br>&nbsp;&nbsp;height: auto;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to ensure the image scales down but does not grow larger than its original size.",
    options: ["100", "max-width", "width", "auto", "50", "200"],
    correct: [1,0]
  },
  {
    draganddroptext: "<code>@media only screen and (___: 400px) {<br>&nbsp;&nbsp;body {<br>&nbsp;&nbsp;&nbsp;&nbsp;background-image: url('img_flowers.jpg');<br>&nbsp;&nbsp;}<br>}</code>",
    draganddropquestion: "Drag and drop the correct keyword to display a larger background image for devices with a width of 400px or larger.",
    options: ["max-width", "min-width", "screen", "widths"],
    correct: [1]
  },
  {
    question: "What is the purpose of the HTML <code class='w3-codespan'>&lt;picture&gt;</code> element?",
    options: [
      "To display multiple images simultaneously.",
      "To provide different image resources for different viewport conditions.",
      "To automatically adjust the image size."
    ],
    correct: 1
  }
]
