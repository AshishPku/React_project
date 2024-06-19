import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/Card";
import Stats from "./components/Stats";
const initialItems = [
  { id: "1", description: "thing1", isPacked: false, quantity: 3 },
  { id: "2", description: "thing2", isPacked: false, quantity: 6 },
  { id: "3", description: "thing3", isPacked: false, quantity: 5 },
  { id: "4", description: "thing4", isPacked: false, quantity: 1 },
  { id: "5", description: "thing5", isPacked: false, quantity: 7 },
  { id: "6", description: "thing6", isPacked: false, quantity: 3 },
];
const App = () => {
  const [items, setItem] = useState(initialItems);
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
      <Card items={items} deleteIterm={deleteAItem} onchecking={onCheck} />
      <Stats items={items} />
    </>
  );
};

export default App;
