import { useContext } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MovieDetails = () => {
  const navigate = useNavigate();
  const movie = useLoaderData();
  const user = useContext(AuthContext);
  const { _id, ...fMovie } = movie;

  const { poster, title, genre, duration, releaseYear, rating, summary} = movie;
  const durationInHours = Math.floor(duration / 60);  
  const remainingMinutes = duration % 60;
    

  // console.log(movie);
  const handleFavorite = (fMovie, user) => {
    const email = user.user.email;
    const fMovieWithEmail = { ...fMovie, email };
    // console.log(fMovieWithEmail);
    //
    fetch("https://movie-box-server.vercel.app/favorite", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fMovieWithEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
        // console.log("delete confirm", id);
        fetch(`https://movie-box-server.vercel.app/movie/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
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
      <figure className="lg:w-1/2 relative ">  
        <img src={movie.poster} alt="Album" />
        <div className="bg-gray-900 text-white absolute lg:hidden justify-start  p-1 rounded-xl flex items-center bottom-2 right-2" >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=LoSoc46PxwP6&format=png&color=000000" alt="" />
        <div className="font-winky">{`${durationInHours} ${durationInHours >1 ? "hours" : "hour"}  ${remainingMinutes >0? remainingMinutes : "" } ${remainingMinutes>0 ? "minutes":""} ` }  </div>  
      </div>
      </figure>
      <div className="card-body font-winky">
        <h2 className="card-title text-xl">{title}</h2>
        <div className="card-actions justify-start mt-4">
        <div className="">  {genre[0]}</div> 
      </div>
     

          
      <div className="card-actions justify-start mt-2 border-t-1 border-gray-200 pt-4 flex items-center" >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=nkGDoqzPxYM3&format=png&color=000000" alt="" />
        <div>{releaseYear}</div> 
      </div>
      <div className="hidden lg:flex card-actions justify-start mt-2 border-t-1 border-gray-200 pt-4  items-center" >
      <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=LoSoc46PxwP6&format=png&color=000000" alt="" />
      <div className="font-winky">{`${durationInHours} ${durationInHours >1 ? "hours" : "hour"}  ${remainingMinutes >0? remainingMinutes : "" } ${remainingMinutes>0 ? "minutes":""} ` }  </div>  
      </div>
     
      <div className="card-actions justify-start mt-2 border-t-1 border-gray-200 pt-4 flex items-center" >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=19295&format=png&color=000000" alt="" />
        <div className="">{rating}</div>    
      </div>
      <div className="card-actions justify-start mt-2 border-t-1 border-gray-200 pt-4 flex items-center" >
        
        <div className="">{summary}</div>    
      </div>

        
      


      {/* buttons */}
      <div className="card-actions flex flex-col md:flex-row justify-center  items-start gap-4 pt-4 md:justify-end ">
          <button
            className="btn  border-b-2 border-yellow-300   rounded-2xl border-0   hover:text-blue-100 text-lg text-gray-900 hover:bg-gray-800 shadow-none hover:border-0"
            onClick={() => handleDelete(movie._id)}
          >
            Delete Movie
          </button>
          <button
            className="btn   border-b-2 border-yellow-300  rounded-2xl border-0   hover:text-blue-100 text-lg text-gray-900 hover:bg-gray-800 shadow-none hover:border-0"
            onClick={() => {
              handleFavorite(fMovie, user);
            }}
          >
            Add to Favorite
          </button>
         <NavLink to={`/update/${movie._id}`} className="btn  bg-transparent   rounded-2xl border-0 border-b-2 border-yellow-300  hover:text-blue-100 text-lg text-gray-900 hover:bg-gray-800 shadow-none hover:border-0" >Update</NavLink>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
