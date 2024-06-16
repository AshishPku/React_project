import React, { useState } from "react";
const data = [
  "Job 1 is amazing but it's hard to crack,🙋",
  "Job 2 is standard but it's can be crack.🙋‍♂️",
  "Job 3 is good can be cracked.🙋‍♂️",
];
const Card = () => {
  const [step, set] = useState(0);
  const handlePrevious = () => {
    set((step) => {
      if (step > 0) {
        return step - 1;
      } else {
        return 0;
      }
    });
  };
  const handleNext = () => {
    set((step) => {
      if (step < 2) {
        return step + 1;
      } else {
        return 2;
      }
    });
  };
  return (
    <div className="steps">
      <div className="numbers">
        <div className={`num ${step >= 0 ? "active" : ""}`}>1</div>
        <div className={`num ${step >= 1 ? "active" : ""}`}>2</div>
        <div className={`num ${step >= 2 ? "active" : ""}`}>3</div>
      </div>
      <p className="message">{data[step]}</p>
      <div className="button">
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Card;
