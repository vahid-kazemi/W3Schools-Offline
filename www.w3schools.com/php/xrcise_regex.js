qobjects = [
  {
    question: "What will the following code return?<br><code class='codeblock'>$str = 'Which watch would you watch?';<br>$pattern = '/w/i';<br>echo preg_match_all($pattern, $str);</code>",
    options: [
      "2",
      "3",
      "4",
    ],
    correct: 2
  },
  {
    question: "What will the following code return?<br><code class='codeblock'>$str = 'Which watch would you watch?';<br>$pattern = '/[wa]/i';<br>echo preg_match_all($pattern, $str);</code>",
    options: [
      "2",
      "4",
      "6",      
    ],
    correct: 2
  },
  {
    question: "What will the following code return?<br><code class='codeblock'>$str = 'Which watch would you watch?';<br>$pattern = '/wa|wo/';<br>echo preg_match_all($pattern, $str);</code>",
    options: [
      "2",
      "3",
      "4",      
    ],
    correct: 1
  }
]