import { Link, useNavigate } from "react-router-dom";

export function Students({ students }) {
  console.log(students);
  const navigate = useNavigate();
  return (
    <>
      <ul>
        {students.map((student) => (
          <li key={student.login.uuid}>
            <Link to={`/students/${student.login.uuid}`}>
              {student.name.title} {student.name.last}, {student.name.first}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
}
