import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ContentPage from "./components/ContentPage";
import "./style.css";

const startUrl = "https://swapi.dev/api/";

export default function App() {
  const [currentData, setCurrentData] = useState(undefined);
  const [category, setCategory] = useState("");

  async function fetchFromUrl(url, category) {
    const response = await fetch(url);
    const data = await response.json();
    setCategory(category);
    setCurrentData(data);
  }

  return (
    <div className="app-container">
      <Header />
      <Menu startUrl={startUrl} handleClick={fetchFromUrl} />
      <ContentPage
        startUrl={startUrl}
        data={currentData}
        category={category}
        fetchFromUrl={fetchFromUrl}
      />
    </div>
  );
}
