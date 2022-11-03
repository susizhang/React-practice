import Basics2 from "./Basics2";

function Basics({ myString, ...rest }) {
  /*
const props = {
  myString: "Hello World",
  myNumber: 12,
  myObj: {name: "karl", city: "berlin"}
}
*/

  // console.log(props);
  // console.log(props.myString);

  // const {
  //   myString,
  //   myNumber,
  //   myObj: { city }
  // } = props;

  return (
    <div>
      <p>{myString}</p>
      <Basics2 {...rest} />
    </div>
  );
}

export default Basics;
