// import Link from "next/link";
"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [activelink, setActiveLink] = useState("Home")
  const handleScroll = (id: string) => {
    setActiveLink(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ids = [
    {id: "home", label: "Home"},
    {id: "about", label: "About"},
    {id: "contact", label: "Contact"},
    {id: "service", label: "Service"}
  ]

  return (
    <nav className="bg-green-600 text-white p-4 top-0 fixed right-0 left-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">LIGHT SCHOOLS</h1>
{ids.map (({id, label}) => (
<div key={id} className="flex flex-col items-center">
          <div className={`h-[1px] w-2 mb-1 ${id === activelink ? "bg-[#DC8F0A]" : "bg-transparent"}`} />
          <button
            onClick={() => handleScroll(id)}
            style={{ 
              fontFamily: id === activelink ? 'Avenir-Heavy' : 'Avenir-Medium'
            }}
            className={`text-sm lg:text-base transition-colors relative ${
              id === activelink 
                ? "text-[#DC8F0A]" 
                : "text-white hover:text-[#DC8F0A]"
            }`}
          >
            {label}
          </button>
          <div className={`h-[1px] w-2 mt-1 ${id === activelink ? "bg-[#DC8F0A]" : "bg-transparent"}`} />
</div>
))}

      </div>
    </nav>
  );
};

export default Navbar;
