import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `Information Technology graduate passionate about web development. Proficient in technologies such as MERN stack and Front-End Development.`;

export const ABOUT_TEXT = `I'm an IT Engineering graduate with proficiency in the web development, combining front-end and back-end technologies to build scalable, high-performance web applications. My personal experience includes developing responsive, visually engaging user interfaces using HTML, CSS, JavaScript and ReactJS. I'm a result riented indvidual and a good communicator who'd collaborate and work with a competent team to achieve results.`;

export const PROJECTS = [
  {
    title: "React Code Editor",
    image: project1,
    description:
      "A web browser based code editor made with React, Monaco Text Editor package and Piston API to execute the code.",
    technologies: ["ReactJS", "Monaco", "ChakraUI", "PistonAPI"],
    link: "https://github.com/rahulv77/React-Code-Editor",
    livelinktitle: "Live Link",
    livelink: "https://reactappcodeeditor.netlify.app/"
  },
  {
    title: "ChatBot Web App",
    image: project2,
    description:
      "A chatbot web app made with Javascript and Tailwind CSS using Google’s Gemini API for getting response to the text prompt.",
    technologies: ["HTML", "Tailwind", "JavaScript", "GeminiAPI"],
    link: "https://github.com/rahulv77/ChatBot",
    livelinktitle: "Live Link",
    livelink: "https://chatbot-ai-app.vercel.app/"
  },
  {
    title: "MERN Stack Reminder App",
    image: project3,
    description:
      "A MERN stack web application which is used to send a reminder text/notification on WhatsApp with the help of Twilio WhatsApp API.",
    technologies: ["MongoDB", "ExpressJS", "ReactJS", "Node.js"],
    link: "https://github.com/rahulv77/MERN-Stack-Reminder-App-Frontend",
    livelinktitle: "",
    livelink: ""
  },
];

export const CONTACT = {
  address: "Mumbai, Maharashtra",
  phoneNo: "+91 7888191616 ",
  email: "rahulvernekar777@gmail.com",
};
