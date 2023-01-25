import Card from "./Card";

export default function ContentPage(props) {
  console.log(props)
  const person = props.data !== undefined ? props.data.results.map((element) => <Card info={element} />) : <p></p>
  
  return (
    <div>
      {person}
    </div>
  );
}
