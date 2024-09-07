import { useEffect } from "react";
import styles from "./toJson.module.css";

const { jsonSyntax } = require("../../scripts/toJson");

const jsonData = {
  name: "Ramdani - Ramdane",
  title: "Web Developer | Software Engineer",
  location: "Tizi Ouzou , Algerie",
  contact: {
    email: "ramdanramdane123@gmail.com",
    phone: "+213 552 45 17 98",
    website: "https://www.yourwebsite.com",
    linkedin: "https://www.linkedin.com/in/yourprofile",
    github: "https://github.com/RamdaniRamdane",
  },
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "RESTful API",
    "Python",
  ],
  experience: [
    {
      company: "Delta Wire",
      role: "Software Engineering Intern",
      duration: "June 2023 - Present",
      responsibilities: [
        "Worked on building and maintaining RESTful APIs using Express.js.",
        "Assisted in the development of backend services.",
        "Collaborated with senior engineers to enhance API performance.",
      ],
    },
  ],
  education: {
    degree: "Master's Degree in Information Systems Engineering",
    institution: "Mouloud Mammeri University",
    year: "now",
  },
  interests: ["Drawing", "Photography", "Video Games"],
};

const Json = () => {
  useEffect(() => {
    const element = document.getElementById("json");
    element
      ? (element.innerHTML = jsonSyntax(jsonData, 0))
      : console.log("error element");
  }, []);

  return (
    <div>
      <span className={styles.json} id="json"></span>
    </div>
  );
};

export default Json;
