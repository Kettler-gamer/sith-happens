import Card from "./Card";

export default function ContentPage(props) {
  console.log(props.data);

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
    props.data !== undefined &&
    props.data.results.map((element, index) => (
      <Card key={index} category={props.category} info={element} />
    ));

  return (
    <div className="card-container">
      {arrows}
      {cards}
      {arrows}
    </div>
  );
}
