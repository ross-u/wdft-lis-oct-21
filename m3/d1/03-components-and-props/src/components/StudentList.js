function StudentList(props) {
  return (
    <div style={{ padding: "20px", background: 'cornflowerblue', border: "2px solid black"}}>
      <h2>Student List</h2>
 
      
      {props.children}

    </div>
  )
}

export default StudentList;