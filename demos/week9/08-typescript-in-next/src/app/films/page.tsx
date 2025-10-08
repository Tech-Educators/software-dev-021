import { filmsData } from "@/lib/filmsData";

export default function FilmsPage() {
  return (
    <>
      <h1>Films Page</h1>
      {filmsData.map((film) => {
        return (
          <div key={film.id}>
            <h1>{film.name}</h1>
            <h2>{film.director}</h2>
            {/* this property is optional, so even when rendering the data, it's ignored when the property does not exist in the object */}
            <p>Release Year: {film.releaseYear}</p>
          </div>
        );
      })}
    </>
  );
}
