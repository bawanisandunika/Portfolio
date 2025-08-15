export const portfolioData = {
  personal: {
    name: "Bawani Sandunika",
    title: "Full Stack Developer",
    tagline: "Crafting digital experiences with modern web technologies",
    email: "projects0802@gmail.com",
    phone: "+94 71 759 7 222",
    location: "Matara, Sri Lanka",
    avatar: "src/assets/images/image.jpg",
  },
  
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    portfolio: "https://portfolio.com",
  },

  about: {
    description: "Passionate full-stack developer with 2+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies, with a keen eye for user experience and performance optimization.",
    highlights: [
      "2+ years of professional full-stack development experience",
      "Expert in modern JavaScript frameworks (React, Next.js, Node.js)",
      "Specialized in cross-platform mobile development (React Native, Flutter)",
      "Proficient in responsive web design and PWA development",
      "Strong background in cloud architecture (AWS, Azure) and DevOps (CI/CD, Docker)",
      "Experience implementing AI/ML solutions (TensorFlow, PyTorch)",
      "Skilled in integrating LLMs and generative AI into applications",
      "Passionate about clean code, performance optimization, and best practices",
      "Proven track record in building scalable microservices architectures",
    ],
  },

  skills: {
    frontend: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Vue.js", level: 80 },
      { name: "React Native", level: 88 },
      { name: "Flutter", level: 75 },
      { name: "Redux", level: 85 },
      { name: "Svelte", level: 70 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "GraphQL", level: 78 },
      { name: "Django", level: 75 },
      { name: "FastAPI", level: 80 },
      { name: "Firebase", level: 83 }
    ],
    ai_ml: [
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 70 },
      { name: "OpenCV", level: 65 },
      { name: "NLP", level: 68 },
      { name: "LLM Integration", level: 72 }
    ],
    devops: [
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 75 },
      { name: "AWS", level: 80 },
      { name: "Azure", level: 70 },
      { name: "CI/CD Pipelines", level: 82 }
    ],
    tools: [
      { name: "AWS", level: 80 },
      { name: "Git", level: 95 },
      { name: "Figma", level: 75 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "ATS Tracker",
      description: "Advanced Applicant Tracking System with AI-powered resume screening and candidate matching algorithms. Integrated with LinkedIn API for profile enrichment.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Movie Web App",
      description: "AI-driven movie recommendation platform with personalized suggestions based on viewing history and NLP-powered sentiment analysis of reviews.",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "Python", "PyTorch", "GraphQL", "Docker"],
      github: "https://github.com/bawanisandunika/Movie-Web-App",
      demo: "https://movie-web-app-git-main-bawanis-projects.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "NewsFlash Mobile App",
      description: "Cross-platform news aggregator with AI-curated content, real-time notifications, and offline reading capabilities using React Native and Firebase.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Firebase", "Redux", "TensorFlow Lite"],
      github: "https://github.com/bawanisandunika/NewsFlash",
      featured: false
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Interactive portfolio with 3D animations, performance monitoring, and dark/light mode using modern web technologies.",
      image: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/bawanisandunika/Portfolio-Website",
      demo: "https://portfolio-website-bawanisandunika.vercel.app/",
      featured: false
    }
  ],

  experience: [
    {
      company: "Uvexzon Pvt Ltd.",
      position: "Intern Mobile Developer",
      duration: "2024 - 2025",
      description: "Developed React Native applications with Firebase integration, reducing development time by 30% through reusable component libraries. Implemented CI/CD pipelines using GitHub Actions."
    },
    {
      company: "Senova Global",
      position: "Freelancer",
      duration: "2025 - 2025",
      description: "Built Next.js applications with TypeScript and GraphQL, achieving 95+ Lighthouse scores. Integrated AI features using TensorFlow.js for client projects."
    },
    {
      company: "ZephyraTech Solutions",
      position: "Project Manager",
      duration: "2024-2024",
      description: "Led cross-functional teams in developing full-stack applications using MERN stack. Implemented Agile methodologies."
    }
  ]
};

export type PortfolioData = typeof portfolioData;