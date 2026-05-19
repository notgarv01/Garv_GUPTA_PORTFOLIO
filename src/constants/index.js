import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  html,
  css,
  threejs,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: backend,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Junior Full-Stack Developer",
    company_name: "Orielix",
    icon: freelance,
    iconBg: "#09090b",
    date: "April 2025 – Present",
    points: [
      "Architected and maintained responsive frontend views using React and Tailwind CSS to match precise UI layouts.",
      "Engineered performant backend APIs and database schemas utilizing Node.js, Express, and MongoDB to support scalable platform functionality.",
      "Collaborated within cross-functional teams to integrate clean state management and optimize application load performance.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Garv's attention to detail and clean code architecture made collaborating on our platform seamless and efficient.",
    name: "Alex Chen",
    designation: "Tech Lead",
    company: "Orielix",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "Working with Garv was a great experience — he delivers pixel-perfect UIs and handles backend logic with equal expertise.",
    name: "Sarah Johnson",
    designation: "Product Manager",
    company: "Orielix",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    testimonial:
      "Garv's MERN stack expertise helped us ship our e-commerce platform faster than expected. Highly recommended!",
    name: "Michael Lee",
    designation: "CEO",
    company: "TechVenture",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const projects = [
  {
    name: "Employee Management System (EMS)",
    description:
      "A robust enterprise administration tool built to streamline workforce organization. Enables real-time tracking of staff directories, role allocations, salary structures, and department performance metrics through an intuitive dashboard layout.",
    tags: [
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "white-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://emsmine.vercel.app/",
  },
  {
    name: "DevOps Deployment Panel",
    description:
      "A high-performance infrastructure orchestration panel designed to simplify the application deployment lifecycle. Mimics automated hosting workflows similar to Vercel or Railway, allowing streamlined project management and hosting.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
      { name: "html5", color: "white-text-gradient" },
      { name: "css3", color: "green-text-gradient" },
    ],
    image: falverra,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
  },
  {
    name: "Foodie - Video Discovery",
    description:
      "A premium, video-first food discovery application built on a unified MERN architecture. Features a fixed, high-contrast dark theme layout with fluid visual reels integrated into interactive partner profiles.",
    tags: [
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "white-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://foodie-2-frontend.vercel.app/",
  },
  {
    name: "Gupta Sales",
    description:
      "An editorial heritage e-commerce digital storefront optimized for high-end product collections. Engineered for a minimal premium aesthetic using crisp local asset rendering layouts and clean state tracking.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "white-text-gradient" },
      { name: "node.js", color: "pink-text-gradient" },
      { name: "tailwind", color: "orange-text-gradient" },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://gupta-sales-frontend.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
