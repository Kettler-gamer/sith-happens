export default function Menu(props) {
  return (
    <div className="menu-container">
      <button
        onClick={() => {
          props.handleClick("people");
        }}>
        People
      </button>
      <button
        onClick={() => {
          props.handleClick("starships");
        }}>
        Starships
      </button>
      <button
        onClick={() => {
          props.handleClick("vehicles");
        }}>
        Vehicles
      </button>
      <button
        onClick={() => {
          props.handleClick("films");
        }}>
        Films
      </button>
      <button
        onClick={() => {
          props.handleClick("planets");
        }}>
        Planets
      </button>
      <button
        onClick={() => {
          props.handleClick("species");
        }}>
        Species
      </button>
    </div>
  );
}
