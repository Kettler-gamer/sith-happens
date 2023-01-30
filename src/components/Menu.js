import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <div className="menu-container">
      <Link
        to={"/sith-happens/people"}
        onClick={() => {
          props.handleClick(props.startUrl + "people/?page=1", "people");
        }}>
        <button>People</button>
      </Link>

      <Link
        to={"/sith-happens/starships"}
        onClick={() => {
          props.handleClick(props.startUrl + "starships/?page=1", "starships");
        }}>
        <button>Starships</button>
      </Link>

      <Link
        to={"/sith-happens/vehicles"}
        onClick={() => {
          props.handleClick(props.startUrl + "vehicles/?page=1", "vehicles");
        }}>
        <button>Vehicles</button>
      </Link>

      <Link
        to={"/sith-happens/films"}
        onClick={() => {
          props.handleClick(props.startUrl + "films/?page=1", "films");
        }}>
        <button>Films</button>
      </Link>

      <Link
        to={"/sith-happens/planets"}
        onClick={() => {
          props.handleClick(props.startUrl + "planets/?page=1", "planets");
        }}>
        <button>Planets</button>
      </Link>

      <Link
        to={"/sith-happens/species"}
        onClick={() => {
          props.handleClick(props.startUrl + "species/?page=1", "species");
        }}>
        <button>Species</button>
      </Link>
    </div>
  );
}
