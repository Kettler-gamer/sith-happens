import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ContentPage from "./components/ContentPage";
import "./style.css";

const startUrl = "https://swapi.dev/api/";

export default function App(props) {
  const [currentData, setCurrentData] = useState(undefined);
  const mounted = useRef(false);

  async function fetchFromUrl(url) {
    const response = await fetch(url);
    const data = await response.json();
    setCurrentData(data);
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      if (props.category !== "") {
        fetchFromUrl(startUrl + props.category);
      }
    }
  });

  return (
    <div className="app-container">
      <Header />
      <Menu startUrl={startUrl} handleClick={fetchFromUrl} />
      <ContentPage
        startUrl={startUrl}
        data={currentData}
        category={props.category}
        fetchFromUrl={fetchFromUrl}
      />
    </div>
  );
}
