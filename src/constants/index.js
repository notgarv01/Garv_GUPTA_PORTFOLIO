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
    name: "Infrastructure Tool",
    description:
      "An automated configuration tool built with React and Node.js designed to orchestrate platform deployment lifecycles smoothly.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/notgarv01",
    live_website_link: "https://github.com/notgarv01",
  },
  {
    name: "Media/Video Feed",
    description:
      "A high-performance media platform featuring dark themes, fluid video rendering, and scalable MongoDB schema design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/notgarv01",
    live_website_link: "https://github.com/notgarv01",
  },
  {
    name: "E-Commerce Storefront",
    description:
      "An editorial minimalist storefront highlighting robust state handling via React APIs and highly optimized local asset rendering.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/notgarv01",
    live_website_link: "https://github.com/notgarv01",
  },
];

export { services, technologies, experiences, testimonials, projects };
