import { IconType } from "react-icons";
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiInstagram } from "react-icons/tfi";
import { PiGithubLogoFill, PiWhatsappLogoLight } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { RiMailSendLine } from "react-icons/ri";
import {
  SiSitepoint,
  SiJavascript,
  SiTypescript,
  SiJquery,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiPython,
  SiDjango,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiDocker,
  SiGithub,
  SiNpm,
  SiYarn,
  SiJenkins,
  SiAnsible,
  SiKubernetes,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiFigma,
  SiWix,
} from "react-icons/si";
import { AiOutlineConsoleSql, AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaGitAlt, FaUbuntu } from "react-icons/fa";

import cargoflow from "../assets/img/proj/cargoflow.png";
import finito from "../assets/img/proj/finito.png";
import littleLemon from "../assets/img/proj/littleLemon.png";
import portfolio22 from "../assets/img/proj/portfolio23.png";
import angryFish from "../assets/img/proj/angryfish.png";
import thinkBig from "../assets/img/proj/thinkbig.png";
import fahrerzentrale from "../assets/img/proj/fahrezentrale.png";
import pickwings from "../assets/img/proj/pickwings.png";
import helpinghand from "../assets/img/proj/helping.png";
import fastRent from "../assets/img/proj/fastrent.png";
import hulu from "../assets/img/proj/hulu.png";
import monkey from "../assets/img/proj/monkey.png";
import limmastadt from "../assets/img/proj/limmatstadt.png";
import protier from "../assets/img/proj/protier.png";
import bezahlbare from "../assets/img/proj/bezahlbare-Wohnungen.png";
import feinheit from "../assets/img/proj/feinheit.png";
import fcz from "../assets/img/proj/fcz.png";

import udemy from "../assets/img/udemy-logo.png";
import meta from "../assets/img/meta-logo.png";
import freecodecamp from "../assets/img/freecodecamp-logo.png";


interface SocialMedia {
  title: string;
  link: string;
  icon: IconType; // Correct type annotation for the icon property
}

export interface Tech {
  icon: IconType;
  name: string;
  color?: string;
}

interface IskillCards {
  title: string;
  cardColor: string;
  techs: Tech[];
}

export const header = {
  name: "Paulo Ricardo Lopes Reizinho",
  title: "👨‍💻 Web/Software Developer",
};

export const socialMedia: SocialMedia[] = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/pauloreizinho/",
    icon: SlSocialLinkedin,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/paulo_reizinho/",
    icon: TfiInstagram,
  },
  {
    title: "Github",
    link: "https://github.com/lordrichard6",
    icon: PiGithubLogoFill,
  },
  {
    title: "Whatsapp",
    link: "https://wa.link/sru6m7",
    icon: PiWhatsappLogoLight,
  },
];

export const contact = [
  {
    contact: "Zurich,ch",
    icon: IoMdHome,
    link: "https://maps.app.goo.gl/FGzhvvLWBpLTNraD8",
  },
  {
    contact: "+41 078 798 95 33",
    icon: LuPhoneCall,
    link: "tel: +41787989533",
  },
  {
    contact: "paulolopesreizinho@gmail.com",
    icon: RiMailSendLine,
    link: "mailto: paulolopesreizinho@gmail.com",
  },
  {
    contact: "www.pauloreizinho.com",
    icon: SiSitepoint,
    link: "https://www.pauloreizinho.com/",
  },
];

export const degrees = {
  title: "Managment and Administration",
  school: "IEFP Portugal",
  image: "",
  link: "https://drive.google.com/file/d/1GUD5DhtC0MK9tD-ivo-ZVl3N4ub3oqoL/view?usp=drive_link",
  language: "(de)",
  tags: "administration",
  showSkills: true,
  skills: [
    "Mathematics",
    "Social psycology of organizations",
    "Legal principles",
    "Iformation and communication technologies",
    "Health and safety at work",
    "Commercial documentation",
    "Commercial, administrative and labol law",
    "Accounting",
    "Administration and management of human resources",
    "Procurement and inventory management",
    "Technical and administrative practices",
    "Organization and business management",
    "Commercial calculation",
    "Portuguese and English, Business level",
    "Customer service",
    "Practice during the training",
  ],
  id: "111",
};

