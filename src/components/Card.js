import React from "react";
import img from "./../assets/images/sri-chaitnaya.jpg";
const Card = (props) => {
  const len = 0;

  return (
    <div>
      <div className="card">
        {props.value.map((el) => (
          <div>
            <div>{len}</div>
            <span>{el.name}</span>
            <span>:</span>
            <span>{el.category}</span>
          </div>
        ))}
      </div>
      <div>{len && <img src={img} alt="img" />}</div>
    </div>
  );
};

export default Card;
