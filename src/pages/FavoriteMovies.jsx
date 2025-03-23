import { useLoaderData } from "react-router-dom";

const FavoriteMovies = () => {
  const myFavoriteMovie = useLoaderData();
  console.log(myFavoriteMovie);
  return <div>Favorite Movies</div>;
};

export default FavoriteMovies;
