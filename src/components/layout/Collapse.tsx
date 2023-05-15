import React, { useState } from "react";

interface CollapseProps {
  title: string;
  children: React.ReactNode;
}

const Collapse: React.FC<CollapseProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className='flex justify-between w-full py-2 text-left'
        onClick={toggleCollapse}
      >
        <span>{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      <div className={`${isOpen ? "block" : "hidden"} py-2 bg-white rounded-b`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
