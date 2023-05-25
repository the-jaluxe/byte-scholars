export const quiz = {
  topic: 'Javascript',
  level: 'Beginner',
  totalQuestions: 4,
  perQuestionScore: 5,
  questions: [
    {
      question: (
        <img
          class='test-img'
          src={require('../assets/robot-question1.jpg')}
          alt='Robot'
        />
      ),
      choices: ['A', 'B', 'C', 'D'],
      type: 'MCQs',
      correctAnswer:
        'To define a set of functions and protocols for building software applications',
    },
    {
      question:
        'Which data structure is used to implement a First-In-First-Out (FIFO) behavior?',
      choices: ['Stack', 'Queue', 'Linked list', 'Tree'],
      type: 'MCQs',
      correctAnswer: 'Queue',
    },
    {
      question: 'What does CSS stand for?',
      choices: [
        'Cascading Style Sheets',
        'Computer Style Sheets',
        'Creative Style Sheets',
        'Coded Style Sheets',
      ],
      type: 'MCQs',
      correctAnswer: 'Cascading Style Sheets',
    },
    {
      question: 'What is the purpose of a variable in programming?',
      choices: [
        'To store and manipulate data',
        'To display output on the screen',
        'To execute a loop',
        'To create functions',
      ],
      type: 'MCQs',
      correctAnswer: 'To store and manipulate data',
    },
    {
      question:
        'Which programming language is primarily used for web development?',
      choices: ['Python', 'Java', 'HTML', 'C++'],
      type: 'MCQs',
      correctAnswer: 'HTML',
    },
    {
      question: "What is the purpose of the 'if' statement in programming?",
      choices: [
        'To perform arithmetic operations',
        'To create a loop',
        'To make decisions based on conditions',
        'To define functions',
      ],
      type: 'MCQs',
      correctAnswer: 'To make decisions based on conditions',
    },
    {
      question: 'Which of the following is a database management system?',
      choices: ['MySQL', 'CSS', 'HTML', 'JavaScript'],
      type: 'MCQs',
      correctAnswer: 'MySQL',
    },
    {
      question:
        'Which data type is used to store a sequence of characters in programming?',
      choices: ['Integer', 'Float', 'String', 'Boolean'],
      type: 'MCQs',
      correctAnswer: 'String',
    },
    {
      question: "What is the purpose of the 'for' loop in programming?",
      choices: [
        'To terminate the program execution',
        'To divide the program into smaller units',
        'To repeat a set of instructions a specific number of times',
        'To handle user input',
      ],
      type: 'MCQs',
      correctAnswer:
        'To repeat a set of instructions a specific number of times',
    },
    {
      question: 'Which of the following is NOT a programming paradigm?',
      choices: [
        'Procedural programming',
        'Object-oriented programming',
        'Functional programming',
        'Interpretive programming',
      ],
      type: 'MCQs',
      correctAnswer: 'Interpretive programming',
    },
    {
      question:
        'What is the output of the following code snippet?\n\nvar x = 10;\nconsole.log(x++);\nconsole.log(x);',
      choices: ['10, 10', '10, 11', '11, 10', '11, 11'],
      type: 'MCQs',
      correctAnswer: '10, 11',
    },
    {
      question:
        'Which of the following is NOT a valid primitive data type in JavaScript?',
      choices: ['Number', 'String', 'Boolean', 'Array'],
      type: 'MCQs',
      correctAnswer: 'Array',
    },
    {
      question: "What does the acronym 'HTTP' stand for?",
      choices: [
        'HyperText Transfer Protocol',
        'Home Transfer Protocol',
        'High-Tech Text Protocol',
        'Hyper Transfer Technology',
      ],
      type: 'MCQs',
      correctAnswer: 'HyperText Transfer Protocol',
    },
    {
      question:
        'Which of the following is NOT a valid method for array manipulation in JavaScript?',
      choices: ['push()', 'pop()', 'sort()', 'remove()'],
      type: 'MCQs',
      correctAnswer: 'remove()',
    },
    {
      question: "What is the purpose of the 'else' statement in programming?",
      choices: [
        'To execute a set of instructions repeatedly',
        'To handle errors and exceptions',
        'To define functions',
        'To provide an alternative execution path',
      ],
      type: 'MCQs',
      correctAnswer: 'To provide an alternative execution path',
    },
    {
      question:
        'Which operator is used for concatenating strings in JavaScript?',
      choices: ['+', '-', '*', '&'],
      type: 'MCQs',
      correctAnswer: '+',
    },
    {
      question: 'What is the primary purpose of a function in programming?',
      choices: [
        'To perform mathematical calculations',
        'To store and manipulate data',
        'To create loops',
        'To group and reuse a set of instructions',
      ],
      type: 'MCQs',
      correctAnswer: 'To group and reuse a set of instructions',
    },
    {
      question:
        'Which of the following is an example of a front-end web development framework?',
      choices: ['React', 'Node.js', 'Express.js', 'Django'],
      type: 'MCQs',
      correctAnswer: 'React',
    },
    {
      question: "What is the purpose of the 'return' statement in a function?",
      choices: [
        'To define the function',
        'To terminate the program',
        'To output a value from the function',
        'To import external libraries',
      ],
      type: 'MCQs',
      correctAnswer: 'To output a value from the function',
    },
    {
      question:
        'Which of the following is NOT a valid comparison operator in JavaScript?',
      choices: ['>=', '===', '!=', '<='],
      type: 'MCQs',
      correctAnswer: '===',
    },
    {
      question: 'What is the purpose of abstraction in computer science?',
      choices: [
        'To hide complexity and provide a simplified view',
        'To improve performance of algorithms',
        'To encrypt data for security',
        'To create graphical user interfaces',
      ],
      type: 'MCQs',
      correctAnswer: 'To hide complexity and provide a simplified view',
    },
    {
      question: "What does the term 'algorithm' refer to in computer science?",
      choices: [
        'A step-by-step procedure for solving a problem',
        'A graphical representation of data',
        'A collection of related data items',
        'A high-level programming language',
      ],
      type: 'MCQs',
      correctAnswer: 'A step-by-step procedure for solving a problem',
    },
    {
      question:
        'Which of the following is an example of a binary representation of a number?',
      choices: ['10110', '0xFF', '3.14', 'ABC'],
      type: 'MCQs',
      correctAnswer: '10110',
    },
    {
      question: 'What is the purpose of conditional statements in programming?',
      choices: [
        'To make decisions based on certain conditions',
        'To define a sequence of steps to be executed',
        'To perform repetitive tasks',
        'To store and retrieve data',
      ],
      type: 'MCQs',
      correctAnswer: 'To make decisions based on certain conditions',
    },
    {
      question: "What does the term 'binary search' refer to?",
      choices: [
        'An efficient algorithm to search for an element in a sorted list',
        'A method to convert decimal numbers to binary representation',
        'A technique to encrypt data using binary code',
        'A data structure that stores elements in a binary format',
      ],
      type: 'MCQs',
      correctAnswer:
        'An efficient algorithm to search for an element in a sorted list',
    },
    {
      question:
        'Which of the following is NOT a characteristic of a well-designed user interface?',
      choices: [
        'Consistency',
        'Cluttered layout',
        'Intuitive navigation',
        'Responsive and interactive',
      ],
      type: 'MCQs',
      correctAnswer: 'Cluttered layout',
    },
    {
      question: 'What is the purpose of iteration in programming?',
      choices: [
        'To repeat a block of code multiple times',
        'To perform mathematical calculations',
        'To handle errors and exceptions',
        'To define data structures',
      ],
      type: 'MCQs',
      correctAnswer: 'To repeat a block of code multiple times',
    },
    {
      question:
        'Which of the following is an example of a cyber security threat?',
      choices: ['Phishing', 'Encryption', 'HTML', 'Syntax error'],
      type: 'MCQs',
      correctAnswer: 'Phishing',
    },
    {
      question:
        "What does the term 'Big O notation' represent in computer science?",
      choices: [
        'The efficiency or complexity of an algorithm',
        "The size of a computer's memory",
        'The number of lines of code in a program',
        'The resolution of a digital image',
      ],
      type: 'MCQs',
      correctAnswer: 'The efficiency or complexity of an algorithm',
    },
    {
      question: 'What is the purpose of data validation in programming?',
      choices: [
        'To ensure data is correct and meaningful',
        'To convert data between different formats',
        'To store and retrieve data from a database',
        'To generate random numbers',
      ],
      type: 'MCQs',
      correctAnswer: 'To ensure data is correct and meaningful',
    },
    {
      question: 'What is the purpose of a loop in programming?',
      choices: [
        'To repeat a block of code multiple times',
        'To define data types',
        'To handle user input',
        'To perform mathematical calculations',
      ],
      type: 'MCQs',
      correctAnswer: 'To repeat a block of code multiple times',
    },
    {
      question:
        'Which of the following is an example of a high-level programming language?',
      choices: ['Python', 'Assembly', 'Binary', 'Machine code'],
      type: 'MCQs',
      correctAnswer: 'Python',
    },
    {
      question: "What does the term 'iteration' refer to in programming?",
      choices: [
        'The process of repeating a set of instructions',
        'The act of saving data to a file',
        'The conversion of code from one programming language to another',
        'The analysis of code for errors and bugs',
      ],
      type: 'MCQs',
      correctAnswer: 'The process of repeating a set of instructions',
    },
    {
      question:
        'Which of the following is an example of an event-driven programming paradigm?',
      choices: ['JavaScript', 'SQL', 'C', 'FORTRAN'],
      type: 'MCQs',
      correctAnswer: 'JavaScript',
    },
    {
      question: 'What is the purpose of a variable in programming?',
      choices: [
        'To store and manipulate data',
        'To display text on the screen',
        'To define the structure of a program',
        'To execute a sequence of steps',
      ],
      type: 'MCQs',
      correctAnswer: 'To store and manipulate data',
    },
    {
      question: 'Which of the following is an example of a data structure?',
      choices: ['Array', 'Function', 'Algorithm', 'File'],
      type: 'MCQs',
      correctAnswer: 'Array',
    },
    {
      question:
        "What does the term 'open source' mean in the context of software development?",
      choices: [
        'Software whose source code is freely available and can be modified',
        'Software that is protected by copyright and cannot be accessed',
        'Software that is developed by a single individual',
        'Software that is used for educational purposes only',
      ],
      type: 'MCQs',
      correctAnswer:
        'Software whose source code is freely available and can be modified',
    },
    {
      question: 'Which of the following is an example of a network protocol?',
      choices: ['HTTP', 'JPEG', 'HTML', 'SQL'],
      type: 'MCQs',
      correctAnswer: 'HTTP',
    },
    {
      question: 'What is the purpose of comments in programming?',
      choices: [
        'To add explanatory notes for humans to understand the code',
        'To execute a specific block of code',
        'To create graphical user interfaces',
        'To store and retrieve data from a database',
      ],
      type: 'MCQs',
      correctAnswer:
        'To add explanatory notes for humans to understand the code',
    },
    {
      question:
        'Which of the following is an example of a cyber security measure?',
      choices: ['Encryption', 'Loop', 'Function', 'Database'],
      type: 'MCQs',
      correctAnswer: 'Encryption',
    },
    {
      question: 'What is the purpose of an if statement in programming?',
      choices: [
        'To conditionally execute a block of code',
        'To define a function',
        'To create graphical user interfaces',
        'To store and retrieve data from a database',
      ],
      type: 'MCQs',
      correctAnswer: 'To conditionally execute a block of code',
    },
    {
      question:
        'Which of the following is an example of a logical operator in programming?',
      choices: ['AND', 'LOOP', 'PRINT', 'DATABASE'],
      type: 'MCQs',
      correctAnswer: 'AND',
    },
    {
      question: 'What is the purpose of a function in programming?',
      choices: [
        'To encapsulate a set of instructions and reuse them',
        'To display text on the screen',
        'To define data types',
        'To perform mathematical calculations',
      ],
      type: 'MCQs',
      correctAnswer: 'To encapsulate a set of instructions and reuse them',
    },
    {
      question: 'Which of the following is an example of an algorithm?',
      choices: ['Bubble Sort', 'Variable', 'Database', 'File'],
      type: 'MCQs',
      correctAnswer: 'Bubble Sort',
    },
    {
      question: "What does the term 'debugging' mean in programming?",
      choices: [
        'The process of finding and fixing errors in code',
        'The act of saving data to a file',
        'The conversion of code from one programming language to another',
        'The analysis of code for performance optimization',
      ],
      type: 'MCQs',
      correctAnswer: 'The process of finding and fixing errors in code',
    },
    {
      question: 'Which of the following is an example of a data type?',
      choices: ['String', 'Loop', 'Print', 'Encryption'],
      type: 'MCQs',
      correctAnswer: 'String',
    },
    {
      question: 'What is the purpose of a for loop in programming?',
      choices: [
        'To repeat a block of code a specific number of times',
        'To handle user input',
        'To define network protocols',
        'To perform mathematical calculations',
      ],
      type: 'MCQs',
      correctAnswer: 'To repeat a block of code a specific number of times',
    },
    {
      question:
        'Which of the following is an example of a programming paradigm?',
      choices: ['Object-Oriented Programming', 'SQL', 'HTML', 'JPEG'],
      type: 'MCQs',
      correctAnswer: 'Object-Oriented Programming',
    },
    {
      question: "What does the term 'API' stand for in programming?",
      choices: [
        'Application Programming Interface',
        'Algorithm Performance Index',
        'Array Pointer Instruction',
        'Automated Program Invocation',
      ],
      type: 'MCQs',
      correctAnswer: 'Application Programming Interface',
    },
    {
      question:
        'Which of the following is an example of a database management system?',
      choices: ['MySQL', 'Function', 'Loop', 'Encryption'],
      type: 'MCQs',
      correctAnswer: 'MySQL',
    },
    {
      question:
        'What will be the output of the following code?\n\nint x = 5;\nint y = 3;\nSystem.out.println(x + y);',
      choices: ['35', '8', '15', 'Error'],
      type: 'MCQs',
      correctAnswer: '8',
    },
    {
      question: 'Which of the following is an example of an input device?',
      choices: ['Monitor', 'Keyboard', 'Printer', 'Hard Drive'],
      type: 'MCQs',
      correctAnswer: 'Keyboard',
    },
    {
      question:
        'Which of the following is true about a variable in programming?',
      choices: [
        'It can only store numbers',
        'It has a fixed value that cannot be changed',
        'It can store different values during program execution',
        'It can only be used once in a program',
      ],
      type: 'MCQs',
      correctAnswer: 'It can store different values during program execution',
    },
    {
      question: 'What does the acronym CPU stand for?',
      choices: [
        'Central Processing Unit',
        'Control Processing Unit',
        'Computer Programming Unit',
        'Central Programming Unit',
      ],
      type: 'MCQs',
      correctAnswer: 'Central Processing Unit',
    },
    {
      question: 'Which of the following is an example of a Boolean data type?',
      choices: ['5', '3.14', 'true', 'Hello, World!'],
      type: 'MCQs',
      correctAnswer: 'true',
    },
    {
      question:
        'Which of the following is NOT a characteristic of a good algorithm?',
      choices: ['Efficiency', 'Correctness', 'Reusability', 'Complexity'],
      type: 'MCQs',
      correctAnswer: 'Complexity',
    },
    {
      question: 'What is the primary goal of data compression techniques?',
      choices: [
        'To increase the size of data for better storage',
        'To reduce the size of data for efficient storage and transmission',
        'To convert data into a different format',
        'To encrypt data for security purposes',
      ],
      type: 'MCQs',
      correctAnswer:
        'To reduce the size of data for efficient storage and transmission',
    },
    {
      question: 'What is the purpose of binary representation in computing?',
      choices: [
        'To store and manipulate text-based data',
        'To perform mathematical calculations more efficiently',
        'To represent data using only two symbols, 0 and 1',
        'To organize and sort data in a database',
      ],
      type: 'MCQs',
      correctAnswer: 'To represent data using only two symbols, 0 and 1',
    },
    {
      question: 'What is the primary purpose of a loop in programming?',
      choices: [
        'To define a variable',
        'To store multiple values together',
        'To perform a specific action repeatedly',
        'To organize and reuse code',
      ],
      type: 'MCQs',
      correctAnswer: 'To perform a specific action repeatedly',
    },
    {
      question:
        'Which of the following best describes the concept of computational thinking?',
      choices: [
        'The ability to write complex algorithms',
        'The ability to solve problems logically and methodically using a computer',
        'The ability to analyze and interpret data',
        'The ability to create user-friendly interfaces',
      ],
      type: 'MCQs',
      correctAnswer:
        'The ability to solve problems logically and methodically using a computer',
    },
    {
      question:
        'What is the primary purpose of an API (Application Programming Interface)?',
      choices: [
        'To provide a graphical user interface for an application',
        'To establish a connection to a database',
        'To define a set of functions and protocols for building software applications',
        'To secure a network connection',
      ],
      type: 'MCQs',
      correctAnswer:
        'To define a set of functions and protocols for building software applications',
    },
    {
      question: "<img src='{robotImage1}' alt='Robot Image'/>",
      choices: [
        'To provide a graphical user interface for an application',
        'To establish a connection to a database',
        'To define a set of functions and protocols for building software applications',
        'To secure a network connection',
      ],
      type: 'MCQs',
      correctAnswer:
        'To define a set of functions and protocols for building software applications',
    },
    {
      question: (
        <div>
          <img
            class='test-img'
            src={require('../assets/robot-question2part1.jpg')}
            alt='Robot'
          />
          <img
            class='test-img'
            src={require('../assets/robot-question2part2.jpg')}
            alt='Robot'
          />
        </div>
      ),
      choices: ['A', 'B', 'C', 'D'],
      type: 'MCQs',
      correctAnswer:
        'To define a set of functions and protocols for building software applications',
    },
  ],
};
