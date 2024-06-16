import React from "react";
const data = [
  "Job 1 is amazing but it's hard to crack,🙋",
  "Job 2 is standard but it's can be crack.🙋‍♂️",
  "Job 3 is good can be cracked.🙋‍♂️",
];
const Card = () => {
  var step = 1;
  const handlePrevious = () => {
    alert("previous");
  };
  const handleNext = () => {
    alert("Next");
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`num ${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`num ${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`num ${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">{data[step - 1]}</p>
      <div className="button">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Card;
