import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div>
      <button className="select" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
