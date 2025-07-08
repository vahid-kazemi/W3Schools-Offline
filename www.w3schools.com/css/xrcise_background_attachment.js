qobjects = [
  {
    question: "What does the <code class='w3-codespan'>background-attachment</code> property control?",
    options: [
      "The size of the background image",
      "Whether the background image scrolls with the page or stays fixed",
      "The color of the background image",
      "The color of multiple background images"
    ],
    correct: 1
  },
  {
    question: "Which value of <code class='w3-codespan'>background-attachment</code> makes the background image fixed?",
    options: [
      "<code>scroll</code>",
      "<code>fixed</code>",
      "<code>static</code>",
      "<code>set</code>",
      "<code>none</code>"
    ],
    correct: 1
  },
  {
    question: "If the <code class='w3-codespan'>background-attachment</code> is set to <code class='w3-codespan'>scroll</code>, what happens to the background image?",
    options: [
      "It stays fixed while the rest of the content scrolls.",
      "It scrolls along with the rest of the content.",
      "It disappears when scrolling.",
      "It repeats across the page."
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_background5.htm"
  },
  {
    draganddroptext: "<code>body {<br>&nbsp;&nbsp;background-image: url(&quot;img_tree.png&quot;);<br>&nbsp;&nbsp;background-repeat: no-repeat;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct property and value to make the background image scroll with the page.",
    options: ["background-attachment", "background-position", "fixed", "scroll", "no-scroll", "none"],
    correct: [0, 3]
  }
]
