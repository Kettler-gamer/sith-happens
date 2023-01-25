import React from "react";
import People from "./People";
import Starships from "./Starships";
import Vehicles from "./Vehicles";
import Film from "./Film";

export default function Card(props) {
  console.log(props.info);
  return props.category === "people" ? (
    <People info={props.info} />
  ) : (
    props.category === "starships" && <Starships info={props.info} />
  );
}
