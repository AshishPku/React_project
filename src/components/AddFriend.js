import React from "react";
import Button from "./Button";
const AddFriend = ({ setFormAddFriend }) => {
  return (
    <div className="add-friend">
      <form>
        <div>
          <label>Friend Name: </label>
          <input type="text" />
        </div>
        <div>
          <label>Image url: </label>
          <input type="text" />
        </div>
        <Button>Add</Button>
      </form>
    </div>
  );
};

export default AddFriend;
