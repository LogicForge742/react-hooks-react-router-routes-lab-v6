import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {
  const { id: movieID } = useParams();
  const [movie, setMovie] = useState(null); // movie object data

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieID}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.error('Error fetching movie:', error));
  }, [movieID]);

  if (!movie) return <p>Loading...</p>; // Loading state

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {movie.genres && movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))}
      </main>
    </>
  );
}

export default Movie;