export const certifications = [
  {
    title: "Complete Web Developer: Zero to Mastery",
    school: "Udemy",
    image: udemy,
    link: "https://drive.google.com/file/d/1dN3f5oHThMCSrBg3Gf9tpr3-GOjoNm9h/view?usp=drive_link",
    language: "",
    tags: "Web development",
    showSkills: true,
    skills: [
      "HTML/HTML5",
      "CSS/CSS3",
      "SemanticUI",
      "Responsive Design",
      "Bootstrap 5",
      "Javascript (including ES6/ES7/ES8/ES9/ES10/ES2020/ES2021/ES2022)",
      "Asynchronous JavaScript",
      "HTTP/JSON/AJAX",
      "React + Redux + React Hooks",
      "Git + Github",
      "Command Line",
      "Node.js",
      "Express.js",
      "NPM",
      "RESTful API Design",
      "PostgresSQL",
      "SQL",
      "Scalable Infrastructure",
      "Production and Deployment",
    ],
    id: "1",
  },
  {
    title: "Modern React with Redux",
    school: "Udemy",
    image: udemy,
    link: "https://drive.google.com/file/d/1h9tkGfllT_CmWCn12ERj8sQfSxc6RRXL/view?usp=drive_link",
    language: "",
    tags: "Web development",
    showSkills: true,
    skills: [
      "Fundamentals concepts behind React and Redux including JSX, state, and props",
      "NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax",
    ],
    id: "2",
  },
  {
    title: "Python and Django Full Stack Web Developer Bootcamp",
    school: "Udemy",
    image: udemy,
    link: "https://drive.google.com/file/d/1aIOMu5gfYpheZUG7NqJWFsSVzg8PVe2Z/view?usp=sharing",
    language: "",
    tags: "Web development",
    showSkills: true,
    skills: [
      "HTML5",
      "CSS3",
      "Javascript",
      "jQuery",
      "Bootstrap 3 and 4",
      "Python",
      "Django Basics",
      "Django Templates",
      "Django Forms",
      "Django Admin Customization",
      "ORM",
      "Class Based Views",
      "REST APIs",
      "User Authentication",
    ],
    id: "3",
  },
  {
    title: "Advanced CSS and Sass",
    school: "Udemy",
    image: udemy,
    link: "https://drive.google.com/file/d/1ShcED9SNGDAbeZ-U2TIE71y7csGyRHCF/view?usp=drive_link",
    language: "",
    tags: "Web development",
    showSkills: true,
    skills: [
      "CSS techniques to create stunning designs and effects: clip-path, background-clip, mask-image, background-blend-mode, shape-outside, filter, backdrop-filter, object-fit, transform, column-count, hyphens, perspective, calc() and custom CSS properties",
      "Advanced CSS animations with @keyframes, animation, and transition",
      "Advanced CSS selectors, pseudo-classes, and pseudo-elements required for modern CSS development",
      "CSS architecture: The 7-1 rule, component-based design, the BEM methodology, writing reusable, maintainable, and scalable code",
      "Sass: variables, nesting, partials, imports, mixins, functions, extends",
      "NPM ecosystem",
      "Advanced responsive design workflows: mobile-first vs desktop-first strategies, selecting breakpoints, em vs rem units and feature queries to test for browser support",
      "Responsive images in HTML and CSS for faster pageloads: resolution switching, density switching, art direction",
      "Flexbox layouts: main concepts, introduction to both flex container and flex item-specific properties",
      "CSS Grid layouts: main concepts, CSS grid vs flexbox, and layout techniques applied to a real-world project",
    ],
    id: "4",
  },
  {
    title: "Responsive Web Design",
    school: "FreeCodeCamp",
    image: freecodecamp,
    link: "https://drive.google.com/file/d/1hEbPYSURr-R66Ud1n9K67QDyiBXD_zUR/view?usp=drive_link",
    language: "",
    tags: "Web development",
    showSkills: true,
    skills: [
      "HTML and CSS",
      "Build HTML Forms",
      "CSS Box model, Flexbox, Grid, Animations, Typography, Pseudo selectors",
      "Responsive design principles",
    ],
    id: "5",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    school: "FreeCodeCamp",
    image: freecodecamp,
    link: "https://drive.google.com/file/d/1XgAIcAx6WUaOE1Vf8JE2iaHFxjVmLgkN/view?usp=drive_link",
    language: "",
    tags: "Web/Software development",
    showSkills: true,
    skills: [
      "Fundamental programming concepts in JavaScript",
      "ECMAScript, or ES, is a standardized version of JavaScript",
      "Regular expressions, often shortened to 'regex' or 'regexp'",
      "Debugging is the process of going through your code, finding any issues, and fixing them.",
      "Data Structures",
      "Basic Algorithm Scripting",
      "OOP, or Object Oriented Programming",
      "Functional Programming is another popular approach to software development",
      "Intermediate Algorithm Scripting",
    ],
    id: "6",
  },
  {
    title: "Front-End Development Libraries",
    school: "FreeCodeCamp",
    image: freecodecamp,
    link: "https://drive.google.com/file/d/1ik1BKGL5r95Mq7xtp2uSzl2uWLkSz05U/view?usp=drive_link",
    language: "",
    tags: "Web/Software development",
    showSkills: true,
    skills: [
      "Bootstrap is a front-end framework used to design responsive web pages and applications.",
      "jQuery is one of the most widely used JavaScript libraries in the world.",
      "Sass, or 'Syntactically Awesome StyleSheets', is a language extension of CSS.",
      "React is a popular JavaScript library for building reusable, component-driven user interfaces for web pages or applications",
      "Redux is defined as a 'predictable state container for JavaScript apps' that helps ensure your apps work predictably, and are easier to test.",
      "React and Redux are often mentioned together, and with good reason.",
    ],
    id: "7",
  },
    {
    title: "Meta Front-End Developer",
    school: "Meta",
    image: meta,
    link: "https://drive.google.com/file/d/1GY4oqF6ecoILEnhoa0wgPPC0AJFPA9lK/view?usp=drive_link",
    language: "",
    tags: "",
    showSkills: false,
    skills: ["Introduction to Front-End Development.","Programming with JavaScript.","Version Control.","HTML and CSS in depth.", "React Basics", "Advanced React", "Principles of UX/UI Design","Front-End Developer Capstone","Coding Interview Preparation"],
    id: "8",
  },
  // {
  //   title: "HTML and CSS in depth",
  //   school: "Meta",
  //   image: meta,
  //   link: "https://drive.google.com/file/d/1H2wRbHLx8PX7wi-ghXhOnwcwd7upUSWz/view?usp=drive_link",
  //   language: "",
  //   tags: "",
  //   showSkills: false,
  //   skills: ["Create a simple form with a responsive layout using HTML5 and CSS.","Create a responsive layout using CSS.","Create a UI using Bootstrap.","Implement debugging tools."],
  //   id: "8",
  // },
  // {
  //   title: "Programming with JavaScript",
  //   school: "Meta",
  //   image: meta,
  //   link: "https://drive.google.com/file/d/1m7OG5hxdCgCptSXPAq6GGS0_y3iLdJo8/view?usp=drive_link",
  //   language: "",
  //   tags: "",
  //   showSkills: false,
  //   skills: ["Creating simple JavaScript codes.","Creating and manipulating objects and arrays.","Writing unit tests using Jest."],
  //   id: "9",
  // },
  // {
  //   title: "Version Control",
  //   school: "Meta",
  //   image: meta,
  //   link: "https://drive.google.com/file/d/1E3OHxAzTfvjPv1nmz4Th6Xv02VIeEtZt/view?usp=drive_link",
  //   language: "",
  //   tags: "",
  //   showSkills: false,
  //   skills: ["Implement Version Control systems.","Navigate and configure using the command line.","Use a GitHub repository. Create a GitHub repository.","Manage code revisions"],
  //   id: "10",
  // },
  // {
  //   title: "React Basics",
  //   school: "Meta",
  //   image: meta,
  //   link: "https://drive.google.com/file/d/1siLgyyJVqpWKMLIBsPLrq53gHLxE7atZ/view?usp=drive_link",
  //   language: "",
  //   tags: "",
  //   showSkills: false,
  //   skills: ["Use reusable components to render views where data changes over time.","Organize React projects to create more scalable and maintainable websites and apps.","Use props to pass data between components. Create dynamic and interactive web pages and apps.","Use forms to allow users to interact with the app. Build an application in React."],
  //   id: "11",
  // },
  // {
  //   title: "Advanced React",
  //   school: "Meta",
  //   image: meta,
  //   link: "https://drive.google.com/file/d/1AB-TRzdNsHarp-Nsz1hKmmli4VpMYAyF/view?usp=drive_link",
  //   language: "",
  //   tags: "",
  //   showSkills: false,
  //   skills: ["Create robust and reusable components with advanced techniques and learn different patterns to reuse common behavior.","Interact with a remote server and fetch and post data via an API.","Seamlessly test React applications with React Testing Library.","Integrate commonly used React libraries to streamline your application development."],
  //   id: "12",
  // },
  // {
  //   title: "Principles of UX/UI Design",
  //   school: "Meta",
  //   image: meta,
  //   link: "https://drive.google.com/file/d/1GGKcKrCPG4h27JWQ5y2yeGoMDHcnSxn4/view?usp=drive_link",
  //   language: "",
  //   tags: "",
  //   showSkills: false,
  //   skills: ["Describe the fundamentals of User Experience (UX) design and research.","Describe accessibility considerations in design.","Practice developing user empathy through research.","Create wireframes and prototypes in Figma."],
  //   id: "13",
  // },
  // {
  //   title: "Front-End Developer Capstone",
  //   school: "Meta",
  //   image: meta,
  //   link: "",
  //   language: "",
  //   tags: "",
  //   showSkills: false,
  //   skills: ["Design and style a responsive User Interface (UI)","Demonstrate clean and bug free coding","Use React components to create multiple views","Create a website front-end using React JS and JavaScript"],
  //   id: "14",
  // },
];

