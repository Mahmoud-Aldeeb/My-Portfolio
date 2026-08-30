import user_image from "./user1.webp";
import code_icon from "./code-icon.webp";
import code_icon_dark from "./code-icon-dark.webp";
import edu_icon from "./edu-icon.webp";
import edu_icon_dark from "./edu-icon-dark.webp";
import project_icon from "./project-icon.webp";
import project_icon_dark from "./project-icon-dark.webp";
import vscode from "./vscode.webp";
import firebase from "./npm.webp";
import figma from "./figma.webp";
import git from "./git.webp";
import mongodb from "./github.webp";
import right_arrow_white from "./right-arrow-white.webp";
import white_logo from "./white-logo.webp";
import logo_dark from "./black-logo.webp";
import mail_icon from "./mail_icon.webp";
import mail_icon_dark from "./mail_icon_dark.webp";
import profile_img from "./user_icon.webp";
import download_icon from "./download-icon.webp";
import hand_icon from "./hand-icon.webp";
import header_bg_color from "./header-bg-color.webp";
import moon_icon from "./moon_icon.webp";
import sun_icon from "./sun_icon.webp";
import menu_black from "./menu-black.webp";
import menu_white from "./menu-white.webp";
import close_black from "./close-black.webp";
import close_white from "./close-white.webp";
import res_icon from "./responsive-app.webp";
import atom_icon from "./atom.webp";
import integration_icon from "./integration.webp";
import uptime_icon from "./uptime.webp";
import right_arrow from "./right-arrow.webp";
import send_icon from "./send-icon.webp";
import right_arrow_bold from "./right-arrow-bold.webp";
import right_arrow_bold_dark from "./right-arrow-bold-dark.webp";
import download_icon_dark from "./download-icon-dark.webp";
import github_dark from "./github-dark.webp";
import send_icon_dark from "./send-icon-dark.webp";

// project image

import employee_management from "./projects/employee.png";
import hotel_booking from "./projects/hotel.png";
import delivery_app from "./projects/delivery.png";
import prescription from "./projects/pos.png";
import blog from "./projects/Blog.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  white_logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  download_icon_dark,
  github_dark,
  send_icon_dark,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  menu_black,
  menu_white,
  close_black,
  close_white,
  res_icon,
  atom_icon,
  integration_icon,
  uptime_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  employee_management,
  hotel_booking,
  delivery_app,
  prescription,
  blog,
};

export const workData = [
  {
    title: "Employee Management System",
    description:
      "Full Stack MERN platform featuring employee records management, role-based access control (RBAC), attendance tracking, and automated payroll reporting.",
    // bgImage: "/react5.webp",
    bgImage: employee_management,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
    ],
    liveUrl: "https://github.com/Mahmoud-Aldeeb",
    githubUrl: "https://github.com/Mahmoud-Aldeeb",
    date: "2024",
  },
  {
    title: "Hotel Booking Platform",
    description:
      "Full Stack MERN application for hotel reservations, featuring room availability, booking management, payment integration, and user authentication.",
    bgImage: hotel_booking,
    technologies: [
      "React",
      "Tailwind CSS",
      "Clerk",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    liveUrl: "https://hotel-booking-frontend-two-rho.vercel.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/hotel-booking",
    date: "2026",
  },
  {
    title: "E-commerce & Delivery Service Web Application",
    description:
      "Full Stack application for online shopping and delivery services, featuring product listings, shopping cart, order tracking, and payment processing.",
    bgImage: delivery_app,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Prisma",
      "Inngest",
      "Express",
      "PostgreSQL",
    ],
    liveUrl: "https://delivery-app-nine-tau.vercel.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Delivery-app",
    date: "2026",
  },
  {
    title: "Medical Appointment Booking Platform",
    description:
      "Full Stack MERN application for scheduling medical appointments, featuring doctor profiles, appointment management, patient records, and secure authentication.",
    bgImage: prescription,
    technologies: [
      "React",
      "Tailwind CSS",
      "Mongoose",
      "Express",
      "Cloudinary",
    ],
    liveUrl: "https://prescription-user.vercel.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/prescription-Backend",
    date: "2025",
  },
  {
    title: "Blogging Platform with User Authentication",
    description:
      "Full Stack MERN application for creating and managing blog posts, featuring user authentication, content management, and responsive design.",
    bgImage: blog,
    technologies: ["React", "Redux Toolkit", "Express", "MongoDB", "Helmet"],
    liveUrl: "https://blog-frontend-psi-beryl.vercel.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Blog-Backend",
    date: "2025",
  },
];

