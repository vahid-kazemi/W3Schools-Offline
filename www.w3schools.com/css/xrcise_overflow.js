qobjects = [
  {
    question: "What does the <code class='w3-codespan'>overflow</code> property control?",
    options: [
      "The alignment of text within an element",
      "What happens to content that is too big to fit into an element",
      "The size of an element",
      "The visibility of an element"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_overflow1.htm"
  },
  {
    fillintheblanks: "exercise_overflow2.htm"
  },
  {
    fillintheblanks: "exercise_overflow3.htm"
  },
  {
    question: "What is the default value of the <code class='w3-codespan'>overflow</code> property?",
    options: [
      "<code>hidden</code>",
      "<code>scroll</code>",
      "<code>visible</code>",
      "<code>auto</code>"
    ],
    correct: 2
  },
  {
    question: "Which <code class='w3-codespan'>overflow</code> value adds scrollbars only when necessary?",
    options: [
      "<code>visible</code>",
      "<code>hidden</code>",
      "<code>scroll</code>",
      "<code>auto</code>"
    ],
    correct: 3
  },
  {
    question: "What happens when <code class='w3-codespan'>overflow: hidden;</code> is set?",
    options: [
      "The overflow is clipped, and the rest of the content is hidden",
      "The overflow is clipped, and scrollbars are added",
      "The overflow is not clipped and renders outside the element",
      "Scrollbars are added only when necessary"
    ],
    correct: 0
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS properties to ensure that scrollbars are always visible, even if not needed.",
    options: ["overflow", "overflow-visible", "hidden", "auto", "visible", "clip", "scroll"],
    correct: [0, 6]
  },
  {
    draganddroptext: "<code>div {<br>&nbsp;&nbsp;___: hidden;<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct CSS properties to hide horizontal overflow and add vertical scrollbars.",
    options: ["overflow-x", "overflow-y", "hidden", "scroll", "auto", "visible"],
    correct: [0,  1, 3]
  }
]
