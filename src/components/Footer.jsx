import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 flex flex-col items-center relative z-10">
        {/* Dock - paling bawah di mobile */}
        <div className="order-3 md:order-none mt-15 md:mt-0  md:mb-0">
          <Dock 
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>

    </div>
  );
};

export default Footer;
