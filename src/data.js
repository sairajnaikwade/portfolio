import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Kotlin",
    ket: "Language",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "Framework",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "TypeScript",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "PHP",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Vite",
    ket: "Framework",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "MySql",
    ket: "Framework",
    dad: "1900",
  },
];

import zerohunger from "/assets/proyek/zerohunger.png";
import repairdesk from "/assets/proyek/repairdesk.png";
import flood from "/assets/proyek/flood.png";
import personalweb from "/assets/proyek/personalweb.png"; 

export const listProyek = [
  {
    id: 1,
    image: zerohunger,
    title: "Zero Hunger",
    subtitle: "A food donation platform...",
    fullDescription:"Zero Hunger is a comprehensive food donation platform designed to connect donors with those in need. Built with full-stack technologies, it allows users to donate food items, track donations, and ensure efficient distribution to reduce food waste and combat hunger. The platform features user authentication, real-time tracking, and an intuitive interface for both donors and recipients.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sairajnaikwade/Zero-Hunger.git",
    dad: "100",
  },
  {
    id: 2,
    image: repairdesk,
    title: "Repair Desk",
    subtitle: "Full-stack system for Mate Tractors...",
    fullDescription:"Repair Desk is a full-stack web application developed for Mate Tractors to manage repair requests, track maintenance schedules, and streamline operations. It includes features like user dashboards, repair tracking, inventory management, and reporting tools. Built with modern web technologies, it enhances efficiency and provides real-time insights for better decision-making in agricultural machinery maintenance.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/sairajnaikwade/repair-desk.git",
    dad: "200",
  },
  {
    id: 3,
    image: flood,
    title: "Flood Monitoring System",
    subtitle: "IoT-based system with dashboard...",
    fullDescription:"The Flood Monitoring System is an IoT-powered solution that uses sensors to monitor water levels and weather conditions in flood-prone areas. Data is collected and visualized on a real-time dashboard, providing alerts and insights for disaster management. This project combines hardware integration with data analytics to help communities prepare for and respond to flooding events effectively.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sairajnaikwade/Flood-Monitoring-System-IoT.git",
    dad: "300",
  },
  {
    id: 4,
    image: personalweb,
    title: "Personal Web Portfolio",
    subtitle: "An interactive web portfolio showcasing my professional journey...",
    fullDescription:"An interactive web portfolio showcasing my professional journey, skills, and projects. Designed with a clean yet modern aesthetic, the portfolio highlights my technical expertise in web development, software engineering, and IoT. The site also serves as a central hub for potential employers and collaborators to explore my works, reflecting both my creativity and technical precision.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/sairajnaikwade",
    dad: "400",
  },
];
