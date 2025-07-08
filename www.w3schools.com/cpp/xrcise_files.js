qobjects = [
  {
    question: "Which C++ library allows us to work with files?",
    options: [
      "filestreams",
      "fstream",
      "string",
      "vector"
    ],
    correct: 1
  },
  {
    question: "Which class from the fstream library is used to create and write to files?",
    options: [
      "ifstream",
      "ofstream",
      "fstream",
      "filemanager"
    ],
    correct: 1
  },
  {
    question: "Consider the following code. What will it do?<br><code class='codeblock'>#include &lt;iostream&gt;<br>#include &lt;fstream&gt;<br>using namespace std;<br><br>int main() {<br>&nbsp;&nbsp;ofstream MyFile(\"filename.txt\");<br>&nbsp;&nbsp;MyFile &lt;&lt; \"Writing to a file.\";<br>&nbsp;&nbsp;MyFile.close();<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "Reads from filename.txt",
      "Creates a file but does not write anything",
      "Creates a file named filename.txt and writes 'Writing to a file.' into it",
      "Outputs 'Writing to a file.' on the console"
    ],
    correct: 2
  },
  {
    question: "What is the purpose of closing a file after writing or reading in C++?",
    options: [
      "To ensure changes are saved and free up memory",
      "To delete the file",
      "To reload the file",
      "To make the file accessible only to the program"
    ],
    correct: 0
  },
  {
    question: "Which class would you use to read from a file in C++?",
    options: [
      "ofstream",
      "fstream",
      "ifstream",
      "filemanager"
    ],
    correct: 2
  },
  {
    question: "Consider the following code. What does it do?<br><code class='codeblock'>#include &lt;fstream&gt;<br>using namespace std;<br><br>int main() {<br>&nbsp;&nbsp;string myText;<br>&nbsp;&nbsp;ifstream MyReadFile(\"filename.txt\");<br>&nbsp;&nbsp;while (getline(MyReadFile, myText)) {<br>&nbsp;&nbsp;&nbsp;&nbsp;cout &lt;&lt; myText;<br>&nbsp;&nbsp;}<br>&nbsp;&nbsp;MyReadFile.close();<br>&nbsp;&nbsp;return 0;<br>}</code>",
    options: [
      "Reads the content of filename.txt and prints it line by line",
      "Writes 'filename.txt' to the console",
      "Creates a file called filename.txt",
      "Deletes filename.txt"
    ],
    correct: 0
  }
]
