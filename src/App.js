import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/Card";
import Stats from "./components/Stats";
const App = () => {
  const [items, setItem] = useState([]);
  const addnewItem = (item) => {
    setItem((items) => [...items, item]);
  };
  return (
    <>
      <Header />
      <Form onAddingItem={addnewItem} />
      <Card items={items} />
      <Stats />
    </>
  );
};

export default App;
