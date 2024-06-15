import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
const data = [
  { name: "ashish", category: "human", place: "india" },
  { name: "Naresh", category: "human", place: "jharkhand" },
];
const App = () => {
  return (
    <div>
      <Header />
      <Card value={data} />
    </div>
  );
};

export default App;