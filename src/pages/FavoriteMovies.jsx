import { use, useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";

const FavoriteMovies = () => {
  const navigate = useNavigate();
  const myFavoriteMovie = useLoaderData();
  const [favoriteMovies, setFavoriteMovies] = useState(myFavoriteMovie)
  const user = useContext(AuthContext);
  const email = user.user.email;
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    if (myFavoriteMovie) {
      setLoading(false);
    }
  }, [myFavoriteMovie]);



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
          fetch(`https://movie-box-server.vercel.app/favorite/${email}/${id}`, {
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
                const remaining = favoriteMovies.filter(
                  (movie) => movie._id !== id
                  
                );
                setFavoriteMovies(remaining)
              }
            });
        }
      });
    };

  if (loading) {
    return<Loading></Loading>
  }
  return <div><h2 className="text-3xl text-center font-bold mb-5">My Favorite Movies</h2>
  <div className="text-white mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    
    {favoriteMovies.map((movie) => (
      <div key={movie._id} className="card w-auto bg-base-100 shadow-xl">
       
        <figure className="h-56 w-full relative">
        <img className="w-full h-full" src={movie.poster} alt="Poster" />
        <div className="bg-gray-900 absolute card-actions justify-start  p-1 rounded-xl flex items-center bottom-2 right-2" >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=LoSoc46PxwP6&format=png&color=000000" alt="" />
        <div className="font-winky">{`${Math.floor(movie.duration / 60)} ${Math.floor(movie.duration / 60) > 1 ? "hours" : "hour"}  ${movie.duration % 60 > 0? movie.duration % 60 : "" } ${movie.duration % 60>0 ? "minutes":""} ` }  </div>  
      </div>
      </figure>
        <div className="card-body font-winky text-black">
          
          <h2 className="card-title text-xl">{movie.title}</h2>
         < div className="card-actions justify-start mt-4">
        <div className="">  {movie.genre[0]}</div> 
      </div>
      <div className="card-actions justify-start mt-2 border-t-1 border-gray-300 pt-2 flex items-center" >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=nkGDoqzPxYM3&format=png&color=000000" alt="" />
        <div>{movie.releaseYear}</div> 
      </div>
      <div className="card-actions justify-start mt-2 border-t-1 border-gray-300 pt-2 flex items-center" >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=19295&format=png&color=000000" alt="" />
        <div className="">{movie.rating}</div>    
      </div>
         
          <div className="card-actions justify-end">
            <button className="btn  bg-transparent   rounded-2xl border-0 border-b-2 border-yellow-300  hover:text-blue-100 text-lg text-gray-900 hover:bg-gray-800 shadow-none hover:border-0" 
            onClick={() => handleDelete(movie._id)}>Delete</button>
          </div>
        </div>
      </div>
    ))}
  </div>;</div>
  
};

export default FavoriteMovies;
