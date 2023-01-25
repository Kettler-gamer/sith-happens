export default function People(props) {
  function getMovieTitle(id) {
    switch (id) {
      case 4:
        return "The Phantom Menace";
      case 5:
        return "Attack of the Clones";
      case 6:
        return "Revenge of the Sith";
      case 1:
        return "A New Hope";
      case 2:
        return "The Empire Strikes Back";
      case 3:
        return "Return of the Jedi";
      default:
        return "Unkown";
    }
  }

  return (
    <div>
      <h3>Name: {props.info.name}</h3>
      <p>Gender: {props.info.gender}</p>
      <p>Height: {props.info.height} cm</p>
      <p>Weight: {props.info.mass} kg</p>
      <p>Hair color: {props.info.hair_color}</p>
      <p>Skin color: {props.info.skin_color}</p>
      <p>Eye color: {props.info.eye_color}</p>
      <p>Birth year: {props.info.birth_year}</p>
      <p>Films:</p>
      <ul>
        {props.info.films.map((element, index) => {
          return (
            <li key={`${index}${props.info.name}`}>
              {getMovieTitle(
                Number(
                  element.substring(element.length - 2, element.length - 1)
                )
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
