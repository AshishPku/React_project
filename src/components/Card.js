import React from "react";
import img from "./../assets/images/sri-chaitnaya.jpg";
const Card = (props) => {
  const len = 1;

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
      <div>
        {len === 0 ? (
          <p>Conditions true is applied</p>
        ) : (
          <p>false condition is applied</p>
        )}
      </div>
    </div>
  );
};

export default Card;
