export function Results({ students, subjects }) {
  console.log(students);

  return (
    <>
      <ul>
        {students.map((student) => (
          <li key={student.login.uuid}>
            <div>
              {student.name.title} {student.name.last}, {student.name.first}
            </div>
            <div>
              Grades:
              {subjects.map((subject) => (
                <div>{`${subject}: ${Math.ceil(Math.random() * 100)}`}</div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
