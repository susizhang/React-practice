import arts from "../art.json";
import { Painting } from "./Painting";
console.log(arts);

export function Gallery() {
  return (
    <>
      <div className="gallery">
        {arts.map((art, GalleryNumber) => (
          <Painting art={art} key={GalleryNumber} />
        ))}
      </div>
    </>
  );
}
