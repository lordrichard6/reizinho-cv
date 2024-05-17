import { IconType } from 'react-icons';
import { SlSocialLinkedin } from "react-icons/sl";
import { TfiInstagram } from "react-icons/tfi";
import { PiGithubLogoFill, PiWhatsappLogoLight  } from "react-icons/pi";
import { IoMdHome } from "react-icons/io";
import { LuPhoneCall } from "react-icons/lu";
import { RiMailSendLine } from "react-icons/ri";
import { SiSitepoint, SiJavascript, SiTypescript, SiJquery, SiReact, SiNextdotjs, SiAngular, SiPython, SiDjango, SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiGraphql, SiDocker, SiGithub, SiNpm, SiYarn, SiJenkins, SiAnsible, SiKubernetes, SiAdobephotoshop, SiAdobepremierepro, SiFigma, SiWix } from "react-icons/si";
import { AiOutlineConsoleSql, AiOutlineHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaGitAlt, FaUbuntu } from 'react-icons/fa';

interface SocialMedia {
    title: string;
    link: string;
    icon: IconType; // Correct type annotation for the icon property
}

export interface Tech {
  icon: IconType;
  name: string;
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
        icon: SlSocialLinkedin
    },
    {
        title: "Instagram",
        link: "https://www.instagram.com/paulo_reizinho/",
        icon: TfiInstagram 
    },
    {
        title: "Github",
        link: "https://github.com/lordrichard6",
        icon: PiGithubLogoFill 
    },
    {
        title: "Whatsapp",
        link: "https://wa.link/sru6m7",
        icon: PiWhatsappLogoLight 
    }
]

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