export const education = [
  {
    degree: "Profissional Degree of Management and Administration",
    school: "IEFP Portugal",
    year: "2005-2008",
  },
  {
    degree: "High School Degree",
    school: "School Dr. Solano de Abreu",
    year: "2002-2005",
  },
];

export const experience = [
  {
    company: "Richtig Service",
    year: "Jan 2023 - Now!",
    role: "Front-end developer, Transporter, Driver, Assembler, Team Leader",
    reference: [
      "Massimiliano Salihaj",
      "CEO at Richtig Service",
      "+41 76 275 35 78",
      "info@richtigservice.ch",
    ],
    description: [
      "Alterations and improvements on the company website;",
      "Deliver the furniture from clients such as Rolf Benz, Natuzzi and Martinuzzi;",
      "Orient and organize the job with the client as team lead;",
      "Assemble different type of furniture;",
    ],
    techs: [],
    class: "exp1",
    projects: [
      {
        name: "Richtig Service",
        link: "https://www.richtigservice.ch/",
      },
    ],
  },
  {
    company: "Pickwings",
    year: "Feb 2022 - Jul 2022",
    role: "FRONT-END DEVELOPER, DESIGNER",
    reference: [
      "Carlos Martinho",
      "Senior Software Engineer at Pickwings",
      "+41 078 742 20 51",
      "carlos@pickwings.ch",
    ],
    description: [
      "Diverse Front End implementations;",
      "Analize and debug;",
      "Changing and testing REST API; ",
      "Design and improve the ongoing project;",
      "Mobile optimizations;",
    ],
    techs: [],
    class: "exp2",
    projects: [
      {
        name: "Fahrerzentrale",
        link: "https://fahrerzentrale.ch/",
      },
      {
        name: "Pickwings",
        link: "https://pickwings.ch/",
      },
    ],
  },
  {
    company: "Helping Hand",
    year: "Apr 2020 - Dez 2021",
    role: "Front-end developer, Mover, Driver, Assembler",
    reference: [
      "Michael Silbermann",
      "CEO at Helping Hand",
      "+41 043 443 17 37",
      "info@helpinghand.ch",
    ],
    description: [
      "Alterations and improvements on the company website;",
      "Move safely the clients items and furniture;",
      "Orient and organize the job with the client as team lead;",
      "Drive and deliver packages;",
      "Assemble different type of furniture;",
    ],
    techs: [],
    class: "exp3",
    projects: [
      {
        name: "Helping Hand",
        link: "https://www.helpinghand.ch/",
      },
    ],
  },
  {
    company: "Feinheit",
    year: "Aug 2019 - Feb 2020",
    role: "Front-end developer",
    reference: [
      "Matthias Kestenholz",
      "Partner and Software Engineer at Feinheit",
      "+41 094 79 78 96",
      "mk@feinheit.ch",
    ],
    description: [
      "Some minor changes on the already existing project, www.fcz.ch;",
      "Small styling changes on the company site, feinheit.ch;",
      "Part of the campaign website “Mehr bezahlbare Wohnungen” that was a political campaign to appeal lower rents in Zurich, in which i was part of the Front-end team;",
      "Some small changes and corrections on the already existing site, www.limmatstadt.ch;",
      "Front-End implementation, desktop and mobile of Protier, www.protier.ch;",
    ],
    techs: [],
    class: "exp4",
    projects: [
      {
        name: "FC Zürich",
        link: "https://www.fcz.ch/en",
      },
      {
        name: "Feinheit",
        link: "https://feinheit.ch/",
      },
      {
        name: "Mehr bezahlbare Wohnungen",
        link: "https://feinheit.ch/projekte/mehr-bezahlbare-wohnungen/",
      },
      {
        name: "Limmatstadt",
        link: "https://www.limmatstadt.ch/",
      },
      {
        name: "Protier",
        link: "https://www.protier.ch/",
      },
    ],
  },
];

