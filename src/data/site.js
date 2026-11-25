// Single place to edit your content. Nothing here is invented: add real details where marked.
export const profile = {
  name: "Ahmed Mohamed Ibrahim Elshafey",
  title: "MERN Stack Developer & Mechatronics Engineering Student",
  headline: "Building Modern Web Experiences & Scalable Backend Systems.",
  intro: [
    "I am Ahmed Mohamed Ibrahim Elshafey, a MERN Stack Developer with a strong foundation in programming, computer science, and modern web development.",
    "My programming journey started with C, C++, and Python, followed by frontend development using HTML, CSS, and JavaScript. I then expanded into React.js and backend development using Node.js, Express.js, and MongoDB.",
    "I am currently an undergraduate Mechatronics Engineering student at Mansoura National University (MNU), expected to graduate in 2028. My interdisciplinary background combines programming, web technologies, and engineering fundamentals.",
    "I am passionate about building complete web applications, developing RESTful APIs, designing database structures, and creating modern, scalable digital solutions.",
  ],
  university: "Mansoura National University (MNU)",
  department: "Mechatronics Engineering",
  graduation: "2028 (expected)",
  github: "https://github.com/ahmedelshafey350-lgtm",
  linkedin: "https://linkedin.com/in/ahmed-elshafey-8298b0363",
  email: "ahmedelshafi143@gmail.com",
  phone: "+20 010 44348513",
  phoneHref: "tel:+201044348513",
  whatsapp: "+20 01271611263",
  whatsappHref: "https://wa.me/201271611263",
  location: "Mansoura, Egypt",
  roles: "MERN Stack Developer | Frontend & Backend",
  // Optional: put your PDF in /public (e.g. '/cv.pdf'). If '' the CV is generated from this file.
  cvUrl: "",
};

export const nav = [
  ["/", "Home"],
  ["/about", "About"],
  ["/skills", "Skills"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/education", "Education"],
  ["/contact", "Contact"],
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: "Code2",
    items: ["C", "C++", "Python", "JavaScript (ES6+)"],
  },
  {
    title: "Computer Science Fundamentals",
    icon: "Cpu",
    items: [
      "Object-Oriented Programming (OOP)",
      "Programming Fundamentals",
      "Computer Science Fundamentals",
      "Problem Solving",
    ],
  },
  {
    title: "Frontend Development",
    icon: "Layout",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "DOM Manipulation",
      "Responsive Web Design",
      "Asynchronous JavaScript",
      "Fetch API",
      "Axios",
      "REST API Integration",
    ],
  },
  {
    title: "React.js Development",
    icon: "Atom",
    items: [
      "React.js",
      "Functional Components",
      "Class Components",
      "Props & State",
      "React Hooks",
      "useState",
      "useEffect",
      "Redux",
      "Actions & Reducers",
      "React Router",
      "Component-Based Architecture",
      "API Integration",
      "CRUD Operations",
    ],
  },
  {
    title: "Backend Development",
    icon: "Server",
    items: [
      "Node.js",
      "Express.js",
      "RESTful API Development",
      "Routing",
      "Controllers",
      "Middleware",
      "Custom Middleware",
      "HTTP Methods",
      "File Uploads",
      "Node.js Core Modules",
      "Crypto Module",
      "Asynchronous Programming",
      "Error Handling",
      "MVC Architecture",
    ],
  },
  {
    title: "Database Management",
    icon: "Database",
    items: [
      "MongoDB",
      "MongoDB Atlas",
      "Mongoose ODM",
      "Database Connection",
      "CRUD Operations",
      "Data Modeling",
    ],
  },
  {
    title: "Development Tools",
    icon: "Wrench",
    items: ["Git", "GitHub", "Postman", "npm", "Visual Studio Code"],
  },
];

export const exploring = [
  "JWT Authentication",
  "Authorization & Role-Based Access Control",
  "Password Hashing with bcrypt",
  "Joi / Zod Validation",
  "Advanced MongoDB Aggregation",
  "Database Indexing",
  "Pagination, Filtering & Sorting",
  "Global Error Handling",
  "Helmet Security",
  "Rate Limiting",
  "Redis Caching",
  "Socket.io",
  "Jest & Supertest",
  "Swagger / OpenAPI Documentation",
  "Backend Deployment",
  "Production Environment Configuration",
];

