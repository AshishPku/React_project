import React from "react";

const Stats = ({ items }) => {
  const num = items.length;
  if (!num) {
    return <p>Start preparing for your trip by adding items in the list.</p>;
  }
  const per = items.filter((item) => item.isPacked).length;
  const total = ((per / num) * 100).toFixed(2);
  return (
    <div className="stats">
      <em className="updates">
        {total == 100
          ? "You successfully finished you packing.Go for a trip"
          : `You have ${num} items in your list and you packed ${total}(%) from it.`}
      </em>
    </div>
  );
};

export default Stats;
