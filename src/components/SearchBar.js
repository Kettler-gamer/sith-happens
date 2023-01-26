import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  const [searchValues, setSearchValues] = useState({
    query: "",
    category: "people",
  });

  function onChange(event) {
    setSearchValues((prevValue) => {
      return { ...prevValue, query: event.target.value };
    });
    console.log(searchValues);
  }

  function onSearchClick() {
    const url = `${props.startUrl}${
      searchValues.category
    }/?search=${searchValues.query.toLowerCase()}`;

    props.fetchFromUrl(url);
  }

  return (
    <div className="search-bar">
      <select
        className="select"
        onChange={(event) => {
          setSearchValues((prevValue) => {
            return { ...prevValue, category: event.target.value };
          });
          console.log(searchValues);
        }}>
        <option value={"people"}>People</option>
        <option value={"starships"}>Starships</option>
        <option value={"vehicles"}>Vehicles</option>
        <option value={"films"}>Films</option>
        <option value={"planets"}>Planets</option>
        <option value={"species"}>Species</option>
      </select>
      <input
        className="search-input"
        placeholder="search for star wars stuff.."
        onChange={(event) => {
          onChange(event, "query");
        }}
        value={searchValues.name}
        type="text"
      />
      <Link to={"../" + searchValues.category}>
        <button className="search-button" onClick={onSearchClick}>
          Search
        </button>
      </Link>
    </div>
  );
}
