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
    github: "https://github.com/Adi32397",
    linkedin: "https://linkedin.com",
    email: "adityasinghsaini112@gmail.com",
    website: "https://github.com/Adi32397/portfolio"
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
    id: "deloitte-analytics",
    company: "Deloitte",
    subCompany: "Deloitte Australia",
    role: "Data Analytics",
    title: "Data Analytics",
    badge: "Job Simulation",
    type: "Corporate Simulation",
    period: "Aug 2026 - Present · 3 mos",
    location: "Remote",
    accentColor: "#86EFAC",
    logoBg: "bg-black",
    logoText: "D.",
    logoDotColor: "#86EFAC",
    summary: "Successfully completed the Deloitte Australia Data Analytics Job Simulation, gaining practical experience by working on simulated industry tasks related to data analysis, data modeling, visualization, and strategic communication.",
    highlights: [
      "Completed practical client-focused data analytics tasks simulating real-world consulting workflows for Deloitte Australia.",
      "Conducted exploratory data analysis, data hygiene/cleaning, and statistical modeling to uncover actionable insights.",
      "Engineered dynamic dashboards and visualizations to translate complex multi-variable datasets into executive metrics.",
      "Formulated strategic, data-driven recommendations addressing enterprise business challenges."
    ],
    certificate: {
      title: "Deloitte Australia – Data Analytics Job Simulation Certificate",
      issuer: "Deloitte Australia (via Forage)",
      description: "Successfully completed the Deloitte Australia Data Analytics Job Simulation, gaining practical experience by working on simulated industry tasks related to data analysis and dashboard presentation.",
      date: "Aug 2026",
      verified: true
    },
    skills: ["Data Analysis", "Data Analytics", "Data Visualization", "Tableau", "Excel", "Data Modeling"]
  },
  {
    id: "sarangi-intern",
    company: "Sarangi Group",
    subCompany: "Sarangi Tech",
    role: "Full Stack Developer Intern | Sarangi Tech",
    title: "Full Stack Developer Intern",
    badge: "Internship",
    type: "Internship",
    period: "Jun 2026 - Present · 5 mos",
    location: "Remote",
    accentColor: "#00E5FF",
    logoBg: "bg-[#0b1329]",
    logoText: "ST",
    intro: "Working as a Full Stack Developer Intern at Sarangi Tech, gaining hands-on experience in designing, developing, and maintaining web applications.",
    summary: "Hands-on engineering role focused on end-to-end web application development, collaborating in modern agile cycles, and shipping scalable full-stack features.",
    responsibilities: [
      "Developing responsive and user-friendly web interfaces using modern web technologies.",
      "Collaborating with team members on real-world software development projects.",
      "Working on both frontend and backend development tasks.",
      "Learning industry best practices for coding, debugging, and deployment.",
      "Contributing to the development of scalable and efficient web solutions."
    ],
    skills: ["React.js", "Node.js", "Express.js", "JavaScript (ES6+)", "REST APIs", "Full Stack Development", "Tailwind CSS", "Git & GitHub"]
  }
];

