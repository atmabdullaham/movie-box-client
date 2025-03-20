import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movie = useLoaderData();
  console.log(movie);
  return <div>Movie Details</div>;
};

export default MovieDetails;
