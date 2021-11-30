import { useState } from 'react';


function StudentList() {
  // const students = ['Raissa', 'Yuri', 'Max', 'Clara', 'Pedro', 'Luis'];
  const [students, setStudents] = useState(['Raissa', 'Yuri', 'Max', 'Clara', 'Pedro', 'Luis'])

  return (
    <div className="list">
      <h2>Student List</h2>

      {/* 
      {
        students.map((studentName) => {
          return (
            <div>
              <p>Student: {studentName}</p>
            </div>)
        })
      } 
      */}

      {
        students.map((studentName, i) => (
          <div key={i} >
            <p>Student: {studentName}</p>
          </div>)
        )
      }

    </div>
  );
}

export default StudentList;