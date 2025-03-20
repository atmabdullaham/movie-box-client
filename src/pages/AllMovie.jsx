import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const AllMovie = () => {
  const movies = useLoaderData();
  return (
    <div className="grid grid-cols-3">
      {movies.map((movie) => (
        <Card key={movie._id} movie={movie}></Card>
      ))}
    </div>
  );
};

export default AllMovie;
