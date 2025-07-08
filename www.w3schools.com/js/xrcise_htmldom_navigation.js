qobjects = [
  {
    question: "Consider the following code:<br><code class='codeblock'>&lt;body&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Welcome&lt;/h1&gt;<br>&nbsp;&nbsp;&lt;p&gt;Read this.&lt;/p&gt;<br>&lt;/body&gt;</code><br>Which one of the following statements is true?",
    options: [
      "&lt;body&gt; is the sibling of &lt;h1&gt;</code>",
      "&lt;body&gt; is the child of &lt;h1&gt;</code>",
      "&lt;body&gt; is the parent of &lt;h1&gt;</code>"
    ],
    correct: 2
  },
  {
    question: "Consider the following code:<br><code class='codeblock'>&lt;div&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Welcome&lt;/h1&gt;<br>&lt;/div&gt;<br><br>&lt;div&gt;<br>&nbsp;&nbsp;&lt;h1&gt;Welcome&lt;/h1&gt;<br>&lt;/div&gt;</code><br>True or False.<br>The two &lt;h1&gt; elements are siblings.",
    options: [
      "True",
      "False"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code class='codeblock'>let x = document.getElementsByTagName('h1')[0].___;</code>",
    draganddropquestion: "Insert the missing syntax for returning the parent of the &lt;h1&gt; element.",
    options: [
      "<code>father</code>",
      "<code>parent</code>",
      "<code>parentNode</code>",
      "<code>sibling</code>",
      "<code>upper</code>"
      
    ],
    correct: [2]
  }
]