export const journey = [
  {
    title: "C, C++ & Python",
    text: "Where it started: core syntax, control flow, and learning to think like a programmer.",
    tags: ["C", "C++", "Python"],
  },
  {
    title: "Fundamentals & OOP",
    text: "Programming fundamentals, object-oriented design, and problem solving.",
    tags: ["OOP", "Problem Solving"],
  },
  {
    title: "Frontend basics",
    text: "First websites with HTML, CSS, and JavaScript, including DOM manipulation and responsive layouts.",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "React.js",
    text: "Component-based UIs with hooks, Redux, React Router, and API integration.",
    tags: ["React", "Redux", "React Router"],
  },
  {
    title: "Node.js & Express.js",
    text: "RESTful APIs, routing, controllers, middleware, file uploads, and MVC structure.",
    tags: ["Node.js", "Express", "REST"],
  },
  {
    title: "MongoDB & full-stack architecture",
    text: "Data modeling with Mongoose and MongoDB Atlas, connecting the full MERN stack end to end.",
    tags: ["MongoDB", "Mongoose", "MERN"],
  },
];

// Add real entries here: { heading, period, note }. Empty arrays show an editable prompt.
export const experience = [
  {
    role: "Front-End Internship",
    org: "EraaSoft",
    points: [
      "Travel Booking Website: tours, hotels, booking and checkout pages",
      "Books E-commerce Website: product listings and user-friendly interfaces",
      "Weather Application",
      "AI Image Generator Application",
    ],
    links: {
      "Travel Booking Website": "travel-booking-website",
      "Books E-commerce Website": "books-ecommerce-website",
      "AI Image Generator Application": "ai-image-generator",
    },
  },
  {
   role: "Front-End Training",
  org: "ITI",
  points: [
    "Learned HTML5, CSS3, and JavaScript fundamentals",
    "Developed responsive web interfaces using Bootstrap",
    "Practiced DOM manipulation and JavaScript event handling",
    "Worked with APIs and fetched dynamic data using JavaScript",
    "Built a Travel Booking Website with tours, hotels, and booking pages",
    "Developed a Books E-commerce Website",
    "Created a Weather Application using a weather API",
    "Built an AI Image Generator Application",
    "Applied front-end development concepts through practical projects and hands-on training"
  ],
    links: {
      "Travel Booking Website": "travel-booking-website",
      "Books E-commerce Website": "books-ecommerce-website",
      "AI Image Generator Application": "ai-image-generator",
    },
  },
  {
    role: "Back-End Internship",
    org: "NTI",
    points: [
      "Developed RESTful APIs for web applications using Node.js and Express.js",
      "Worked with MongoDB and Mongoose for database design and data management",
      "Implemented CRUD operations and server-side business logic",
      "Integrated APIs with frontend applications",
      "Worked on authentication, request validation, and API error handling",
    ],
    links: {
      "Travel Booking Website": "travel-booking-website",
      "Books E-commerce Website": "books-ecommerce-website",
      "AI Image Generator Application": "ai-image-generator",
    },
  },
  {
    role: "Back-End Training",
  org: "NTI",
  points: [
    "Learned Node.js fundamentals and server-side JavaScript development",
    "Worked with Express.js to build and manage web servers",
    "Learned RESTful API development and HTTP methods",
    "Worked with MongoDB and Mongoose for database management",
    "Implemented CRUD operations and database interactions",
    "Learned authentication, authorization, and request validation",
    "Practiced error handling and middleware implementation",
    "Integrated backend APIs with frontend applications",
    "Applied backend development concepts through practical projects and hands-on training"
  ],
    links: {
      "Travel Booking Website": "travel-booking-website",
      "Books E-commerce Website": "books-ecommerce-website",
      "AI Image Generator Application": "ai-image-generator",
    },
  },
];

export const education = [
  {
    heading: "Mechatronics Engineering (undergraduate)",
    place: "Mansoura National University (MNU)",
    period: "Expected graduation: 2028",
    status: "Currently studying",
  },
];
// Career goals were not provided. Add your own sentences here.
export const goals = [];