export const projects = [
  {
    id: 1,
    title: "CivicShield AI",
    subtitle: "AI-Powered MPLADS Anomaly, Risk and Duplicate Project Detection System",
    tagline: "Intelligent Monitoring, Financial Analytics and Verification Support for Public Development Projects",
    description: "An AI-assisted monitoring platform designed to help authorities analyze projects under the Members of Parliament Local Area Development Scheme (MPLADS). It combines financial analytics, rule-based risk scoring, machine-learning anomaly detection, duplicate project detection, geographic risk visualization, and human verification in one unified platform.",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "Python", "Isolation Forest", "Data Analytics"],
    features: [
      "Role-Based Dashboards (MP, District Authority, State Nodal, Ministry)",
      "Unsupervised Isolation Forest AI Anomaly Detection",
      "Rule-Based Multi-Factor Risk Scoring (0–100 scale)",
      "Automated Duplicate Project Detection (< ₹50,000 difference in same district/category)",
      "Real-Time Financial & Fund Utilization Analytics",
      "Geographic Risk Distribution & District Heatmaps",
      "Auditable Verification Queue with Inspection Findings & Evidence Upload",
      "Secure Storage for Supporting Documents & Site-Inspection Photographs",
      "Pre-Import CSV Validation Engine with Centralized MySQL Storage",
      "Explainable AI Insights & Plain-Language Anomaly Alerts"
    ],
    github: "https://github.com/Adi32397",
    liveDemo: "https://demo.com",
    image: "/civicshield.jpg",
    problem: "Traditional public project monitoring relies heavily on static dashboards, spreadsheets, and manual review across thousands of works. This makes it difficult to detect unusual expenditure patterns, physical-financial progress mismatches, execution delays, or duplicate submissions.",
    solution: "CivicShield provides a centralized monitoring and verification workflow. Ingested project data is validated and stored in MySQL as a single source of truth. The platform computes multi-parameter risk scores, flags multi-attribute anomalies with Isolation Forest, identifies duplicate candidate pairs, and provides an auditable Verification Queue for human inspectors.",
    architecture: "Decoupled architecture: React.js frontend for dashboards and verification interfaces, Node.js & Express.js REST API layer, centralized MySQL database, and Python-based Isolation Forest ML model. Pre-import validation engine screens CSV data before MySQL persistence; all runtime services query MySQL.",
    riskRules: [
      "Cost Overrun: Adds proportional points when expenditure exceeds sanctioned budget (Max 25 pts).",
      "Progress Mismatch: Compares financial vs physical progress with 10% tolerance threshold (Max 20 pts).",
      "Delay Risk: Adds 18 points when project is officially marked as 'Delayed'.",
      "Isolation Forest ML Anomaly: Adds 20 points when model flags multi-attribute numerical anomaly and base score < 60."
    ],
    riskTiers: [
      { tier: "Low", range: "0–30", action: "Periodic monitoring" },
      { tier: "Medium", range: "31–60", action: "Automated review" },
      { tier: "High", range: "61–80", action: "Priority field inspection" },
      { tier: "Critical", range: "81+", action: "Immediate audit & fund hold" }
    ],
    duplicateCriteria: "Flags potential duplicate pairs when: 1) Same district, 2) Same category, and 3) |Sanctioned Amount A - Sanctioned Amount B| < ₹50,000. Project IDs and names can differ; flagged records require human review.",
    challenges: "Maintaining cross-module consistency, handling CSV duplicate Project IDs during ingestion, unsupervised anomaly detection without confirmed fraud labels, reducing false positives, explaining mathematical risk scores to non-technical users, and associating evidence photos immutably.",
    evaluation: "Evaluated using controlled synthetic benchmark datasets across Precision, Recall, F1-Score, False-Positive Rate, and duplicate matching accuracy comparing rule-based, Isolation Forest, and hybrid CivicShield approaches.",
    utility: "Enables District Authorities to prioritize inspections, MPs to track constituency deliverables, State Authorities to benchmark districts, and Ministry officials to monitor national risk heatmaps.",
    lessons: "Mastered end-to-end full-stack governance engineering, explainable AI scoring pipelines, and resilient relational data architectures."
  },
  {
    id: 2,
    title: "Weather-OS",
    description: "A sleek, operating-system-styled weather dashboard offering real-time atmospheric data.",
    techStack: ["React.js", "Tailwind CSS", "OpenWeather API", "Framer Motion"],
    features: ["Interactive Widgets", "7-Day Forecast", "Dynamic Backgrounds", "Geolocation"],
    github: "https://github.com/Adi32397",
    liveDemo: "https://demo.com",
    image: "/weather-os.png",
    problem: "Most weather apps provide static lists of data that fail to engage users or visualize the changing atmosphere effectively.",
    solution: "Created Weather-OS, an immersive, widget-based dashboard that visually reflects current conditions using dynamic animations.",
    architecture: "Built as a single-page application (SPA) using React. Uses Framer Motion for complex transitions and context API for state management.",
    challenges: "Handling rapid asynchronous data fetching from multiple weather endpoints without hitting API rate limits or causing UI stutter.",
    lessons: "Deepened expertise in React performance optimization, API request caching, and complex CSS/Framer motion animations."
  },
  {
    id: 3,
    title: "Sarangi Project",
    description: "A comprehensive web application designed for consultancy and advisory services.",
    techStack: ["JavaScript", "Node.js", "Express", "MySQL", "AI Integration"],
    features: ["Integrated AI Chatbot (Sara)", "Admin/User Dashboards", "Secure Auth", "Data Management"],
    github: "https://github.com/Adi32397",
    liveDemo: "https://demo.com",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    problem: "Consultancy services needed a modern portal for client interaction and AI assistance.",
    solution: "Developed a full-stack application featuring interactive dashboards and an AI chatbot.",
    architecture: "Responsive frontend powered by a robust Node.js and MySQL backend.",
    challenges: "Integrating AI chatbot capabilities seamlessly into the user dashboard.",
    lessons: "Mastered full-stack data flow and API integrations for AI tools."
  },
  {
    id: 4,
    title: "Accomodo",
    description: "A comprehensive accommodation booking platform for modern travelers.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    features: ["Property Listings", "Booking System", "User Profiles", "Review System"],
    github: "https://github.com/Adi32397",
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
    title: "Deloitte Australia – Data Analytics Job Simulation Certificate",
    issuer: "Deloitte Australia (via Forage)",
    date: "2026",
    skills: "Data Analysis, Data Analytics, Visualization"
  },
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
