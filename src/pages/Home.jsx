import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movieList,setmovieList] =useState([])
  useEffect (() =>{
    fetch("http://localhost:4000/movies")
    .then ((res) => res.json())
    .then((movies) =>setmovieList(movies))
        
  })
  const ListMovies = movieList.map((movie) =>
  <MovieCard key={movie.id}   movie={movie}/>
  )
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <h1>Home Page</h1> 
        {ListMovies}
      </main>
    </>
  );
};

export default Home;
