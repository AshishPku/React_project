import React from "react";
import Button from "./Button";
const Card = ({ data, onSelection, selectedFriend }) => {
  return (
    <ul className="friends-box">
      {data.map((e) => {
        var isSelected;
        if (!selectedFriend) {
          isSelected = false;
        } else {
          isSelected = e.id === selectedFriend.id;
        }
        return (
          <li id={e.id} className="each-friend">
            <img className="friend-img" src={e.image} alt={e.image} />
            <div>
              <h3 className="friend-name">{e.name}</h3>
              {e.balance < 0 && (
                <p className="info red">
                  You owe {e.name} {-e.balance}
                </p>
              )}
              {e.balance > 0 && (
                <p className="info green">
                  {e.name} owes you {e.balance}
                </p>
              )}
              {e.balance === 0 && (
                <p className="info neutral">You {e.name} are even</p>
              )}
            </div>
            <Button onClick={() => onSelection(e)}>
              {isSelected ? "Close" : "Select"}
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
