import { useParams, useNavigate, Link } from "react-router-dom";

export function StudentDetail({ students }) {
  const navigate = useNavigate();
  const { someId } = useParams();
  // console.log(someId);

  const selectedStudent = students.find((student) => {
    return someId === student.login.uuid;
  });

  // console.log(selectedStudent);

  return (
    <>
      {selectedStudent && (
        <div>
          <img
            src={selectedStudent.picture.large}
            alt={selectedStudent.name.last}
          />
          <div>{selectedStudent.name.last}</div>
          <br />
          <Link to={`/results/${selectedStudent.login.uuid}`}>Results</Link>
          <button onClick={() => navigate(-1)}>Go back</button>
        </div>
      )}
    </>
  );
}
