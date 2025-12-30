// import images
import Hero_person from "./assets/images/Hero/person.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import project4 from "./assets/images/Projects/img4.png";


import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";



// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin, BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF, FaYoutube, FaSkype, FaTelegramPlane } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Scalable MERN applications\nbuilt for real business growth.",
    subtitle:
      "Senior MERN Stack Developer with 4+ years of experience building secure, high-performance web applications using React, Node.js, MongoDB, and SQL (Sequelize). I help startups turn ideas into production-ready products.",
    firstName: "Muhammad Talha",
    LastName: "Riaz",
    btnText: "Let’s Build Yours",
    image: Hero_person,
    hero_content: [
      {
        count: "4+",
        text: "Years of Professional MERN Stack Experience",
      },
      {
        count: "30+",
        text: "Production-Ready Projects Delivered",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY CORE SKILLS",
    skills_content: [
      {
        id: "mern-stack",
        name: "MERN Stack",
        para: "End-to-end MERN stack application development",
        logo: reactjs,
        description:
          "I specialize in building complete MERN stack applications with clean architecture, scalable APIs, and optimized databases for long-term growth.",
        features: [
          "Scalable REST API development",
          "Modern React architecture",
          "Secure authentication & authorization",
          "MongoDB & SQL database optimization",
          "Production-ready folder structure",
          "Performance tuning",
        ],
        projects: [
          "SaaS platforms",
          "Admin dashboards",
          "Business automation systems",
        ],
        experience: "4+ years",
        proficiency: 95,
      },

      {
        id: "reactjs",
        name: "React.js",
        para: "Advanced frontend development with React.js",
        logo: reactjs,
        description:
          "I build fast, scalable, and maintainable user interfaces using modern React patterns, hooks, and state management solutions.",
        features: [
          "Functional components & hooks",
          "Context API & Redux Toolkit",
          "Reusable UI components",
          "API integration",
          "Performance optimization",
          "Responsive design",
        ],
        projects: [
          "Admin panels",
          "SaaS dashboards",
          "Data-driven web apps",
        ],
        experience: "4+ years",
        proficiency: 94,
      },

      {
        id: "nodejs",
        name: "Node.js & Express",
        para: "Backend development with Node.js & Express",
        logo: reactjs,
        description:
          "I design secure and scalable backend systems using Node.js and Express with a focus on clean code and maintainability.",
        features: [
          "RESTful API development",
          "JWT & role-based access control",
          "Middleware architecture",
          "Error handling & logging",
          "API security best practices",
        ],
        projects: [
          "Authentication systems",
          "Multi-tenant SaaS backends",
        ],
        experience: "4+ years",
        proficiency: 93,
      },

      {
        id: "mongodb",
        name: "MongoDB",
        para: "NoSQL database design & optimization",
        logo: ps,
        description:
          "I design optimized MongoDB schemas and aggregation pipelines for high-performance applications.",
        features: [
          "Schema & index optimization",
          "Aggregation pipelines",
          "Performance tuning",
          "Data modeling",
          "Transactions",
        ],
        projects: [
          "Analytics platforms",
          "Large-scale SaaS databases",
        ],
        experience: "4+ years",
        proficiency: 90,
      },

      {
        id: "sequelize",
        name: "Sequelize (SQL Databases)",
        para: "Relational database management using Sequelize ORM",
        logo: ps,
        description:
          "I use Sequelize ORM with PostgreSQL and MySQL to build reliable SQL-based systems with proper migrations, relationships, and transactions.",
        features: [
          "PostgreSQL & MySQL schema design",
          "Sequelize models & associations",
          "Migrations & seeders",
          "Transactions & rollbacks",
          "Multi-tenant database design",
        ],
        projects: [
          "Subscription-based SaaS systems",
          "Role-based admin platforms",
          "Billing & payment systems",
        ],
        experience: "3+ years",
        proficiency: 90,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        id: "web-development",
        title: "MERN Stack Development",
        para:
          "Full-stack MERN development with MongoDB & SQL databases",
        logo: services_logo1,
        description:
          "I build scalable MERN stack applications using MongoDB and SQL (PostgreSQL/MySQL via Sequelize) with a strong focus on performance and security.",
        features: [
          "Full-stack MERN development",
          "REST API & backend architecture",
          "MongoDB & SQL database design",
          "Sequelize migrations & relations",
          "Authentication & authorization",
          "Deployment & optimization",
        ],
        technologies: [
          "React.js",
          "Node.js & Express",
          "MongoDB",
          "PostgreSQL & MySQL",
          "Sequelize ORM",
          "JWT Authentication",
        ],
        projects: [
          "SaaS platforms",
          "Admin dashboards",
          "Business management systems",
        ],
        pricing: "Starting from $800",
        deliveryTime: "3–6 weeks",
        category: "Development",
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: Hero_person,
    project_content: [
      {
        id: "ai-chef-app",
        title: "AI Chef Mobile App",
        image: project1,
        category: "Mobile App",
        type: "React Native",
        description: "An innovative mobile application that uses artificial intelligence to suggest recipes based on available ingredients, dietary preferences, and cooking skills. The app features smart meal planning, nutritional analysis, and step-by-step cooking guidance.",
        overview: "AI Chef revolutionizes home cooking by combining artificial intelligence with culinary expertise. Users can simply input their available ingredients, and the app suggests personalized recipes, creates shopping lists, and provides interactive cooking instructions.",
        features: [
          "AI-powered recipe recommendations",
          "Ingredient recognition through camera",
          "Smart meal planning and scheduling",
          "Nutritional analysis and dietary tracking",
          "Step-by-step cooking instructions with timers",
          "Social sharing and recipe reviews",
          "Offline recipe storage",
          "Multi-language support"
        ],
        technologies: [
          "React Native",
          "Firebase Firestore",
          "Google Cloud AI",
          "Node.js API",
          "Redux Toolkit",
          "React Navigation",
          "Camera & Image Processing",
          "Push Notifications"
        ],
        challenges: [
          "Implementing accurate ingredient recognition using machine learning",
          "Creating an intuitive user interface for complex recipe data",
          "Optimizing app performance for large recipe databases",
          "Integrating multiple APIs for nutritional data"
        ],
        results: [
          "95% user satisfaction rating",
          "50K+ downloads in first 3 months",
          "Featured in App Store's 'Apps We Love'",
          "4.8-star average rating"
        ],
        duration: "4 months",
        client: "Food Tech Startup",
        status: "Live in Production",
        demoLink: "#",
        githubLink: "#"
      },
      {
        id: "ai-fitness-app",
        title: "AI Fitness Mobile App",
        image: project2,
        category: "Mobile App",
        type: "React Native",
        description: "A comprehensive fitness application powered by AI that creates personalized workout plans, tracks progress, and provides real-time form corrections. The app adapts to user performance and goals for optimal results.",
        overview: "AI Fitness transforms personal training by bringing intelligent coaching to your smartphone. The app analyzes user data, fitness goals, and performance metrics to create dynamic workout plans that evolve with the user's progress.",
        features: [
          "AI-generated personalized workout plans",
          "Real-time exercise form analysis",
          "Progress tracking with detailed analytics",
          "Adaptive difficulty based on performance",
          "Virtual personal trainer with voice guidance",
          "Social challenges and community features",
          "Integration with wearable devices",
          "Nutrition and meal planning integration"
        ],
        technologies: [
          "React Native",
          "TensorFlow Lite",
          "Firebase ML Kit",
          "HealthKit/Google Fit",
          "WebRTC for video analysis",
          "Chart.js for analytics",
          "Async Storage",
          "Background Tasks"
        ],
        challenges: [
          "Real-time pose estimation and form correction",
          "Optimizing AI models for mobile devices",
          "Creating smooth video playback and analysis",
          "Integrating with multiple fitness device APIs"
        ],
        results: [
          "40% improvement in user workout consistency",
          "30K+ active monthly users",
          "Reduced average workout planning time by 75%",
          "4.6-star rating with 2K+ reviews"
        ],
        duration: "5 months",
        client: "Fitness Technology Company",
        status: "Live in Production",
        demoLink: "#",
        githubLink: "#"
      },
      {
        id: "ecommerce-marketplace",
        title: "E-commerce Marketplace App",
        image: project3,
        category: "Mobile App",
        type: "React Native",
        description: "A full-featured e-commerce marketplace application connecting buyers and sellers with advanced search, secure payments, real-time chat, and comprehensive seller tools for inventory management.",
        overview: "This marketplace app creates a seamless shopping experience for buyers while providing powerful tools for sellers to manage their online business. Features include multi-vendor support, advanced product search, secure transactions, and integrated logistics.",
        features: [
          "Multi-vendor marketplace platform",
          "Advanced product search and filtering",
          "Secure payment gateway integration",
          "Real-time chat between buyers and sellers",
          "Order tracking with live updates",
          "Seller dashboard with analytics",
          "Product reviews and ratings system",
          "Wishlist and comparison features"
        ],
        technologies: [
          "React Native",
          "Node.js & Express",
          "MongoDB",
          "Stripe Payment API",
          "Socket.io for real-time chat",
          "AWS S3 for media storage",
          "JWT Authentication",
          "Push Notifications"
        ],
        challenges: [
          "Managing complex multi-vendor inventory system",
          "Implementing secure payment processing",
          "Creating real-time order tracking system",
          "Optimizing search performance for large product catalogs"
        ],
        results: [
          "Successfully onboarded 500+ vendors",
          "Processed $2M+ in transactions",
          "25% increase in average order value",
          "98% uptime with scalable architecture"
        ],
        duration: "6 months",
        client: "E-commerce Startup",
        status: "Live in Production",
        demoLink: "#",
        githubLink: "#"
      },
      {
        id: "delivery-tracking-app",
        title: "Smart Delivery Tracking App",
        image: project4,
        category: "Mobile App",
        type: "React Native",
        description: "An intelligent delivery management system that optimizes routes, provides real-time tracking, and enhances customer experience with predictive delivery windows and automated notifications.",
        overview: "This delivery tracking app revolutionizes logistics management by providing end-to-end visibility of the delivery process. It combines GPS tracking, route optimization, and customer communication to create an efficient delivery ecosystem.",
        features: [
          "Real-time GPS tracking and route optimization",
          "Predictive delivery time calculations",
          "Automated customer notifications",
          "Digital proof of delivery with signatures",
          "Driver performance analytics",
          "Customer feedback and rating system",
          "Multi-language support",
          "Offline capability for remote areas"
        ],
        technologies: [
          "React Native",
          "Google Maps API",
          "Firebase Real-time Database",
          "Node.js Backend",
          "Machine Learning for ETA prediction",
          "WebSocket for live tracking",
          "Geolocation Services",
          "Camera API for signatures"
        ],
        challenges: [
          "Accurate ETA prediction using machine learning",
          "Optimizing battery usage for continuous GPS tracking",
          "Handling offline scenarios in remote areas",
          "Creating intuitive driver and customer interfaces"
        ],
        results: [
          "35% reduction in delivery time",
          "90% customer satisfaction with accurate ETAs",
          "50% decrease in customer service calls",
          "Improved driver efficiency by 25%"
        ],
        duration: "4 months",
        client: "Logistics Company",
        status: "Live in Production",
        demoLink: "#",
        githubLink: "#"
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“Working with Talha Riaz in mobile app development was a FANTASTIC experience! His professionalism and thorough documentation made the process seamless. Moreover, his quick responsiveness and proactive communication truly stood out. 😊”",
        img: avatar1,
        name: "Daniel Carter",
      },
      {
        review:
          "“I had a bug, that I could not seem to figure out. Talha Riaz is a very technical guy, when confronted with the bug he showed superb understanding. Delivery was extremely fast, and Im happy with the result. Would Highly Recommend”",
        img: avatar2,
        name: "David William",
      },
      {
        review:
          "“Talha Riaz exceeded all expectations. He was highly responsive, quick with updates, and proactive with valuable suggestions. The app is smooth, user-friendly, and professionally designed. Communication was excellent throughout. I highly recommend Talha Riaz to anyone looking for a skilled and reliable React Native developer.”",
        img: avatar3,
        name: "Michael Reyes",
      },
      {
        review:
          "“He delivered a high-quality app with excellent performance and a clean, modern design. His communication was prompt and professional, and he handled feedback with efficiency and care. I’m very satisfied with the results and would definitely work with him again.”",
        img: avatar4,
        name: "Jonathan Malik",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hero_person,
    image2: Hero_person,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "muhammadtalha1005@gmail.com",
        icon: GrMail,
        link: "mailto:muhammadtalha1005@gmail.com",
        category: "professional"
      },
      {
        text: "WhatsApp",
        icon: BsWhatsapp,
        link: "https://wa.me/923472916962",
        category: "social"
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/muhammad-talha-riaz-23779423b",
        category: "social"
      },
      {
        text: "GitHub",
        icon: BsGithub,
        link: "https://github.com/talhariaz78600",
        category: "social"
      },



    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2026",
  },
};
