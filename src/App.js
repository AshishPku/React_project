import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/Card";
import Stats from "./components/Stats";
const initialItems = [
  { id: "1", description: "Food", isPacked: false, quantity: 3 },
  { id: "2", description: "Shocks", isPacked: false, quantity: 6 },
  {
    id: "3",
    description: "Toothpaste and Brush",
    isPacked: false,
    quantity: 5,
  },
  { id: "4", description: "Soap", isPacked: false, quantity: 1 },
  { id: "5", description: "Bag", isPacked: false, quantity: 7 },
  { id: "6", description: "Jacket", isPacked: false, quantity: 3 },
];
const App = () => {
  const [items, setItem] = useState(initialItems);
  const deleteAll = () => {
    const confirm = window.confirm("Are you sure to clear the list?");
    if (confirm) setItem((items) => []);
  };
  const addnewItem = (item) => {
    setItem((items) => [...items, item]);
  };
  const deleteAItem = (id) => {
    setItem((items) =>
      items.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const onCheck = (id) => {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  };

  return (
    <>
      <Header />
      <Form onAddingItem={addnewItem} />
      <Card
        items={items}
        deleteIterm={deleteAItem}
        onchecking={onCheck}
        deleteAll={deleteAll}
      />
      <Stats items={items} />
    </>
  );
};

export default App;
