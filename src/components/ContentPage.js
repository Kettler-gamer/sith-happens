export default function ContentPage(props) {
  return (
    <div>
      {props.data !== undefined && (
        <h1>{props.data.results.map((element) => element.name)}</h1>
      )}
    </div>
  );
}
