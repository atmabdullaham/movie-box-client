import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ movie }) => {
  const { _id, poster, title, genre, duration, releaseYear, rating, summary } =
    movie;

  return (
    <div className="card bg-gray-800 w-auto shadow-sm text-white">
      <figure className="h-56 w-full">
        <img className="w-full" src={poster} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{rating}</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="card-actions mt-4 text-center">
          <NavLink
            to={`/movie/${_id}`}
            className="btn bg-transparent   rounded-2xl border-0  hover:text-blue-100 text-lg text-yellow-500 hover:bg-gray-800 shadow-none hover:border-0"
          >
            Movie Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
