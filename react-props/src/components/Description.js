export function Description({ ...art }) {
  const { artistDisplayName, title, objectBeginDate } = { ...art };

  // console.log({ ...art });
  return (
    <>
      <div className="description">
        <p>{artistDisplayName}</p>
        <p>{title}</p>
        <p>{objectBeginDate}</p>
      </div>
    </>
  );
}
