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
  formforge,
  ems,
  autodeployx,
  foodie,
  guptasales,
  mailcraft,
  mockstream,
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
    name: "Auto Deploy X",
    description:
      "An intelligent, zero-config CI/CD deployment engine built exclusively for MERN monorepos. It autonomously audits architectures, generates Vercel serverless bridges on-the-fly, and safely orchestrates edge deployments via isolated shadow branches.",
    tags: [
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "white-text-gradient" },
      { name: "Vercel API", color: "blue-text-gradient" },
      { name: "WebSockets", color: "pink-text-gradient" },
      { name: "React.js", color: "orange-text-gradient" },
    ],
    image: autodeployx,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://devops-panel-frontend.vercel.app/",
  },
  {
    name: "FormForge – Headless Form Backend",
    description:
      "A developer-first headless form backend that decouples frontend submission lifecycles. Automates field capture, invisible honeypot spam protection, and real-time alerts without infrastructure maintenance.",
    tags: [
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Express.js", color: "white-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "purple-text-gradient" },
      { name: "Firebase-Auth", color: "yellow-text-gradient" },
      { name: "Vercel", color: "blue-text-gradient" },
      { name: "Render", color: "pink-text-gradient" },
    ],
    image: formforge,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://form-forge-umber.vercel.app/",
  },
  {
    name: "MailCraft – Bulk Email Automation Engine",
    description:
      "A highly-scalable, production-grade bulk email automation platform designed to send millions of personalized emails without server crashes. Features robust queueing with Redis/BullMQ, failover SMTP routing, real-time analytics dashboard, campaign management with CSV/JSON uploads, and intelligent scheduling. Built with a minimal premium dark aesthetic inspired by developer-centric tools.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "Express.js", color: "white-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Redis", color: "orange-text-gradient" },
      { name: "BullMQ", color: "yellow-text-gradient" },
      { name: "AWS SES", color: "cyan-text-gradient" },
      { name: "Tailwind CSS", color: "purple-text-gradient" },
    ],
    image: mailcraft,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://mail-craft-pied.vercel.app/",
  },
  {
    name: "MockStream – Webhook Pipeline",
    description:
      "A real-time webhook inspection pipeline that captures, inspects, and replays HTTP payloads. Features persistent public endpoints, non-blocking ingestion (≤100ms ACK), and instant Redis Pub/Sub WebSocket streaming, backed by PostgreSQL JSONB transactional persistence for one-click request replays.",
    tags: [
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "Fastify", color: "white-text-gradient" },
      { name: "WebSockets", color: "blue-text-gradient" },
      { name: "Redis", color: "orange-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Tailwind CSS", color: "purple-text-gradient" },
    ],
    image: mockstream,
    source_code_link: "https://github.com/notgarv01/MockStream",
    live_website_link: "https://mock-stream-ruddy.vercel.app/",
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
    image: foodie,
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
    image: guptasales,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://gupta-sales-frontend.vercel.app/",
  },
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
    image: ems,
    source_code_link: "https://github.com/notgarv01/Garv_GUPTA_PORTFOLIO",
    live_website_link: "https://emsmine.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
