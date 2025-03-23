import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MovieDetails = () => {
  console.log(import.meta.env.VITE_apikey);
  const navigate = useNavigate();
  const movie = useLoaderData();
  console.log(movie);
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
    <div className="card lg:card-side bg-base-100 shadow-sm">
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
          <button className="btn btn-primary">Add to Favorite</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
