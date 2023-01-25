export default function People(props) {
  return (
    <div className="card">
      <h3>Name: {props.info.name}</h3>
      <p>Gender: {props.info.gender}</p>
      <p>Height: {props.info.height}</p>
      <p>Weight: {props.info.mass} pounds</p>
      <p>Hair color: {props.info.hair_color}</p>
      <p>Skin color: {props.info.skin_color}</p>
      <p>Eye color: {props.info.eye_color}</p>
      <p>Birth year: {props.info.birth_year}</p>
      <p>Films: {props.info.films}</p>
    </div>
  );
}
