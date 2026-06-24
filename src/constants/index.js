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
    title: "Full-Stack Development",
    icon: web,
  },
  {
    title: "MERN Architecture",
    icon: mobile,
  },
  {
    title: "Interface Optimization",
    icon: backend,
  },
  {
    title: "Systems Automation",
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
      "Architect and maintain high-fidelity user interfaces utilizing React.js and Tailwind CSS, focusing on strict responsive constraints and fluid execution paths.",
      "Develop and deploy robust backend APIs and document schemas leveraging Node.js, Express, and MongoDB to optimize server-side transaction performance.",
      "Collaborate in cross-functional lifecycle reviews to streamline system data streams, reduce content layout shifts, and enhance component caching.",
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
      "An enterprise workforce management platform engineered to automate corporate data tracking. Facilitates seamless real-time orchestration of personnel directories, structural role hierarchies, salary frameworks, and dynamic administrative metrics.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "white-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://emsmine.vercel.app/",
  },
  {
    name: "DevOps Deployment Panel",
    description:
      "A minimalist infrastructure management engine built to decouple and simplify cloud resource deployment lifecycles. Emulates automated cloud-hosting workflows to streamline continuous configuration pipelines and local testing structures.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
      { name: "HTML5", color: "white-text-gradient" },
      { name: "CSS3", color: "green-text-gradient" },
    ],
    image: falverra,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://devops-panel-frontend.vercel.app/",
  },
  {
    name: "Foodie – Video Discovery Network",
    description:
      "A premium, video-first multimedia interface driven by a cohesive full-stack engine. Incorporates a unified high-contrast dark palette, local asset streaming configurations, and liquid visual feeds mapped to partner profile objects.",
    tags: [
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Express.js", color: "white-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://foodie-2-frontend.vercel.app/",
  },
  {
    name: "Gupta Sales Storefront",
    description:
      "A high-end editorial digital marketplace optimized for luxury heritage lines. Tailored with a premium, low-overhead UI layout utilizing lightweight React component hooks, granular state management, and optimized asset delivery.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Context API", color: "pink-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "orange-text-gradient" },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://gupta-sales-frontend.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
