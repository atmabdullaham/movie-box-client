import React from "react";

const Card = ({ movie }) => {
  const { poster, title, genre, duration, releaseYear, rating, summary } =
    movie;
  console.log(movie);
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
      </div>
    </div>
  );
};

export default Card;
