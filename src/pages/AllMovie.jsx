import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import {  useEffect, useState } from "react";
import Loading from "./Loading";

const AllMovie = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://movie-box-server.vercel.app/movie?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => 
        setMovies(data));
      setLoading(false);
  }, [search]);

  if (loading) {
    return <Loading></Loading>
  }
  return (
    
    <div className="mt-20">
      <div className="flex justify-center"><input className="input input-warning " onChange={(e)=>setSearch(e.target.value)} type="text" name="search" placeholder="Search Movies" required/></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-3 my-4">
      
      {movies.map((movie) => (
        <Card key={movie._id} movie={movie}></Card>
      ))}
    </div>
    </div>
  );
};

export default AllMovie;
