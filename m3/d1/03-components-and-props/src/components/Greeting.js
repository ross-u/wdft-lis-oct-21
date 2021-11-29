function Greeting(props) {
  const message = "Hello Sarah";

  console.log("props", props);

  return (
    <div>
      <u>Hello {props.firstName}</u>
    </div>
  );
}

export default Greeting;
