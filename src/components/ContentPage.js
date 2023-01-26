import Card from "./Card";
import SearchBar from "./SearchBar";

export default function ContentPage(props) {
  // console.log(props.data);

  const arrows = props.data !== undefined && (
    <div>
      {props.data.previous !== null && (
        <button
          onClick={() => {
            props.fetchFromUrl(props.data.previous);
          }}>
          Previous
        </button>
      )}
      {props.data.next !== null && (
        <button
          onClick={() => {
            props.fetchFromUrl(props.data.next);
          }}>
          Next
        </button>
      )}
      <p>Results: {props.data.count}</p>
    </div>
  );

  const cards =
    props.data !== undefined && Array.isArray(props.data.results)
      ? props.data.results.map((element, index) => (
          <Card key={index} category={props.category} info={element} />
        ))
      : props.data !== undefined &&
        props.data.results.results.map((element, index) => (
          <Card key={index} category={props.category} info={element} />
        ));

  return (
    <div className="card-container">
      <SearchBar startUrl={props.startUrl} fetchFromUrl={props.fetchFromUrl} />
      {arrows}
      {cards}
      {arrows}
    </div>
  );
}
