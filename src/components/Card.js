import React from "react";
const Card = ({ items, deleteIterm, onchecking }) => {
  return (
    <ul className="card">
      {items.map((items) => {
        return (
          <ul className="item">
            <div id={items.id}>
              <span>
                <input
                  className="checktype"
                  type="checkbox"
                  value={0}
                  onChange={() => onchecking(items.id)}
                />
              </span>
              <span className={items.isPacked === true ? "cross" : ""}>
                {items.description}
              </span>
              <span>
                <button onClick={() => deleteIterm(items.id)}>&#x2716;</button>
              </span>
            </div>
          </ul>
        );
      })}
    </ul>
  );
};

export default Card;
