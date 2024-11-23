import { useState } from "react"
import LinkHeader from "@/components/LinkHeader"

import LineDrop from "@/assets/svg/LineDrop.svg"
import Equis from "@/assets/svg/Equis.svg"

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    { label: "Home", type: "circle", to: "/" },
    { label: "Work", type: "diamond", to: "/work" },
    { label: "About", type: "circle", to: "/about" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-12 sm:top-1/2 right-10 transform -translate-y-1/2 flex flex-col items-center space-y-8 z-10">
      <div className={`
        flex justify-between items-center w-full bg-zinc-700
        sm:w-auto fixed sm:relative rounded-xl`}
      >
        {isOpen ? (
          <img
            src={Equis}
            alt="Close Menu"
            className="size-10 cursor-pointer mx-2 sm:hidden block transition-transform transform hover:rotate-90"
            onClick={toggleMenu}
          />
        ) : (
          <img
            src={LineDrop}
            alt="Open Menu"
            className="size-10 cursor-pointer mx-2 sm:hidden block transition-transform transform hover:rotate-180"
            onClick={toggleMenu}
          />
        )}
      </div>
      <nav className={`
        flex flex-col gap-4 text-white items-center transition-all ease-in-out duration-300 
        transform ${isOpen ? "max-h-screen opacity-100 pt-20 pb-2" : "max-h-0 opacity-0"} 
        sm:flex sm:flex-col sm:items-center sm:pt-0 sm:gap-x-10
        sm:max-h-none sm:opacity-100`}
      >
        {items.map((item, index) => (
          <LinkHeader key={index} to={item.to} title={item.label} type={item.type} />
        ))}
      </nav>
    </header>
  )
}

export default Header

