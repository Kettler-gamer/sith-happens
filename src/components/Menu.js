export default function Menu(props) {
  return (
    <div className="menu-container">
      <button
        onClick={() => {
          props.handleClick(props.startUrl + "people", "people");
        }}>
        People
      </button>
      <button
        onClick={() => {
          props.handleClick(props.startUrl + "starships", "starships");
        }}>
        Starships
      </button>
      <button
        onClick={() => {
          props.handleClick(props.startUrl + "vehicles", "vehicles");
        }}>
        Vehicles
      </button>
      <button
        onClick={() => {
          props.handleClick(props.startUrl + "films", "films");
        }}>
        Films
      </button>
      <button
        onClick={() => {
          props.handleClick(props.startUrl + "planets", "planets");
        }}>
        Planets
      </button>
      <button
        onClick={() => {
          props.handleClick(props.startUrl + "species", "species");
        }}>
        Species
      </button>
    </div>
  );
}
