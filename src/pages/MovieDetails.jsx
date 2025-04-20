import { useContext } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MovieDetails = () => {
  const navigate = useNavigate();
  const movie = useLoaderData();
  const user = useContext(AuthContext);
  const { _id, ...fMovie } = movie;

  console.log(movie);
  const handleFavorite = (fMovie, user) => {
    const email = user.user.email;
    const fMovieWithEmail = { ...fMovie, email };
    console.log(fMovieWithEmail);
    //
    fetch("http://localhost:5000/favorite", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fMovieWithEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Movie successfully added",
            icon: "success",
          });
        }
      });
  };
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
        fetch(`http://localhost:5000/movie/${id}`, {
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
              navigate("/");
            }
          });
      }
    });
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm mt-20">
      <figure>
        <img src={movie.poster} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            onClick={() => handleDelete(movie._id)}
          >
            Delete Movie
          </button>
          <button
            className="btn btn-primary"
            onClick={() => {
              handleFavorite(fMovie, user);
            }}
          >
            Add to Favorite
          </button>
         <NavLink to={`/update/${movie._id}`} className="btn" >Update</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
