import React, { useState, useEffect, useRef } from "react";

export default function People(props) {
  const [starShips, setStarships] = useState(undefined);
  const [vehicles, setVehicles] = useState(undefined);
  const mounted = useRef(false);

  function getMovieTitle(id) {
    switch (id) {
      case 4:
        return "The Phantom Menace";
      case 5:
        return "Attack of the Clones";
      case 6:
        return "Revenge of the Sith";
      case 1:
        return "A New Hope";
      case 2:
        return "The Empire Strikes Back";
      case 3:
        return "Return of the Jedi";
      default:
        return "Unkown";
    }
  }

  async function getNameFromLink(link) {
    const response = await fetch(link);
    const data = await response.json();
    return data.name;
  }

  async function getNamesFromList(array, callback) {
    const arr = [];
    for (let link of array) {
      arr.push(await getNameFromLink(link));
    }
    callback(arr);
  }
  //eslint-disable-next-line
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      getNamesFromList(props.info.starships, setStarships);
      getNamesFromList(props.info.vehicles, setVehicles);
    }
  });

  return (
    <div className="card">
      <h3>Name: {props.info.name}</h3>
      <p>Gender: {props.info.gender}</p>
      <p>Height: {props.info.height} cm</p>
      <p>Weight: {props.info.mass} kg</p>
      <p>Hair color: {props.info.hair_color}</p>
      <p>Skin color: {props.info.skin_color}</p>
      <p>Eye color: {props.info.eye_color}</p>
      <p>Birth year: {props.info.birth_year}</p>
      <p>Films:</p>
      {props.info.films !== undefined && (
        <ul>
          {props.info.films.map((element, index) => {
            return (
              <li key={`${index}${props.info.name}`}>
                {getMovieTitle(
                  Number(
                    element.substring(element.length - 2, element.length - 1)
                  )
                )}
              </li>
            );
          })}
        </ul>
      )}
      {props.info.starships !== undefined &&
        props.info.starships.length > 0 && <p>Starships:</p>}
      {props.info.starships !== undefined && starShips !== undefined && (
        <ul>
          {starShips.map((element, index) => (
            <li key={element + index}>{element}</li>
          ))}
        </ul>
      )}
      {props.info.vehicles !== undefined &&
        props.info.vehicles.length > 0 && <p>vehicles:</p>}
      {props.info.vehicles !== undefined && vehicles !== undefined && (
        <ul>
          {vehicles.map((element, index) => (
            <li key={element + index}>{element}</li>
          ))}
        </ul>
      )}
    </div>
  );
}