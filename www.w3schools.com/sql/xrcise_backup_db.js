const qobjects = [
  {
    question: "Which SQL statement creates a full backup of a database named 'myDB'?",
    options: [
      "BACKUP DATABASE myDB TO FILE = 'C:\\backups\\myDB.bak';",
      "BACKUP DATABASE myDB TO DISK = 'C:\\backups\\myDB.bak';",
      "BACKUP DATABASE myDB WITH DIFFERENTIAL;",
      "SAVE DATABASE myDB TO 'C:\\backups\\myDB.bak';"
    ],
    correct: 1
  },
  {
    question: "What is the purpose of the SQL <code class='w3-codespan'>BACKUP DATABASE</code> statement?",
    options: [
      "To restore a database from a backup file",
      "To create a backup of an existing database",
      "To delete old database backups",
      "To copy tables from one database to another"
    ],
    correct: 1
  },
  {
    question: "What is the primary purpose of a differential backup?",
    options: [
      "To back up the entire database",
      "To back up only the parts that have changed since the last full backup",
      "To back up the database schema",
      "To create a temporary backup"
    ],
    correct: 1
  },
  {
    question: "Which syntax is used to create a differential backup in SQL Server?",
    options: [
      "BACKUP DATABASE myDB TO DISK = 'D:\\myDB.bak' DIFFERENTIAL;",
      "BACKUP DATABASE myDB TO DISK = 'D:\\myDB.bak' WITH DIFFERENTIAL;",
      "BACKUP DIFFERENTIAL DATABASE myDB TO DISK = 'D:\\myDB.bak';",
      "DIFFERENTIAL BACKUP DATABASE myDB TO DISK = 'D:\\myDB.bak';"
    ],
    correct: 1
  },
  {
    draganddroptext: "<code>___ ___ ___ TO DISK = ___;</code>",
    draganddropquestion: "Drag and drop the correct SQL keywords to back up a database named 'SchoolDB' to the D drive.",
    options: ["DATABASE", "'D:\\backups\\SchoolDB.bak'", "SchoolDB", "BACKUP"],
    correct: [3, 0, 2, 1]
  }
]
