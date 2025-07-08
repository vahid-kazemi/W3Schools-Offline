qobjects = [
  {
    draganddroptext: "<code>using ___;  // include the necessary namespace</code>",
    draganddropquestion: "Drag and drop the correct namespace to work with files.",
    options: ["System.IO", "System.File", "System.Text", "System.Data"],
    correct: [0]
  },
  {
    question: "Which method is used to check if a file exists?",
    options: [
      "File.Read()",
      "File.Exists()",
      "File.Create()",
      "File.Check()"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>File.____(\"filename.txt\", \"Hello World!\");</code>",
    draganddropquestion: "Drag and drop the correct method to create and write content to a file.",
    options: ["WriteAllText", "ReadAllText", "AppendText", "Copy"],
    correct: [0]
  },
  {
    question: "What will the following code output if 'filename.txt' contains 'Hello World!'?<br><code class='codeblock'>using System.IO;<br>string content = File.ReadAllText(\"filename.txt\");<br>Console.WriteLine(content);</code>",
    options: [
      "filename.txt",
      "Error: File does not exist",
      "Hello World!",
      "null"
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>if (File.Exists(\"data.txt\"))<br>{<br>&nbsp;&nbsp;File.___(\"data.txt\");<br>}</code>",
    draganddropquestion: "Drag and drop the correct method to delete the file if it exists.",
    options: ["Delete", "Remove", "Clear", "Close"],
    correct: [0]
  },
  {
    question: "What does the <code class='w3-codespan'>File.AppendText()</code> method do?",
    options: [
      "Overwrites a file with new text.",
      "Deletes the contents of a file.",
      "Appends text at the end of an existing file.",
      "Creates a new file and writes text to it, overwriting existing content."
    ],
    correct: 2
  },
  {
    draganddroptext: "<code>string text = File.___(\"notes.txt\");</code>",
    draganddropquestion: "Drag and drop the correct method to read all content from a file.",
    options: ["WriteAllText", "ReadAllText", "AppendText", "Copy"],
    correct: [1]
  },
  {
    question: "Which method replaces the content of one file with another?",
    options: [
      "File.Copy()",
      "File.Replace()",
      "File.Overwrite()",
      "File.Update()"
    ],
    correct: 1
  }
]
