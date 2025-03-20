import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({ movie }) => {
  const { _id, poster, title, genre, duration, releaseYear, rating, summary } =
    movie;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={poster} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{rating}</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="card-actions mt-4 text-center">
          <NavLink to={`/movie/${_id}`} className="btn ">
            Movie Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
