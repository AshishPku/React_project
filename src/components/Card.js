import React, { useState } from "react";
const data = [
  "Job 1 is amazing but it's hard to crack,🙋",
  "Job 2 is standard but it's can be crack.🙋‍♂️",
  "Job 3 is good can be cracked.🙋‍♂️",
];
const Card = () => {
  const [step, set] = useState(0);
  const [isOpen, setOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 0) {
      set((s) => {
        return s - 1;
      });
    }
  };
  const handleNext = () => {
    if (step < 2)
      set((s) => {
        return s + 1;
      });
  };
  return (
    <div>
      <div className="disapper" onClick={() => setOpen((x) => !x)}>
        &Theta;
      </div>
      {isOpen && (
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
      )}
    </div>
  );
};

export default Card;
