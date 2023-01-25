export default function Test(props) {
  function testing() {
    const arr = [];

    for (let index in props.info) {
      arr.push(
        <p>
          {index}: {props.info[index]}
        </p>
      );
    }

    return arr;
  }

  return <div>{testing()}</div>;
}
