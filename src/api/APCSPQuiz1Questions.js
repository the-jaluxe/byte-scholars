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
      correctAnswer: 'A',
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
      correctAnswer: 'D',
    },
    {
      question: (
        <div>
          <img
            class='test-img'
            src={require('../assets/question1.jpg')}
            alt='Robot'
          />
        </div>
      ),
      choices: ['A', 'L', 'V', 'Y'],
      type: 'MCQs',
      correctAnswer: 'V',
    },
    {
      question: (
        <div>
          <img
            class='test-img'
            src={require('../assets/question2.jpg')}
            alt='Robot'
          />
        </div>
      ),
      choices: [
        'Input A must be true',
        'Input A must be false',
        'Input A can be either true or false',
        'There is no possible value of input A that will cause the circuit to have the output true',
      ],
      type: 'MCQs',
      correctAnswer: 'Input A must be true',
    },
    {
      question: (
        <div>
          <img
            class='test-img'
            src={require('../assets/question3.jpg')}
            alt='Robot'
          />
        </div>
      ),
      choices: [
        'Is anyone there?',
        'Better late than never.',
        'Hello. Is anyone there?',
        'Hello. Better late than never.',
      ],
      type: 'MCQs',
      correctAnswer: 'Better late than never.',
    },
    {
      question: (
        <div>
          <img
            class='test-img'
            src={require('../assets/question4.jpg')}
            alt='Robot'
          />
          <img
            class='test-img'
            src={require('../assets/question4part2.jpg')}
            alt='Robot'
          />
        </div>
      ),
      choices: ['A', 'B', 'C', 'D'],
      type: 'MCQs',
      correctAnswer: 'C',
    },
    {
      question: (
        <div>
          <img
            class='test-img'
            src={require('../assets/question5.jpg')}
            alt='Robot'
          />
        </div>
      ),
      choices: ['A', 'B', 'C', 'D'],
      type: 'MCQs',
      correctAnswer: 'C',
    },
    {
      question: (
        <div>
          <img
            class='test-img'
            src={require('../assets/question7.jpg')}
            alt='Robot'
          />
        </div>
      ),
      choices: [
        'The number 0 is displayed',
        'The number 6 is displayed',
        'The number 10 is displayed',
        'Nothing is displayed; the program results in an infinite loop',
      ],
      type: 'MCQs',
      correctAnswer:
        'Nothing is displayed; the program results in an infinite loop',
    },
    {
      question: (
        <div>
          <img
            class='test-img'
            src={require('../assets/question8.jpg')}
            alt='Robot'
          />
        </div>
      ),
      choices: ['A', 'B', 'C', 'D'],
      type: 'MCQs',
      correctAnswer: 'B',
    },
    {
      question: (
        <div>
          <img
            class='test-img'
            src={require('../assets/question9part1.jpg')}
            alt='Robot'
          />
          <img
            class='test-img'
            src={require('../assets/question9part2.jpg')}
            alt='Robot'
          />
        </div>
      ),
      choices: ['A', 'B', 'C', 'D'],
      type: 'MCQs',
      correctAnswer:
        'To define a set of functions and protocols for building software applications',
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
      question: 'What is the purpose of comments in programming code?',
      choices: [
        'To mark the beginning and end of a code block',
        'To define the structure of a program',
        'To improve the performance of the code',
        'To provide additional information and explanations for humans',
      ],
      type: 'MCQs',
      correctAnswer:
        'To provide additional information and explanations for humans',
    },
    {
      question:
        'Which of the following is an example of a global challenge addressed by computer science?',
      choices: [
        'Increasing the efficiency of computer processors',
        'Ensuring data privacy and security',
        'Providing universal access to the internet',
        'Developing advanced programming languages',
      ],
      type: 'MCQs',
      correctAnswer: 'Providing universal access to the internet',
    },
    {
      question:
        "What does the concept of 'creativity' in computer science refer to?",
      choices: [
        'The ability to write complex algorithms',
        'The use of artistic design principles in programming',
        'The development of innovative and original solutions',
        'The creation of secure network connections',
      ],
      type: 'MCQs',
      correctAnswer: 'The development of innovative and original solutions',
    },
    {
      question:
        'Which of the following is an example of an impact of computing on society?',
      choices: [
        'The development of faster computer processors',
        'The invention of the World Wide Web',
        'The creation of programming languages',
        'The improvement of data storage techniques',
      ],
      type: 'MCQs',
      correctAnswer: 'The invention of the World Wide Web',
    },
    {
      question:
        'Which of the following best describes the concept of abstraction in computer science?',
      choices: [
        'Ignoring irrelevant details and focusing on essential components of a problem',
        'Creating graphical user interfaces for software applications',
        'Establishing secure network connections',
        'Processing and analyzing data in digital form',
      ],
      type: 'MCQs',
      correctAnswer:
        'Ignoring irrelevant details and focusing on essential components of a problem',
    },
    {
      question:
        'Which of the following is a true statement about lossy and lossless compression algorithms?',
      choices: [
        'Lossy compression algorithms can reduce the file size more than lossless compression algorithms, but some data is lost in the process',
        'Lossless compression algorithms can reduce the file size more than lossy compression algorithms, but some data is lost in the process',
        'Lossy compression algorithms can preserve all the data in the original file, but they require more processing power than lossless compression algorithms',
        'Lossless compression algorithms can preserve all the data in the original file, but they require more processing power than lossy compression algorithms',
      ],
      type: 'MCQs',
      correctAnswer:
        'Lossy compression algorithms can reduce the file size more than lossless compression algorithms, but some data is lost in the process',
    },
    {
      question:
        'Which of the following is a benefit of using hexadecimal notation to represent binary data?',
      choices: [
        'It reduces the number of bits needed to store data',
        'It makes it easier to convert data to decimal notation',
        'It allows for more efficient transmission of data over networks',
        'It simplifies the representation of large binary numbers',
      ],
      type: 'MCQs',
      correctAnswer: 'It simplifies the representation of large binary numbers',
    },
    {
      question:
        'Which of the following is a true statement about data privacy and security?',
      choices: [
        'Data privacy refers to the protection of data from unauthorized access, while data security refers to the protection of data from accidental or intentional modification or deletion',
        'Data security refers to the protection of data from unauthorized access, while data privacy refers to the protection of data from accidental or intentional modification or deletion',
        'Data privacy refers to the protection of data from unauthorized access or disclosure, while data security refers to the protection of data from unauthorized modification or destruction',
        'Data security refers to the protection of data from unauthorized access or disclosure, while data privacy refers to the protection of data from unauthorized modification or destruction',
      ],
      type: 'MCQs',
      correctAnswer:
        'Data privacy refers to the protection of data from unauthorized access or disclosure, while data security refers to the protection of data from unauthorized modification or destruction',
    },
    {
      question:
        'Which of the following is a true statement about parallel computing and distributed computing?',
      choices: [
        'Parallel computing involves multiple processors working on different parts of a single task, while distributed computing involves multiple processors working on different tasks',
        'Distributed computing involves multiple processors working on different parts of a single task, while parallel computing involves multiple processors working on different tasks',
        'Parallel computing involves multiple processors working on the same task at the same time, while distributed computing involves multiple processors working on different tasks at different times',
        'Distributed computing involves multiple processors working on the same task at the same time, while parallel computing involves multiple processors working on different tasks at different times',
      ],
      type: 'MCQs',
      correctAnswer:
        'Parallel computing involves multiple processors working on different parts of a single task, while distributed computing involves multiple processors working on different tasks',
    },
    {
      question:
        'Which of the following is an example of a creative expression that can be achieved through computing?',
      choices: [
        'A digital art piece that uses algorithms to generate patterns and colors',
        'A scientific paper that uses data analysis to support a hypothesis',
        'A business plan that uses spreadsheets to calculate costs and profits',
        'A legal document that uses encryption to protect confidentiality',
      ],
      type: 'MCQs',
      correctAnswer:
        'A digital art piece that uses algorithms to generate patterns and colors',
    },
    {
      question:
        'Which of the following is an example of a global impact of computing on society?',
      choices: [
        'A mobile app that allows users to communicate with people from different countries and cultures',
        'A video game that allows users to create and explore virtual worlds and scenarios',
        'A web browser that allows users to access and view information from various sources and websites',
        'A spreadsheet that allows users to organize and manipulate data and perform calculations',
      ],
      type: 'MCQs',
      correctAnswer:
        'A mobile app that allows users to communicate with people from different countries and cultures',
    },
    {
      question:
        'Which of the following is a true statement about the Internet and the World Wide Web?',
      choices: [
        'The Internet is a network of interconnected devices, while the World Wide Web is a collection of web pages and resources',
        'The World Wide Web is a network of interconnected devices, while the Internet is a collection of web pages and resources',
        'The Internet and the World Wide Web are synonymous terms that refer to the same network of devices and resources',
        'The Internet and the World Wide Web are different networks that operate independently of each other',
      ],
      type: 'MCQs',
      correctAnswer:
        'The Internet is a network of interconnected devices, while the World Wide Web is a collection of web pages and resources',
    },
    {
      question:
        'Which of the following is an example of a computing innovation that uses data to benefit society?',
      choices: [
        'A social media platform that allows users to share their opinions and interests',
        'A search engine that provides relevant and accurate information to users',
        'A facial recognition system that identifies and verifies individuals',
        'A navigation system that provides optimal routes and traffic updates',
      ],
      type: 'MCQs',
      correctAnswer:
        'A navigation system that provides optimal routes and traffic updates',
    },
    {
      question:
        'Which of the following is an example of a computing system that uses abstraction to hide complexity and details?',
      choices: [
        'A web browser that allows users to access and view web pages without knowing the underlying protocols and languages',
        'A keyboard that allows users to input characters without knowing how they are encoded and transmitted',
        'A smartphone that allows users to perform various tasks without knowing how the hardware and software components interact',
        'All of the above',
      ],
      type: 'MCQs',
      correctAnswer: 'All of the above',
    },
    {
      question:
        'Which of the following is a true statement about the use of data collection and analysis in computing?',
      choices: [
        'Data collection and analysis can help solve problems, but they can also raise ethical issues and concerns',
        'Data collection and analysis can help solve problems, but they can also limit creativity and innovation',
        'Data collection and analysis can raise ethical issues and concerns, but they can also enhance creativity and innovation',
        'Data collection and analysis can limit creativity and innovation, but they can also enhance ethical issues and concerns',
      ],
      type: 'MCQs',
      correctAnswer:
        'Data collection and analysis can limit creativity and innovation, but they can also enhance ethical issues and concerns',
    },
    {
      question:
        'Which of the following is an example of a data visualization that can help communicate information or patterns in data?',
      choices: [
        'A histogram that shows the frequency distribution of a numerical variable',
        'A table that shows the values of a categorical variable',
        'A pie chart that shows the relative proportions of a categorical variable',
        'All of the above',
      ],
      type: 'MCQs',
      correctAnswer: 'All of the above',
    },
    {
      question:
        'Which of the following is an example of an algorithm that uses parallel computing?',
      choices: [
        'An algorithm that splits a large task into smaller subtasks and assigns them to different processors',
        'An algorithm that uses a heuristic to find an approximate solution to a hard problem',
        'An algorithm that uses a divide-and-conquer technique to solve a problem recursively',
        'All of the above',
      ],
      type: 'MCQs',
      correctAnswer:
        'An algorithm that splits a large task into smaller subtasks and assigns them to different processors',
    },
    {
      question:
        'Which of the following is an example of an algorithmic technique that can improve the efficiency of an algorithm?',
      choices: [
        'Using a loop to iterate over a list of elements',
        'Using a variable to store a value or expression',
        'Using a heuristic to find an approximate solution',
        'Using a comment to explain the purpose or logic of a code segment',
      ],
      type: 'MCQs',
      correctAnswer: 'Using a heuristic to find an approximate solution',
    },
  ],
};
