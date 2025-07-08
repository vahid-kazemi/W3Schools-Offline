qobjects = [
  {
    question: "How can you make a table responsive using CSS?",
    options: [
      "Use <code>overflow-y:auto</code> on the <code>&lt;table&gt;</code> element",
      "Wrap the <code>table</code> inside a <code>&lt;div&gt;</code> with <code>overflow-x:auto</code>",
      "Set <code>display: block</code> on the <code>&lt;table&gt;</code> element",
      "Apply <code>width: 100%</code> to the <code>&lt;table&gt; element</code>"
    ],
    correct: 1
  },
  {
    question: "Which element is typically used to wrap a <code class='w3-codespan'>&lt;table&gt;</code> for responsiveness?",
    options: [
      "<code>&lt;responsive&gt;</code>",
      "<code>&lt;div&gt;</code>",
      "<code>&lt;wrapper&gt;</code>",
      "<code>&lt;container&gt;</code>"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>&lt;div style='___: auto;'&gt;&lt;table&gt;...&lt;/table&gt;&lt;/div&gt;</code>",
    draganddropquestion: "Drag and drop the correct CSS property to make the table horizontally scrollable.",
    options: ["overflow-x", "overflow-y", "display", "max-width"],
    correct: [0]
  },
  {
    draganddroptext: "<code>___&lt;table&gt;&lt;/table&gt;&lt;/div&gt;</code>",
    draganddropquestion: "Wrap the table in a container with the correct style to enable horizontal scrolling.",
    options: ["&lt;div style=&quot;overflow-x:auto;&quot;&gt;", "&lt;div style=&quot;overflow-y:auto;&quot;&gt;"],
    correct: [0]
  },
  {
    question: "What is the purpose of adding <code class='w3-codespan'>overflow-x:auto</code> to a container wrapping a <code class='w3-codespan'>table</code>?",
    options: [
      "To hide the table content if it overflows",
      "To make the table scrollable horizontally on smaller screens",
      "To make the table responsive to the viewport height",
      "To allow automatic resizing of table cells"
    ],
    correct: 1
  }
]