export const serviceData = [
  {
    icon: assets.res_icon,
    title: "Full Stack Web Development",
    description:
      "Building end-to-end web applications with React & Next.js on the frontend, and Node.js, Express or NestJS on the backend — fully integrated and production-ready.",
    link: "",
  },
  {
    icon: assets.atom_icon,
    title: "REST API & NestJS Development",
    description:
      "Designing and building scalable RESTful APIs using Node.js, Express, and NestJS with clean architecture, DTOs, guards, and modular structure.",
    link: "",
  },
  {
    icon: assets.integration_icon,
    title: "Database Design (MongoDB, TypeORM & Prisma)",
    description:
      "Modeling and managing databases using MongoDB with Mongoose, PostgreSQL with TypeORM or Prisma — including migrations, relations, and query optimization.",
    link: "",
  },
  {
    icon: assets.uptime_icon,
    title: "Performance & Code Quality",
    description:
      "Improving load speed and maintainability using lazy loading, code splitting, TypeScript, and backend best practices for clean scalable code.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages & Frameworks",
    description:
      "React, Next.js, Node.js, Express, NestJS, MongoDB, TypeORM, Prisma, Tailwind CSS, TypeScript",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  { icon: assets.vscode, iconDark: assets.vscode },
  { icon: assets.firebase, iconDark: assets.firebase },
  { icon: assets.figma, iconDark: assets.figma },
  { icon: assets.git, iconDark: assets.git },
  { icon: assets.mongodb, iconDark: assets.github_dark },
];

export const portfolioData = [
  {
    id: 1,
    title: "React E-commerce Search",
    description:
      "Modern e-commerce built with React, featuring real-time analytics and responsive design.",
    bgImage: assets.react1,
    technologies: ["React", "CSS3", "Responsive Design", "react-router-dom"],
    category: "web",
    date: "Jan 2024",
    liveUrl: "https://fanciful-tarsier-64e8c2.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Educational/tree/main",
    featured: true,
  },
  {
    id: 2,
    title: "Next.js Portfolio Website",
    description:
      "Personal portfolio website built with Next.js 15, featuring SSR, optimized images and modern animations.",
    bgImage: assets.next2,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "GSAP Animation",
      "Responsive Design",
      "Netlify",
    ],
    category: "web",
    date: "Sep 2025",
    liveUrl: "/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Educational/tree/main",
    featured: true,
  },
  {
    id: 3,
    title: "Memory-Game  ",
    description:
      "Memory game for matching icon pairs, tracking wrong tries, and improving scores.",
    bgImage: assets.js4,
    technologies: ["JavaScript", "HTML5", "CSS Modules", "Local Storage"],
    category: "web",
    date: "Nov 2023",
    liveUrl: "https://bucolic-hamster-c51278.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Memory-Game",
    featured: true,
  },
  {
    id: 4,
    title: "Task Management App",
    description:
      "Task Manager built with React JS, featuring edit, delete, toggle completion status, and local storage usage.",
    bgImage: assets.react6,
    technologies: ["React", "UseContext", "Material Ui", "Local Storage"],
    category: "web",
    date: "Oct 2023",
    liveUrl: "https://cheery-douhua-63fc09.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/To-Do-List/tree/main",
    featured: false,
  },
  {
    id: 5,
    title: "Shape Playground & Mini Chess Game",
    description:
      "Interactive shape playground with drag-and-drop functionality and a mini chess game using jQuery UI.",
    bgImage: assets.jQuery1,
    technologies: ["jQuery", "Bootstrap", "GSAP Animation", "SVG.js"],
    category: "web",
    date: "Sep 2023",
    liveUrl: "https://aesthetic-babka-b1cea3.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/shape-chess-playground",
    featured: true,
  },
  {
    id: 6,
    title: "Age Calculator",
    description:
      "Simple age calculator that computes age based on user-inputted birth date.",
    bgImage: assets.js1,
    technologies: ["JavaScript", "HTML5", "CSS3", "Date API"],
    category: "web",
    date: "Aug 2023",
    liveUrl: "https://spectacular-toffee-fb2798.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/age-calculator",
    featured: false,
  },
  {
    id: 7,
    title: "Move App",
    description:
      "Move Search App built with React, featuring real-time search, responsive design",
    bgImage: assets.react2,
    technologies: ["React", "CSS3", "API", "Responsive Design"],
    category: "web",
    date: "Jul 2024",
    liveUrl: "https://velvety-fox-105d48.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Move-App",
    featured: true,
  },
  {
    id: 8,
    title: " Weather Now",
    description:
      "Weather Now is a sleek, responsive weather app featuring city search, current conditions, hourly forecasts, and a 7-day outlook in a modern dark-themed interface, with support for Metric and Imperial units.",
    bgImage: assets.next1,
    technologies: [
      "React",
      "Tailwind CSS",
      "WeatherAPI.com",
      "JavaScript (ES6+)",
      "Responsive Design",
    ],
    category: "web",
    date: "sep 2025",
    liveUrl: "https://sunny-kitten-7b9389.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Weather_Now",
    featured: false,
  },
  {
    id: 9,
    title: "Hangman Game",
    description:
      "Hangman Game is an engaging web-based word-guessing game where players attempt to uncover a hidden word by suggesting letters, with a limited number of incorrect guesses before the hangman is complete, offering a fun and challenging experience.",
    bgImage: assets.js5,
    technologies: ["JavaScript", "CSS Modules", "HTML5"],
    category: "web",
    date: "May 2023",
    liveUrl: "https://dazzling-crisp-10c9ff.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Hangman",
    featured: false,
  },
  {
    id: 10,
    title: "Real Estate App",
    description:
      "Real Estate App is a modern property listing platform built with React, featuring dynamic search",
    bgImage: assets.react3,
    technologies: [
      "React",
      "React Context",
      "Tailwind CSS",
      "responsive design",
      "React Router",
    ],
    category: "web",
    date: "Apr 2024",
    liveUrl: "https://chipper-dieffenbachia-48ab08.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Real-Estate-",
    featured: true,
  },
  {
    id: 11,
    title: "Modern Multi-Step Registration Form",
    description:
      "Multi-step registration form with validation, progress bar, and responsive design.",
    bgImage: assets.jQuery4,
    technologies: [
      "jQuery",
      "Bootstrap 5",
      "JavaScript (ES6+)",
      "Responsive Design",
      "(Flexbox & CSS Grid)",
    ],
    category: "web",
    date: "Mar 2025",
    liveUrl: "https://benevolent-axolotl-e645cb.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/multi-step-form.",
    featured: false,
  },
  {
    id: 12,
    title: "E-Commerce Website ",
    description:
      "E-Commerce Website is a user-friendly online shopping platform where users can browse products, add items to a cart, and calculate the total price seamlessly, offering a convenient and efficient shopping experience.",
    bgImage: assets.react5,
    technologies: [
      "React",
      "React Redux",
      "CSS3",
      "React Router",
      "Custom Hooks",
    ],
    category: "web",
    date: "Feb 2024",
    liveUrl: "https://melodious-platypus-529767.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/E-commerce",
    featured: true,
  },
  {
    id: 13,
    title: "Portfolio-Website",
    description:
      "Portfolio Website is a professionally designed online showcase highlighting a developer's work, featuring a collection of projects, skills, and contact information, tailored to present their expertise and achievements effectively.",
    bgImage: assets.react4,
    technologies: [
      "React",
      "Animations",
      "Material UI",
      "Custom Hooks",
      "React Router",
    ],
    category: "web",
    date: "Feb 2025",
    liveUrl: "https://luminous-lily-30cd74.netlify.app/",
    githubUrl: "https://github.com/Mahmoud-Aldeeb/Portfolio-Website",
    featured: true,
  },
];
