import React from "react";
import People from "./People";
import Starships from "./Starships";
// import Vehicles from "./Vehicles";
import Film from "./Film";
import Planets from "./Planets";
import Species from "./Species";
// import Test from "./Test";

export default function Card(props) {
  return props.category === "people" ? (
    <People info={props.info} />
  ) : props.category === "starships" || props.category === "vehicles" ? (
    <Starships info={props.info} />
  ) : props.category === "films" ? (
    <Film info={props.info} />
  ) : props.category === "planets" ? (
    <Planets info={props.info} />
  ) : (
    props.category === "species" && <Species info={props.info} />
  );
}
