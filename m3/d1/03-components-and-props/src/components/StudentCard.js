function StudentCard(props) {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>
        <b>Name: {props.name} </b>
      </p>
      <p>
        <b>Cohort: {props.info.course}</b>
      </p>
      <p>
        <b>Current Week: {props.week} </b>
      </p>
    </div>
  );
}

export default StudentCard;
