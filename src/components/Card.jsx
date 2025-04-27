
import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Card = ({ movie }) => {
  const { _id, poster, title, genre, duration, releaseYear, rating, summary } =
    movie;

    const durationInHours = Math.floor(duration / 60);

    const remainingMinutes = duration % 60;


  return (
    <div className="card bg-gray-800 w-auto shadow-sm text-white ">
      <figure className="h-56 w-full relative">
        <img className="w-full" src={poster} alt="Poster" />
        <div className="bg-gray-900 absolute card-actions justify-start  p-1 rounded-xl flex items-center bottom-2 right-2" >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=LoSoc46PxwP6&format=png&color=000000" alt="" />
        <div className="font-winky">{`${durationInHours} ${durationInHours >1 ? "hours" : "hour"}  ${remainingMinutes >0? remainingMinutes : "" } ${remainingMinutes>0 ? "minutes":""} ` }  </div>  
      </div>
      </figure>
     
      <div className="card-body font-winky">
        <h2 className="card-title text-xl">{title}</h2>
      <div className="card-actions justify-start mt-4">
        <div className="">  {genre[0]}</div> 
      </div>
     

          
      <div className="card-actions justify-start mt-2 border-t-1 border-gray-600 pt-4 flex items-center" >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=nkGDoqzPxYM3&format=png&color=000000" alt="" />
        <div>{releaseYear}</div> 
      </div>
     
      <div className="card-actions justify-start mt-2 border-t-1 border-gray-600 pt-4 flex items-center" >
        <img className="w-6 h-6" src="https://img.icons8.com/?size=100&id=19295&format=png&color=000000" alt="" />
        <div className="">{rating}</div>    
      </div>

      <div className="card-actions mt-4 text-center">
          <NavLink
            to={`/movie/${_id}`}
            className="btn bg-transparent   rounded-2xl border-0 pl-0  hover:text-blue-100 text-lg text-yellow-500 hover:bg-gray-800 shadow-none hover:border-0"
          >
            Movie Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
