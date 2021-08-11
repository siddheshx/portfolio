import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi, AiOutlineBug } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>,<b>Tailwind</b> and <b>React Framework</b>",
  },
  {
    Icon: FaServer,
    title: "Backend Development",
    about:
      "Can write clean, scalable and distributed backend using vairous framework in <b>Nodejs</b> and <b>PHP</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "Create light, fast and secure <b>REST API</b>, using best framework and securing them with <b>OAuth</b>, <b>JWT</b> and <b>passport</b>",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "A seasoned problem solver at <b>Project Euler</b> and <b>HackerRank</b>.",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Designing stunning user interface using <b>Figma</b>.",
  },
  {
    Icon: AiOutlineBug,
    title: "Excellent testing and debugging skills",
    about:
      "Maintaining documentation of test results to assist in debugging and modification of software.",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Php",
    level: "95",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "Nodejs",
    level: "82",
  },
  {
    Icon: BsCircleFill,
    name: "HTML/CSS",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Javascirpt",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "88",
  },
  {
    Icon: BsCircleFill,
    name: "MySql",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "NoSql",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "AWS",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Nextjs",
    level: "75",
  },
  {
    Icon: BsCircleFill,
    name: "Redis",
    level: "70",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "VSCode",
    level: "100",
  },
  {
    Icon: BsCircleFill,
    name: "git",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Docker",
    level: "55",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Memories",
    description:
      "A CURD project where user can post there memories, like comment and delete post.",
    image_path: "/images/memories.png",
    deployed_url: "http://memories.adroitsoft.tech",
    github_url: "https://adroitsoft.tech",
    category: ["react", "nestjs", "mongo"],
    key_techs: ["React", "Nestjs", "Material UI", "JWT-Auth", "Redux-Toolkit"],
  },
  {
    id: 2,
    name: "Amazon clone",
    image_path: "/images/amazona.png",
    deployed_url: "http://amazona.adroitsoft.tech",
    github_url: "https://adroitsoft.tech",
    category: ["react", "express", "mongo"],
    description:
      "Amazon clone with complete frontend, backend and many more functionality.",
    key_techs: ["React", "Express", "Multer", "jsonwebtoken", "socket.io"],
  },

  {
    id: 3,
    name: "Portfolio",
    image_path: "/images/portfolio.png",
    deployed_url: "https://sid-bgk.adroitsoft.tech",
    github_url: "https://adroitsoft.tech",
    category: ["nextjs", "react"],
    description:
      "A digital resume to showcase skills to recruiter, clients and friends.",
    key_techs: [
      "React",
      "framer-motion",
      "react-icons",
      "tailwindcss"
    ],
  },

  {
    id: 4,
    name: "Super Chat",
    image_path: "/images/superchat.png",
    deployed_url: "http://superchat.adroitsoft.tech/",
    github_url: "https://adroitsoft.tech",
    category: ["react"],
    description:
      "Basic Realtime Chat App with image upload where one can create a room can talk to each other. Used various apis such as Firebase, React Chat Engine and Firebase auth.",
    key_techs: ["React", "Firebase", "Facebook Auth", "Google Auth", "React Chat Engine"],
  },

  {
    id: 5,
    name: "Super VChat",
    image_path: "/images/supervchat_2.png",
    deployed_url: "https://supervchat.adroitsoft.tech",
    github_url: "https://adroitsoft.tech",
    category: ["react"],
    description:
      "One to one video call app with use of WebRTC and socket.io",
    key_techs: ["React", "socket.io", "WebRTC"],
  },

  {
    id: 6,
    name: "Airbnb Clone",
    image_path: "/images/airbnb.png",
    deployed_url: "https://airbnb-clone-virid.vercel.app",
    github_url: "https://adroitsoft.tech",
    category: ["nextjs", "react"],
    description:
      "Airbnb clone made using Next.js, Tailwind CSS, Calendar Picker, Mapbox.",
    key_techs: ["React", "NextJs", "MapBox", "tailwindcss"],
  }
];