import React from "react";
import Button from "./Button";
const FormSplitBill = ({ friend }) => {
  return (
    <div className="form-split">
      <h3>Split bill with {friend.name}</h3>
      <form>
        <div>
          <label>Bill Value</label>
          <input type="number" />
        </div>
        <div>
          <label>Your expense:</label>
          <input type="number" />
        </div>
        <div>
          <label>{friend.name} expense:</label>
          <input type="text" disabled />
        </div>
        <div>
          <label>Who is paying the bill!</label>
          <select>
            <option>You</option>
            <option>{friend.name}</option>
          </select>
        </div>
        <Button>Split Bill</Button>
      </form>
    </div>
  );
};

export default FormSplitBill;