export const recomendations = [
  {
    company: "Pickwings",
    link: "https://drive.google.com/file/d/1jchf2W1kNPwqgja7_O8FvrL2a5dR8wfJ/view?usp=drive_link",
    language: "(de)",
  },
  {
    company: "Feinheit",
    link: "https://drive.google.com/file/d/1nnekEjPDoVEyVdZSn_P-4Fu598DrRRhf/view?usp=drive_link",
    language: "(de)",
  },
];

export const skills: IskillCards[] = [
  {
    title: "Frontend",
    cardColor: "bg-[#879EAD]",
    techs: [
      { icon: AiOutlineHtml5, name: "HTML", color: "" },
      { icon: FaCss3Alt, name: "CSS", color: "" },
      { icon: SiJavascript, name: "Javascript", color: "text-[#FFBF00]" },
      { icon: SiTypescript, name: "Typescript", color: "" },
      { icon: SiJquery, name: "JQuery", color: "" },
      { icon: SiReact, name: "React", color: "text-[#0E46A3]" },
      { icon: SiNextdotjs, name: "Next.js", color: "text-[#151515]" },
      { icon: SiAngular, name: "Angular", color: "text-[#C40C0C]" },
    ],
  },
  {
    title: "Backend",
    cardColor: "bg-[#1A5866]",
    techs: [
      { icon: SiPython, name: "Python", color: "text-[#40A578]" },
      { icon: SiDjango, name: "Django", color: "" },
      { icon: SiNodedotjs, name: "Node", color: "" },
      { icon: SiExpress, name: "Express.js", color: "" },
      { icon: SiPostgresql, name: "Post", color: "" },
      { icon: AiOutlineConsoleSql, name: "SQL", color: "" },
      { icon: SiMongodb, name: "MongoDB", color: "" },
      { icon: SiGraphql, name: "GraphQl", color: "" },
    ],
  },
  {
    title: "DevOps",
    cardColor: "bg-[#776C62]",
    techs: [
      { icon: FaGitAlt, name: "Git", color: "" },
      { icon: SiDocker, name: "Docker", color: "" },
      { icon: SiGithub, name: "Github", color: "" },
      { icon: SiNpm, name: "NPM", color: "" },
      { icon: SiYarn, name: "yarn", color: "" },
      { icon: SiJenkins, name: "Jenkins", color: "" },
      { icon: SiAnsible, name: "Ansible", color: "" },
      { icon: SiKubernetes, name: "Kubernetes", color: "" },
    ],
  },
  {
    title: "Other",
    cardColor: "bg-[#99958E]",
    techs: [
      { icon: SiAdobephotoshop, name: "Photoshop", color: "" },
      { icon: SiAdobepremierepro, name: "Premiere pro", color: "" },
      { icon: SiFigma, name: "Figma", color: "" },
      { icon: FaUbuntu, name: "Ubuntu", color: "" },
      { icon: SiWix, name: "Wix", color: "" },
    ],
  },
];

