qobjects = [
  {
    question: "What is the purpose of the CSS <code class='w3-codespan'>background</code> shorthand property?",
    options: [
      "To define only the background color of an element",
      "To set default scroll behavior for all elements",
      "To apply gradient effects to backgrounds",
      "To specify multiple background properties in a single declaration"
    ],
    correct: 3
  },
  {
    question: "In what order should values be specified for the <code class='w3-codespan'>background</code> shorthand property?",
    options: [
      "<code>background-image, background-color, background-position, background-repeat</code>",
      "<code>background-color, background-image, background-repeat, background-attachment, background-position</code>",
      "<code>background-repeat, background-color, background-image, background-position</code>",
      "<code>background-position, background-color, background-image, background-repeat</code>"
    ],
    correct: 1
  },
  {
    question: "What happens if you omit a property value in the <code class='w3-codespan'>background</code> shorthand declaration?",
    options: [
      "It will cause a syntax error.",
      "Default values will be used for the omitted properties.",
      "The omitted property will be set to transparent.",
      "The shorthand declaration will be ignored."
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>body {<br>&nbsp;&nbsp;background: ___ url(&quot;img_tree.png&quot;) no-repeat right top;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to set the background color to red.",
    options: ["red", "url", "right top", "fixed"],
    correct: [0]
  },
  {
    draganddroptext: "<code>body {<br>&nbsp;&nbsp;background: #ffffff ___ no-repeat right top;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to specify the background image.",
    options: ["url(&quot;img_tree.png&quot;)", "background-color", "no-repeat", "img:img_tree.png"],
    correct: [0]
  },
  {
    draganddroptext: "<code>body {<br>&nbsp;&nbsp;background: #ffffff url('img_tree.png') ___ right top;<br>}</code>",
    draganddropquestion: "Drag and drop the correct value to make sure the background image does not repeat.",
    options: ["repeat", "repeat-x", "no-repeat", "repeat-y", "stop-repeat"],
    correct: [2]
  }
]
