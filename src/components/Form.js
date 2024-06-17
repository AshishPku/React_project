import React, { useState } from "react";
let data = [];
const Form = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description: description,
      quantity: quantity,
      isPacked: false,
      id: Date.now(),
    };
    setDescription("");
    setQuantity(1);
  };
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="message">
          Things that you need for your trip? Mark it.
        </h2>
        <select
          className="items"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => {
            return (
              <option key={i} value={i}>
                {i}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Items...."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="button">ADD</button>
      </form>
      <div>
        {data.map((e) => {
          return (
            <div>
              <p>{e.description}</p>
              <p>{e.quantity}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Form;