export const workExp = [
  {
    company: "Freelance",
    website: "https://www.pauloreizinho.com/",
    year: "Feb 2024 - Now!",
    role: "Frontend Dev",
    reference: [],
    description:
      "Working on different projects as a frontend dev with Angular, Django. Another project as a webflow developer and webmaster.",
    // techs: [],
    class: "exp1",
    color: "#1A5866",
    projects: [
      {
        name: "Finito Pro",
        link: "https://www.finitopro.ch/",
      },
      {
        name: "CargoFlow",
        link: "https://www.cargoflow.ch/",
      },
    ],
  },
  {
    company: "Richtig Service",
    website: "https://www.richtigservice.ch/",
    year: "Jan 2023 - Feb 2024",
    // role: "Front-end developer, Transporter, Driver, Assembler, Team Leader",
    role: "Transporter",
    reference: [
      "Massimiliano Salihaj",
      "CEO at Richtig Service",
      "+41 76 275 35 78",
      "info@richtigservice.ch",
    ],
    description:
      "Deliver the furniture from clients such as Rolf Benz, Natuzzi and Martinuzzi, aswell as orient and organize the job with the client as team leader.",
    // techs: [<AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiFigma key={0} />, <SiWindows key={0} />, <GiSteeringWheel key={0} />, <FaPeopleCarry key={0} />, <IoIosPeople key={0} />],
    class: "exp1",
    color: "#1A5866",
    // projects: [
    //   {
    //     name: "Richtig Service",
    //     link: "https://www.richtigservice.ch/"
    //   }
    // ]
  },
  {
    company: "Pickwings",
    website: "https://pickwings.ch/en/",
    year: "Feb 2022 - Jul 2022",
    role: "Frontend Dev, Designer",
    reference: [
      "Carlos Martinho",
      "Senior Software Engineer at Pickwings",
      "+41 078 742 20 51",
      "carlos@pickwings.ch",
    ],
    description:
      "Diverse Front End implementations, analize and debug, manipulation and testing REST API, design and improve Fahrerzentrale and respective mobile optimizations.",
    // techs: [<SiAngular key={0} />, <SiDjango key={0} />, <SiTypescript key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiJavascript key={0} />, <SiPython key={0} />, <SiDocker key={0} />, <SiFigma key={0} />, <SiNodedotjs key={0} />, <FaGitAlt key={0} />, <SiGitlab key={0} />, <FaUbuntu key={0} />, <SiYarn key={0} />, <SiAdobephotoshop key={0} />,],
    class: "exp2",
    color: "#1A5866",
    projects: [
      {
        name: "Fahrerzentrale",
        link: "https://fahrerzentrale.ch/",
      },
      {
        name: "Pickwings",
        link: "https://pickwings.ch/",
      },
    ],
  },
  {
    company: "Helping Hand",
    website: "https://www.helpinghand.ch/",
    year: "Apr 2020 - Dez 2021",
    role: "Mover, Driver, Assembler",
    reference: [
      "Michael Silbermann",
      "CEO at Helping Hand",
      "+41 043 443 17 37",
      "info@helpinghand.ch",
    ],
    description:
      "My tasks was of what you would expect from a moving company, carry stuff from one house to another, also did tasks such as driver, storage manager,team leader and furniture assembler.",
    // techs: [<SiJoomla key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiFigma key={0} />, <SiWindows key={0} />, <GiSteeringWheel key={0} />, <FaPeopleCarry key={0} />, <IoIosPeople key={0} />],
    class: "exp3",
    color: "#1A5866",
    // projects: [
    //   {
    //     name: "Helping Hand",
    //     link: "https://www.helpinghand.ch/"
    //   }
    // ]
  },
  {
    company: "Feinheit",
    website: "https://feinheit.ch/",
    year: "Aug 2019 - Feb 2020",
    role: "Frontend dev",
    reference: [
      "Matthias Kestenholz",
      "Partner and Software Engineer at Feinheit",
      "+41 094 79 78 96",
      "mk@feinheit.ch",
    ],
    description:
      "With only 2 months of starting the developer route I was hired in a internship by the awsome company Feinheit and had the oportunity to work as a frontend engineer on diversed projects.",
    // techs: [<SiAngular key={0} />, <SiDjango key={0} />, <AiOutlineHtml5 key={0} />, <FaCss3Alt key={0} />, <SiJavascript key={0} />, <SiPython key={0} />, <SiDocker key={0} />, <SiNodedotjs key={0} />, <FaGitAlt key={0} />, <SiGitlab key={0} />, <FaUbuntu key={0} />, <SiYarn key={0} />],
    class: "exp4",
    color: "#1A5866",
    projects: [
      {
        name: "FC Zürich",
        link: "https://www.fcz.ch/en",
      },
      {
        name: "Feinheit",
        link: "https://feinheit.ch/",
      },
      {
        name: "Mehr bezahlbare Wohnungen",
        link: "https://feinheit.ch/projekte/mehr-bezahlbare-wohnungen/",
      },
      {
        name: "Limmatstadt",
        link: "https://www.limmatstadt.ch/",
      },
      {
        name: "Protier",
        link: "https://www.protier.ch/",
      },
    ],
  },
];

