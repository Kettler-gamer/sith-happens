import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import ContentPage from "./components/ContentPage";
import "./style.css";

const startUrl = "https://swapi.dev/api/";

export default function App(props) {
  const [currentData, setCurrentData] = useState(undefined);
  const [loader, setLoader] = useState(false);
  const mounted = useRef(false);

  async function fetchFromUrl(url) {
    setLoader(true);
    const check = isUrlInCache(url);
    if (check.found) {
      setCurrentData(JSON.parse(check.data));
    } else {
      const response = await fetch(url);
      const data = await response.json();
      setCurrentData(data);
      window.localStorage.setItem(url, JSON.stringify(data));
    }
    setLoader(false);
  }

  function isUrlInCache(url) {
    for (let element in window.localStorage) {
      if (element === url) {
        return { found: true, data: window.localStorage[element] };
      }
    }
    return { found: false };
  }

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      if (props.category !== "") {
        fetchFromUrl(startUrl + props.category);
      }
      // window.localStorage.clear();
    }
  });

  return (
    <div className="app-container">
      <Header />
      <Menu startUrl={startUrl} handleClick={fetchFromUrl} />
      <ContentPage
        loader={loader}
        startUrl={startUrl}
        data={currentData}
        category={props.category}
        fetchFromUrl={fetchFromUrl}
      />
    </div>
  );
}
