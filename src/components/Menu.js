import { Link } from "react-router-dom";

export default function Menu(props) {
  return (
    <div className="menu-container">
      <button>
        <Link
          to={"/people"}
          onClick={() => {
            props.handleClick(props.startUrl + "people", "people");
          }}>
          People
        </Link>
      </button>
      <button>
        <Link
          to={"/starships"}
          onClick={() => {
            props.handleClick(props.startUrl + "starships", "starships");
          }}>
          Starships
        </Link>
      </button>
      <button>
        <Link
          to={"/vehicles"}
          onClick={() => {
            props.handleClick(props.startUrl + "vehicles", "vehicles");
          }}>
          Vehicles
        </Link>
      </button>
      <button>
        <Link
          to={"/films"}
          onClick={() => {
            props.handleClick(props.startUrl + "films", "films");
          }}>
          Films
        </Link>
      </button>
      <button>
        <Link
          to={"/planets"}
          onClick={() => {
            props.handleClick(props.startUrl + "planets", "planets");
          }}>
          Planets
        </Link>
      </button>
      <button>
        <Link
          to={"/species"}
          onClick={() => {
            props.handleClick(props.startUrl + "species", "species");
          }}>
          Species
        </Link>
      </button>
    </div>
  );
}