export const certifications = [
  // {
  //     title: "Managment and Administration",
  //     school: "IEFP Portugal",
  //     image: "",
  //     link: "https://drive.google.com/file/d/1GUD5DhtC0MK9tD-ivo-ZVl3N4ub3oqoL/view?usp=drive_link",
  //     language: "(de)",
  //     tags: "Web development",
  //     showSkills: true,
  //     skills: ["Mathematics", "Social psycology of organizations", "Legal principles", "Iformation and communication technologies", "Health and safety at work", "Commercial documentation", "Commercial, administrative and labol law", "Accounting", "Administration and management of human resources", "Procurement and inventory management", "Technical and administrative practices", "Organization and business management", "Commercial calculation", "Portuguese and English, Business level", "Customer service", "Practice during the training"]
  // },
  {
    title: "Complete Web Developer: Zero to Mastery",
    school: "Udemy",
    image: "/src/assets/img/udemy-logo.png",
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
    id: "1"
  },
  {
    title: "Modern React with Redux",
    school: "Udemy",
    image: "/src/assets/img/udemy-logo.png",
    link: "https://drive.google.com/file/d/1h9tkGfllT_CmWCn12ERj8sQfSxc6RRXL/view?usp=drive_link",
    language: "",
    tags: "Web development",
    showSkills: true,
    skills: [
      "Fundamentals concepts behind React and Redux including JSX, state, and props",
      "NPM, Webpack, Babel, and ES6/ES2015 Javascript syntax",
    ],
    id: "2"
  },
  {
    title: "Python and Django Full Stack Web Developer Bootcamp",
    school: "Udemy",
    image: "/src/assets/img/udemy-logo.png",
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
    id: "3"
  },
  {
    title: "Advanced CSS and Sass",
    school: "Udemy",
    image: "/src/assets/img/udemy-logo.png",
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
    id: "4"
  },
  {
    title: "Responsive Web Design",
    school: "FreeCodeCamp",
    image: "/src/assets/img/freecodecamp-logo.png",
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
    id: "5"
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    school: "FreeCodeCamp",
    image: "/src/assets/img/freecodecamp-logo.png",
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
    id: "6"
  },
  {
    title: "Front-End Development Libraries",
    school: "FreeCodeCamp",
    image: "/src/assets/img/freecodecamp-logo.png",
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
    id: "7"
  },
  {
    title: "HTML and CSS in depth",
    school: "Meta",
    image: "/src/assets/img/meta-logo.png",
    link: "https://drive.google.com/file/d/1H2wRbHLx8PX7wi-ghXhOnwcwd7upUSWz/view?usp=drive_link",
    language: "",
    tags: "",
    showSkills: false,
    skills: [""],
    id: "8"
  },
  {
    title: "Programming with JavaScript",
    school: "Meta",
    image: "/src/assets/img/meta-logo.png",
    link: "https://drive.google.com/file/d/1m7OG5hxdCgCptSXPAq6GGS0_y3iLdJo8/view?usp=drive_link",
    language: "",
    tags: "",
    showSkills: false,
    skills: [""],
    id: "9"
  },
  {
    title: "Version Control",
    school: "Meta",
    image: "/src/assets/img/meta-logo.png",
    link: "https://drive.google.com/file/d/1E3OHxAzTfvjPv1nmz4Th6Xv02VIeEtZt/view?usp=drive_link",
    language: "",
    tags: "",
    showSkills: false,
    skills: [""],
    id: "10"
  },
  {
    title: "React Basics",
    school: "Meta",
    image: "/src/assets/img/meta-logo.png",
    link: "https://drive.google.com/file/d/1siLgyyJVqpWKMLIBsPLrq53gHLxE7atZ/view?usp=drive_link",
    language: "",
    tags: "",
    showSkills: false,
    skills: [""],
    id: "11"
  },
  {
    title: "Advanced React",
    school: "Meta",
    image: "/src/assets/img/meta-logo.png",
    link: "https://drive.google.com/file/d/1AB-TRzdNsHarp-Nsz1hKmmli4VpMYAyF/view?usp=drive_link",
    language: "",
    tags: "",
    showSkills: false,
    skills: [""],
    id: "12"
  },
  {
    title: "Principles of UX/UI Design",
    school: "Meta",
    image: "/src/assets/img/meta-logo.png",
    link: "https://drive.google.com/file/d/1GGKcKrCPG4h27JWQ5y2yeGoMDHcnSxn4/view?usp=drive_link",
    language: "",
    tags: "",
    showSkills: false,
    skills: [""],
    id: "13"
  },
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
      { icon: AiOutlineHtml5, name: "HTML" },
      { icon: FaCss3Alt, name: "CSS" },
      { icon: SiJavascript, name: "Javascript" },
      { icon: SiTypescript, name: "Typescript" },
      { icon: SiJquery, name: "JQuery" },
      { icon: SiReact, name: "React" },
      { icon: SiNextdotjs, name: "Next.js" },
      { icon: SiAngular, name: "Angular" },
    ]
  },
  {
    title: "Backend",
    cardColor: "bg-[#1A5866]",
    techs: [
      { icon: SiPython, name: "Python" },
      { icon: SiDjango, name: "Django" },
      { icon: SiNodedotjs, name: "Node" },
      { icon: SiExpress, name: "Express.js" },
      { icon: SiPostgresql, name: "Post" },
      { icon: AiOutlineConsoleSql, name: "SQL" },
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiGraphql, name: "GraphQl" },
    ]
  },
  {
    title: "DevOps",
    cardColor: "bg-[#776C62]",
    techs: [
      { icon: FaGitAlt, name: "Git" },
      { icon: SiDocker, name: "Docker" },
      { icon: SiGithub, name: "Github" },
      { icon: SiNpm, name: "NPM" },
      { icon: SiYarn, name: "yarn" },
      { icon: SiJenkins, name: "Jenkins" },
      { icon: SiAnsible, name: "Ansible" },
      { icon: SiKubernetes, name: "Kubernetes" },
    ]
  },
  {
    title: "Other",
    cardColor: "bg-[#99958E]",
    techs: [
      { icon: SiAdobephotoshop, name: "Photoshop" },
      { icon: SiAdobepremierepro, name: "Premiere pro" },
      { icon: SiFigma, name: "Figma" },
      { icon: FaUbuntu, name: "Ubuntu" },
      { icon: SiWix, name: "Wix" },
    ]
  }
]