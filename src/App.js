import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ContentPage from "./components/ContentPage";

const startUrl = "https://swapi.dev/api/";

export default function App() {
  const [currentData, setCurrentData] = useState(undefined);

  async function fetchTest(category) {
    const response = await fetch(startUrl + category);
    const data = await response.json();
    setCurrentData(data);
  }


  return (
    <div>
      <Header />
      <Menu handleClick={fetchTest} />
      <ContentPage data={currentData} />
    </div>
  );
}
