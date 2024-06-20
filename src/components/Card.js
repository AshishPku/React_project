import React, { useState } from "react";
const Card = ({ items, deleteIterm, onchecking, deleteAll }) => {
  const [SortedBy, setSortedBy] = useState("input");
  let sortedItems;
  if (SortedBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else if (SortedBy === "number") {
    sortedItems = items.slice().sort((a, b) => a.quantity < b.quantity);
  } else {
    sortedItems = items;
  }
  return (
    <>
      <ul className="card">
        {sortedItems.map((item) => {
          return (
            <ul className="item">
              <div id={item.id}>
                <span>
                  <input
                    className="checktype"
                    type="checkbox"
                    value={0}
                    onChange={() => onchecking(item.id)}
                  />
                </span>
                <span className={item.isPacked === true ? "cross" : ""}>
                  {item.quantity} {item.description}
                </span>
                <span>
                  <button onClick={() => deleteIterm(item.id)}>&#x2716;</button>
                </span>
              </div>
            </ul>
          );
        })}
      </ul>
      <div
        className="SortingItems"
        onChange={(e) => setSortedBy(e.target.value)}
      >
        <select className="sortClass">
          <option value="input">Sort By Input</option>
          <option value="description">Sort By Description</option>
          <option value="number">Sort By NumberOfItems</option>
        </select>
        <button className="EraseList" onClick={() => deleteAll()}>
          Clear the list.
        </button>
      </div>
    </>
  );
};

export default Card;
