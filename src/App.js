import React, { useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import AddFriend from "./components/AddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
const data = [
  {
    id: 0,
    name: "Ashish",
    image:
      "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=300",
    balance: 0,
  },
  {
    id: 2,
    name: "Kartik",
    image:
      "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=300",
    balance: -120,
  },
  {
    id: 3,
    name: "Aman",
    image:
      "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=300",
    balance: 140,
  },
  {
    id: 4,
    name: "Naveen",
    image:
      "https://images.pexels.com/photos/914472/pexels-photo-914472.jpeg?auto=compress&cs=tinysrgb&w=300",
    balance: 500,
  },
  // {
  //   id: 5,
  //   name: "Naresh",
  //   image:
  //     "https://images.pexels.com/photos/1452128/pexels-photo-1452128.jpeg?auto=compress&cs=tinysrgb&w=300",
  //   balance: 600,
  // },
  // {
  //   id: 6,
  //   name: "Abhishek",
  //   image:
  //     "https://images.pexels.com/photos/632700/pexels-photo-632700.jpeg?auto=compress&cs=tinysrgb&w=300",
  //   balance: 754,
  // },
  // {
  //   id: 0,
  //   name: "Ankush",
  //   image:
  //     "https://images.pexels.com/photos/452558/pexels-photo-452558.jpeg?auto=compress&cs=tinysrgb&w=300",
  //   balance: 100,
  // },
  // {
  //   id: 8,
  //   name: "Arvind",
  //   image:
  //     "https://images.pexels.com/photos/769730/pexels-photo-769730.jpeg?auto=compress&cs=tinysrgb&w=300",
  //   balance: 8,
  // },
  // {
  //   id: 9,
  //   name: "Kunal",
  //   image:
  //     "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=300",
  //   balance: 57,
  // },
  // {
  //   id: 10,
  //   name: "Om",
  //   image:
  //     "https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=300",
  //   balance: 345,
  // },
  // {
  //   id: 11,
  //   name: "Yuvraj",
  //   image:
  //     "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=300",
  //   balance: 75,
  // },
  // {
  //   id: 12,
  //   name: "Prince",
  //   image:
  //     "https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&w=300",
  //   balance: 45,
  // },
];
const App = () => {
  const [formAddFriend, setFormAddFriend] = useState(false);
  const [allfriend, setAllFriend] = useState(data);
  const handleAddFriend = () => {
    setFormAddFriend((x) => !x);
  };
  const handlenewFriend = (newFriend) => {
    setAllFriend((allfriend) => [...allfriend, newFriend]);
    setFormAddFriend(false);
  };

  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleSelection = (friend) => {
    setSelectedFriend((curr) => (curr?.id === friend.id ? null : friend));
    setFormAddFriend(false);
  };
  const handleSplitBill = (value) => {
    console.log(value);
    setAllFriend((allfriend) =>
      allfriend.map((e) =>
        e.id === selectedFriend?.id
          ? { ...e, balance: Number(e.balance) + value }
          : e
      )
    );
  };
  return (
    <>
      <Header />
      <Card
        data={allfriend}
        onSelection={handleSelection}
        selectedFriend={selectedFriend}
      />
      {formAddFriend && <AddFriend handlenewFriend={handlenewFriend} />}
      <Button onClick={handleAddFriend}>
        {formAddFriend === false ? "Add Friend" : "Close"}
      </Button>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
        />
      )}
    </>
  );
};

export default App;
