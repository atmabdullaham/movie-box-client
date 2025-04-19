import { use, useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const FavoriteMovies = () => {
  const navigate = useNavigate();
  const myFavoriteMovie = useLoaderData();
  const [favoriteMovies, setFavoriteMovies] = useState(myFavoriteMovie)
  const user = useContext(AuthContext);
  const email = user.user.email;
  console.log(user.user.email);
  console.log(myFavoriteMovie);
  const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("delete confirm", id);
          fetch(`http://localhost:5000/favorite/${email}/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                const remaining = favoriteMovies.filter(
                  (movie) => movie._id !== id
                  
                );
                setFavoriteMovies(remaining)
              }
            });
        }
      });
    };
  return <div><h2 className="text-3xl text-center font-bold mb-5">My Favorite Movies</h2>
  <div className="text-white mt-20 grid grid-cols-3 gap-4">
    
    {favoriteMovies.map((movie) => (
      <div key={movie._id} className="card w-96 bg-base-100 shadow-xl">
        <figure className="w-full h-56">
          <img
            className="w-full h-full object-cover"
            src={movie.poster}
            alt="Movie Poster"
           />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">{movie.title}</h2>
          <p className="text-black">Genre: {movie.genre}</p>
          <p className="text-black">Duration: {movie.duration}</p>
          <p className="text-black">Release Year: {movie.releaseYear}</p>
          <p className="text-black">Rating: {movie.rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" 
            onClick={() => handleDelete(movie._id)}>Delete</button>
          </div>
        </div>
      </div>
    ))}
  </div>;</div>
  
};

export default FavoriteMovies;
