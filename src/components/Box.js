import React, { useState } from "react";
const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <div className="btn-box">
        <p></p>
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && children}
    </div>
  );
};

export default Box;
