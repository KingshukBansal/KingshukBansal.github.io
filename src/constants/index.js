import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  c,
  cpp,
  Bootstrap,
  kubernetes,
  MySQL,
  Python,
  nodejs,
  mongodb,
  git,
  docker,
  quiz,
  library,
  Solesphere,
  githubsvg,
  linkedinsvg,
  twittersvg,
  instagramsvg,
  resumesvg,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FUll Stack Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  // {
  //   title: "Frontend Developer",
  //   icon: backend,
  // },
  {
    title: "Video Editor",
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
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },
  {
    name: "Python",
    icon: Python,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "",
    company_name: "",
    icon: "",
    iconBg: "",
    date: "",
    points: ["", ""],
  },
];

const testimonials = [
  {
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    image: "",
  },
];
const education = [
  {
    name: " Dr Br Ambedkar National Institute Of Technology, Jalandhar, Punjab",
    degree: "Bachelor of Technology (Information Technology) ",
    date: "12/2021 - Present",
    score: "CGPA - 7.62",
  },
  {
    name: " Saint Fateh Singh Convent School, Bathinda, Punjab",
    degree: "Higher Secondary-CBSE Board",
    date: "06/2019 - 07/2021",
    score: "Percentage: 85%",
  },
  {
    name: " Lord Rama Public School, Bathinda, Punjab",
    degree: "Secondary-CBSE Board",
    date: "03/2007 - 06/2019",
    score: "Percentage: 88.6%",
  },
];
const projects = [
  {
    name: "Solesphere",
    description:
      "SoleSphere is a full-stack e-commerce platform integrates various functionalities to cater to both customers and administrators, ensuring efficient management and an enjoyable user experience.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Node js",
        color: "green-text-gradient",
      },
      {
        name: "Express js",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "red-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "blue-text-gradient",
      },
    ],
    image: Solesphere,
    source_code_link: "https://github.com/KingshukBansal/SoleSphere.git",
  },
  {
    name: "Library Management System",
    description:
      "I created a robust library management system for HackMol3.0, including MySQL database management, frontend collaboration, and user-specific publication management for diverse user roles.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "PHP",
        color: "pink-text-gradient",
      },
      {
        name: "MySQL",
        color: "red-text-gradient",
      },
    ],
    image: library,
    source_code_link: "https://github.com/KingshukBansal/Team-Hustlers.git",
  },
  {
    name: "Quiz Application",
    description:
      "I developed a Java-based quiz application with backend functionality, MySQL database management, and result tracking, allowing teachers to create question papers and students to attempt them while providing easy access to student results for teachers.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/KingshukBansal/Quiz_application.git",
  },
];
const achievements = [
  {
    achieve:
      "Solved 250+ problems on GeeksforGeeks with an Overall Coding Score greater than 600+.",
  },
  {
    achieve:
      "Got 98.41 percentile in JEE Mains 2021 and 13090 rank in JEE Advance 2021.",
  },
];
const socials = [
  {
    name: "Linked in",
    Link: "https://www.linkedin.com/in/kingshuk-bansal-8a6b33227/",
    image: linkedinsvg,
  },
  {
    name: "Instagram",
    Link: "https://www.instagram.com/kingshuk_bansal/",
    image: instagramsvg,
  },
  {
    name: "Github",
    Link: "https://github.com/KingshukBansal",
    image: githubsvg,
  },
  {
    name: "Twitter",
    Link: "https://twitter.com/KingshukBansal",
    image: twittersvg,
  },
  {
    name: "Resume",
    Link: "https://drive.google.com/drive/folders/1M2tJbm4Zu1CY7qimPjI-r4SvvyStYBK-?usp=sharing",
    image: resumesvg,
  },
];
export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  education,
  achievements,
  socials,
};
