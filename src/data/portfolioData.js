export const personalInfo = {
  name: "Aditya Singh Saini",
  role: "Full Stack Developer",
  tagline: "Builder of Modern Web Applications",
  location: "India",
  education: "Computer Science & Engineering",
  about: "I am a passionate Full Stack Developer and AI Enthusiast. I specialize in building immersive, high-performance web applications using modern technologies. My focus is on delivering exceptional user experiences through clean code and innovative design.",
  stats: [
    { label: "Projects Completed", value: 15 },
    { label: "Internships", value: 2 },
    { label: "Certificates", value: 10 },
    { label: "Technologies", value: 25 }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "aditya@example.com"
  }
};

export const skills = {
  "Programming Languages": ["Java", "JavaScript", "Python", "C", "HTML5", "CSS3"],
  "Frameworks & Libraries": ["React.js", "Node.js", "Express.js"],
  "Databases": ["MySQL"],
  "Tools": ["Git", "GitHub", "Linux", "VS Code"],
  "Core Concepts": ["REST APIs", "JWT Authentication", "CRUD Operations", "Object-Oriented Programming (OOP)", "Responsive Web Design", "Database Management", "Agile Development", "Cloud Computing"]
};

export const skillsData = [
  {
    category: "Frontend Development",
    iconName: "Laptop",
    color: "#00E5FF", // neonBlue
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    iconName: "Server",
    color: "#8A2BE2", // neonPurple
    items: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
  },
  {
    category: "Database",
    iconName: "Database",
    color: "#00FFFF", // Cyan
    items: ["MySQL"]
  },
  {
    category: "Programming Languages",
    iconName: "Code",
    color: "#FF2E88", // Pink
    items: ["Java", "JavaScript", "C", "SQL"]
  },
  {
    category: "Tools & Development",
    iconName: "Wrench",
    color: "#0055FF", // Electric Blue
    items: ["Visual Studio Code", "IntelliJ IDEA", "Git", "GitHub", "Postman", "Antigravity", "Vite", "npm"]
  },
  {
    category: "Cloud & Deployment",
    iconName: "Cloud",
    color: "#8A2BE2", // Purple
    items: ["Azure", "GitHub Actions", "Netlify", "Render"]
  },
  {
    category: "Currently Learning",
    iconName: "Rocket",
    color: "#FFFFFF",
    items: ["AI Automation", "Prompt Engineering"],
    special: true
  }
];

export const experience = [
  {
    company: "Pinnacle Labs",
    role: "Full Stack Developer Intern",
    period: "2024 - Present",
    description: "Developing scalable web applications, integrating AI features, and collaborating on modern architectural solutions."
  },
  {
    company: "Sarangi Tech",
    role: "Frontend Developer Intern",
    period: "2023 - 2024",
    description: "Built responsive user interfaces, optimized web performance, and implemented interactive animations."
  },
  {
    company: "Current Learning Journey",
    role: "Self-Taught Developer",
    period: "Continuous",
    description: "Constantly exploring new technologies, participating in hackathons, and building open-source projects."
  }
];

export const projects = [
  {
    id: 1,
    title: "Weather-OS",
    description: "A sleek, operating-system-styled weather dashboard offering real-time atmospheric data.",
    techStack: ["React.js", "Tailwind CSS", "OpenWeather API", "Framer Motion"],
    features: ["Interactive Widgets", "7-Day Forecast", "Dynamic Backgrounds", "Geolocation"],
    github: "https://github.com",
    liveDemo: "https://demo.com",
    image: "/weather-os.png",
    problem: "Most weather apps provide static lists of data that fail to engage users or visualize the changing atmosphere effectively.",
    solution: "Created Weather-OS, an immersive, widget-based dashboard that visually reflects current conditions using dynamic animations.",
    architecture: "Built as a single-page application (SPA) using React. Uses Framer Motion for complex transitions and context API for state management.",
    challenges: "Handling rapid asynchronous data fetching from multiple weather endpoints without hitting API rate limits or causing UI stutter.",
    lessons: "Deepened expertise in React performance optimization, API request caching, and complex CSS/Framer motion animations."
  },
  {
    id: 2,
    title: "Sarangi Project",
    description: "A comprehensive web application designed for consultancy and advisory services.",
    techStack: ["JavaScript", "Node.js", "Express", "MySQL", "AI Integration"],
    features: ["Integrated AI Chatbot (Sara)", "Admin/User Dashboards", "Secure Auth", "Data Management"],
    github: "https://github.com",
    liveDemo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    problem: "Consultancy services needed a modern portal for client interaction and AI assistance.",
    solution: "Developed a full-stack application featuring interactive dashboards and an AI chatbot.",
    architecture: "Responsive frontend powered by a robust Node.js and MySQL backend.",
    challenges: "Integrating AI chatbot capabilities seamlessly into the user dashboard.",
    lessons: "Mastered full-stack data flow and API integrations for AI tools."
  },
  {
    id: 3,
    title: "Accomodo",
    description: "A comprehensive accommodation booking platform for modern travelers.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Property Listings", "Booking System", "User Profiles", "Review System"],
    github: "https://github.com",
    liveDemo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    problem: "Modern travelers often find it difficult to locate personalized, unique accommodation options that fit specific needs. Existing platforms can be cluttered, making it hard to trust listings or communicate directly and securely with hosts.",
    solution: "Developed 'Accomodo', a streamlined, centralized platform that seamlessly connects hosts with guests. It features intuitive property filtering, a secure real-time booking engine, and an integrated review system to build trust.",
    architecture: "Built on the MERN stack (MongoDB, Express, React, Node.js). The frontend uses React for dynamic rendering, communicating via RESTful APIs to an Express backend. User authentication and session management are handled securely using JWT.",
    challenges: "One of the most complex tasks was implementing an accurate date availability checking system to prevent double-bookings. Handling timezones and concurrent booking requests required careful database transaction design and collision prevention logic.",
    lessons: "Gained deep expertise in writing complex MongoDB aggregation pipelines for search filtering and mastered advanced React state management techniques for large-scale applications."
  }
];

export const certificates = [
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "2024"
  },
  {
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2023"
  }
];
