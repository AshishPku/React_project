import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      {props.value.map((el) => (
        <div>
          <span>{el.name}</span>
          <span>:</span>
          <span>{el.category}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;
