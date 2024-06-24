import React, { useState } from "react";
import Button from "./Button";
const AddFriend = ({ handlenewFriend }) => {
  const [name, setName] = useState("");
  const [image, setImgUrl] = useState("https://i.pravatar.cc/48");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    if (!image) return;
    const id = crypto.randomUUID;
    const data = {
      id: id,
      name: name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    handlenewFriend(data);
    setName("");
    setImgUrl("https://i.pravatar.cc/48");
  };
  return (
    <div className="add-friend">
      <form>
        <div>
          <label>Friend Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(() => e.target.value)}
          />
        </div>
        <div>
          <label>Image url: </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImgUrl(() => e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit}>Add</Button>
      </form>
    </div>
  );
};

export default AddFriend;
