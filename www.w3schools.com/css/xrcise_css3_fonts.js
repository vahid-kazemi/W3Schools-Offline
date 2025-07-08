qobjects = [
  {
    question: "What is the purpose of the <code class='w3-codespan'>@font-face</code> rule in CSS?",
    options: [
      "To embed images into text",
      "To include custom fonts in web pages",
      "To style the alignment of text",
      "To create scalable SVG shapes"
    ],
    correct: 1
  },
  {
    fillintheblanks: "exercise_css3_fonts1.htm"
  },
  {
    fillintheblanks: "exercise_css3_fonts2.htm"
  },
  {
    draganddroptext: "<code>@font-face {<br>&nbsp;&nbsp;font-family: ___;<br>&nbsp;&nbsp;src: ___(sansation_light.woff);<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to define a custom font called 'myFirstFont' using a WOFF file.",
    options: ["myfontfamily", "url", "src", "font-family", "myFirstFont"],
    correct: [4, 1]
  },
  {
    draganddroptext: "<code>@font-face {<br>&nbsp;&nbsp;font-family: ___;<br>&nbsp;&nbsp;src: url(sansation_bold.woff);<br>&nbsp;&nbsp;___: ___;<br>}</code>",
    draganddropquestion: "Drag and drop the correct values to define a bold font for 'myFirstFont'.",
    options: ["b", "strong", "bold", "myFirstFont", "font-weight", "style", "font-style"],
    correct: [3, 4, 2]
  }
]
