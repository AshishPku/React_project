import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
const data = [
  { name: "Ashish", category: "human", place: "india", isOlder: true },
  { name: "Naresh", category: "human", place: "jharkhand", isOlder: false },
];
const App = () => {
  return (
    <>
      <Header />
      <Card value={data} />
    </>
  );
};

export default App;
