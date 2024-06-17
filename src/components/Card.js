import React from "react";
const initialItems = [
  { id: "1", description: "thing1", isPacked: true, quantity: 3 },
  { id: "2", description: "thing2", isPacked: false, quantity: 6 },
  { id: "3", description: "thing3", isPacked: true, quantity: 5 },
  { id: "4", description: "thing4", isPacked: false, quantity: 1 },
  { id: "5", description: "thing5", isPacked: false, quantity: 7 },
  { id: "6", description: "thing6", isPacked: true, quantity: 3 },
];
const Card = () => {
  return (
    <ul className="card">
      {initialItems.map((items) => {
        return (
          <div className="item">
            <li id={items.id}>{items.description}</li>
            <button>&#x2716;</button>
          </div>
        );
      })}
    </ul>
  );
};

export default Card;
