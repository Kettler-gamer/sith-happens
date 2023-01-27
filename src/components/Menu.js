import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <div className="menu-container">
      <Link
        to={"/sith-happens/people"}
        onClick={() => {
          props.handleClick(props.startUrl + "people", "people");
        }}>
        <button>People</button>
      </Link>

      <Link
        to={"/sith-happens/starships"}
        onClick={() => {
          props.handleClick(props.startUrl + "starships", "starships");
        }}>
        <button>Starships</button>
      </Link>

      <Link
        to={"/sith-happens/vehicles"}
        onClick={() => {
          props.handleClick(props.startUrl + "vehicles", "vehicles");
        }}>
        <button>Vehicles</button>
      </Link>

      <Link
        to={"/sith-happens/films"}
        onClick={() => {
          props.handleClick(props.startUrl + "films", "films");
        }}>
        <button>Films</button>
      </Link>

      <Link
        to={"/sith-happens/planets"}
        onClick={() => {
          props.handleClick(props.startUrl + "planets", "planets");
        }}>
        <button>Planets</button>
      </Link>

      <Link
        to={"/sith-happens/species"}
        onClick={() => {
          props.handleClick(props.startUrl + "species", "species");
        }}>
        <button>Species</button>
      </Link>
    </div>
  );
}
