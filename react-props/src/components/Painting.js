import { Description } from "./Description";

export function Painting({ art }) {
  const { primaryImage } = art;

  //   console.log(primaryImage);
  return (
    <>
      <div className="picture-wrapper">
        <img className="picture" src={primaryImage} alt="" />
        <Description {...art} />
      </div>
    </>
  );
}
