import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ContentPage from "./components/ContentPage";
import "./style.css";

const startUrl = "https://swapi.dev/api/";

export default function App() {
  const [currentData, setCurrentData] = useState(undefined);
  const [category, setCategory] = useState("");

  async function fetchTest(category) {
    const response = await fetch(startUrl + category);
    const data = await response.json();
    setCategory(category);
    setCurrentData(data);
  }

  return (
    <div>
      <Header />
      <Menu handleClick={fetchTest} />
      <ContentPage data={currentData} category={category} />
    </div>
  );
}
