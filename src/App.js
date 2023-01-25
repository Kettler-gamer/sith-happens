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

  async function fetchFromUrl(url) {
    const response = await fetch(url);
    const data = await response.json();
    setCurrentData(data);
  }

  return (
    <div className="app-container">
      <Header />
      <Menu handleClick={fetchTest} />
      <ContentPage
        startUrl={startUrl}
        data={currentData}
        category={category}
        fetchFromUrl={fetchFromUrl}
      />
    </div>
  );
}
