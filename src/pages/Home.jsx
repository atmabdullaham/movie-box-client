import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const moviesData = useLoaderData();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (moviesData) {
      const sortedMovies = [...moviesData].sort((a, b) => b.rating - a.rating);
      setMovies(sortedMovies);
    }
  }, [moviesData]);

  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Featured */}
      <div className="grid grid-cols-3">
        {movies.slice(0, 6).map((movie) => (
          <Card key={movie._id} movie={movie}></Card>
        ))}
      </div>
      <div className="flex justify-center">
        <NavLink to="/all-movies" className="btn w-1/2 btn-dash">
          <button>See All Movies</button>
        </NavLink>
      </div>
      {/* Extra one */}
      {/* Extra two */}
    </div>
  );
};

export default Home;
