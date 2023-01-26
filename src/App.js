import React, { useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ContentPage from "./components/ContentPage";
import Loader from "./components/Loader";
import "./style.css";

const startUrl = "https://swapi.dev/api/";

export default function App() {
  const [currentData, setCurrentData] = useState(undefined);
  const [category, setCategory] = useState("");
  const [loader, setLoader] = useState(false);

  async function fetchFromUrl(url, category) {
    setLoader(true)
    const response = await fetch(url);
    const data = await response.json();
    setCategory(category);
    setCurrentData(data);
    setTimeout(() => {
      setLoader(false)
    }, 1000) 
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
      {loader && <Loader />}
    </div>
  );
}
