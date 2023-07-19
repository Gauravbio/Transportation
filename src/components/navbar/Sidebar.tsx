import React from "react";
import NavItem from "./NavItem";

const Sidebar = () => {
  const options = [
    {
      title: "Home",
    },
    {
      title: "About",
    },
    {
      title: "Services",
    },
    {
      title: "Careers",
    },
    {
      title: "Media Center",
    },
    {
      title: "Contact us",
    },
    {
      title: "Go Tracking",
    },
  ];
  return (
    <div
      className="flex flex-col 
    bg-green-300 
    z-20 md:px-5 
    cursor-pointer 
    w-10/12 sm:w-8/12 
    md:w-5/12 xl:w-3/12 absolute"
    >
      {options.map((item) => (
        <NavItem key={item.title} title={item.title} />
      ))}
    </div>
  );
};

export default Sidebar;