export const projects = [
  {
    image: cargoflow,
    alt: "cargoflow app",
    title: "CargoFlow",
    link: "https://www.cargoflow.ch/",
    github: "",
    type: "profissional",
    date: "2024/05",
    featured: false,
    tags: ["#angular", "#typescript", "#django"],
    project_type: "Webapp for tranportation of products",
  },
  {
    image: finito,
    alt: "finito pro app",
    title: "Finito Pro",
    link: "https://www.finitopro.ch/",
    github: "",
    type: "profissional",
    date: "2024/05",
    featured: false,
    tags: ["#angular", "#typescript", "#django"],
    project_type: "Webapp for companies internal organization",
  },
  {
    image: littleLemon,
    alt: "Little Lemon Restaurant",
    title: "Little Lemon Restaurant",
    link: "https://coursera-little-lemon.vercel.app/",
    github: "https://github.com/lordrichard6/coursera_capstone_proj",
    type: "personal",
    date: "2024/05",
    featured: false,
    tags: ["#react", "#typescript"],
    project_type: "Restaurant Website",
  },
  {
    image: portfolio22,
    alt: "Portfolio 2022",
    title: "Portfolio 2022",
    link: "https://pauloreizinho.vercel.app/",
    github: "https://github.com/lordrichard6/portfolio21",
    type: "personal",
    date: "2022/06",
    tags: ["#react", "#tailwind"],
    project_type: "Portfolio",
  },
  {
    image: angryFish,
    alt: "Angry Fish",
    title: "Angry Fish",
    link: "https://angry-fish.vercel.app/",
    github: "https://github.com/lordrichard6/angry_fish",
    type: "personal",
    date: "2024/04",
    tags: ["#react", "#AppWrite"],
    project_type: "Social Media App",
  },
  {
    image: thinkBig,
    alt: "think big homepage",
    title: "ThinkBig",
    link: "https://think-big.vercel.app/",
    github: "https://github.com/lordrichard6/think_big",
    type: "personal",
    date: "2023/04",
    tags: ["#react", "#tailwind"],
    project_type: "Website",
  },
  {
    image: fahrerzentrale,
    alt: "fahrezentrale homepage",
    title: "FahrerZentrale",
    link: "https://fahrerzentrale.ch/en/landing",
    github: "",
    type: "profissional",
    date: "2022/06",
    tags: ["#angular", "#django"],
    project_type: "Job Platform",
  },
  {
    image: pickwings,
    alt: "pickwings homepage",
    title: "Pickwings",
    link: "https://pickwings.ch/de/",
    github: "",
    type: "profissional",
    date: "2022/05",
    tags: ["#angular", "#django"],
    project_type: "Courier App",
  },
  {
    image: helpinghand,
    alt: "helping hand homepage",
    title: "Helping Hand",
    link: "https://www.helpinghand.ch/",
    github: "",
    type: "profissional",
    date: "2021/06",
    tags: ["#joomla"],
    project_type: "Website",
  },
  {
    image: fastRent,
    alt: "car rental website",
    title: "FastRent",
    link: "https://lordrichard-rentfast.netlify.app/",
    github: "https://github.com/lordrichard6/rent-fast",
    type: "personal",
    date: "2021/06",
    tags: ["#reactjs", "#typescript"],
    project_type: "Website",
  },
  {
    image: hulu,
    alt: "movie streaming platform hulu",
    title: "Hulu clone",
    link: "https://hulu-clone-rosy.vercel.app/",
    github: "https://github.com/lordrichard6/hulu_clone",
    type: "personal",
    date: "2021/04",
    tags: ["#nextjs", "#tailwind"],
    project_type: "Movies Database",
  },
  {
    image: monkey,
    alt: "e-shop for trained monkeys",
    title: "Monkey Circus",
    link: "https://monkeycircus-2z4e865i4.now.sh",
    github: "https://github.com/lordrichard6/monkeycircus",
    type: "personal",
    date: "2020/03",
    tags: ["#nextjs", "#typescript"],
    project_type: "E-commerce",
  },
  {
    image: limmastadt,
    alt: "limmastadt website",
    title: "Limmatstadt",
    link: "https://www.limmatstadt.ch/",
    github: "",
    type: "profissional",
    date: "2020/02",
    tags: ["#angular", "#django"],
    project_type: "Website",
  },
  {
    image: protier,
    alt: "protier website",
    title: "Protier",
    link: "https://www.protier.ch/",
    github: "",
    type: "profissional",
    date: "2020/01",
    tags: ["#angular", "#django"],
    project_type: "Website",
  },
  {
    image: bezahlbare,
    alt: "Bezahlbare Wohnungen project",
    title: "Bezahlbare Wohnungen",
    link: "https://feinheit.ch/projekte/mehr-bezahlbare-wohnungen/",
    github: "",
    type: "profissional",
    date: "2019/11",
    tags: ["#angular", "#django"],
    project_type: "Campaign Website",
  },
  {
    image: feinheit,
    alt: "Feinheit website",
    title: "Feinheit",
    link: "https://feinheit.ch/",
    github: "",
    type: "profissional",
    date: "2019/10",
    tags: ["#angular", "#django"],
    project_type: "Website",
  },
  {
    image: fcz,
    alt: "fcz website",
    title: "FCZ Website",
    link: "https://www.fcz.ch/",
    github: "",
    type: "profissional",
    date: "2019/08",
    tags: ["#angular", "#django"],
    project_type: "Website, E-shop",
  },
];
