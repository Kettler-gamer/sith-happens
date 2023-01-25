import Card from "./Card";

export default function ContentPage(props) {
  // console.log(props);
  const cards =
    props.data !== undefined ? (
      props.data.results.map((element, index) => (
        <Card key={index} category={props.category} info={element} />
      ))
    ) : (
      <p></p>
    );

  return <div className="card-container">{cards}</div>;
}
