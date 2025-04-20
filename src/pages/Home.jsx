import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import ClassicMovies from "../components/ClassicMovies";
import AwardWinningFilms from "../components/AwardWinningFilms";


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
    <div className="mt-20">
      {/* Banner */}
      <Banner></Banner>
      {/* Featured */}
      <h1 className="text-yellow-300 font-bold font-winky text-4xl pt-6">
        Featured Movies
      </h1>
      <div className="grid grid-cols-3 gap-3 my-4">
        {movies.slice(0, 6).map((movie) => (
          <Card key={movie._id} movie={movie}></Card>
        ))}
      </div>
      <div className="flex justify-center ">
        <NavLink to="/all-movies" className=" btn   rounded-2xl border-0  text-blue-100 text-lg hover:text-yellow-500 hover:bg-gray-800 shadow-none hover:border-0 btn w-1/6  bg-gray-800 text-white border-0 hover:bg-gray-700 border-0 shadow-none"> 
          See All Movies
        </NavLink>
      </div>
      {/* Extra one */}
      <ClassicMovies></ClassicMovies>
      {/* Extra two */}
      <AwardWinningFilms></AwardWinningFilms>
    </div>
  );
};

export default Home;
