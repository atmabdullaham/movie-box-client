import { NavLink } from "react-router-dom";

const Card = ({ movie }) => {
  const { _id, poster, title, genre, duration, releaseYear, rating, summary } =
    movie;

  const durationInHours = Math.floor(duration / 60);

  const remainingMinutes = duration % 60;

  return (
    <div className="group bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
      {/* Image Container */}
      <figure className="relative h-72 w-full overflow-hidden bg-gray-950">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          src={poster}
          alt={title}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Duration Badge */}
        <div className="absolute top-3 right-3 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-semibold text-sm flex items-center gap-1">
          <span>⏱️</span>
          <span>{`${durationInHours}h ${remainingMinutes > 0 ? `${remainingMinutes}m` : ""}`}</span>
        </div>

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full font-bold text-sm">
          ⭐ {rating}
        </div>
      </figure>

      {/* Content Container */}
      <div className="p-4 text-white">
        {/* Title */}
        <h2 className="text-lg font-bold mb-3 line-clamp-2 group-hover:text-yellow-400 transition-colors duration-200">
          {title}
        </h2>

        {/* Genre & Year Row */}
        <div className="flex justify-between items-center mb-3 text-sm text-gray-300">
          <span className="bg-gray-700 px-2 py-1 rounded text-yellow-400 font-semibold">
            {genre[0]}
          </span>
          <span className="text-gray-400">{releaseYear}</span>
        </div>

        {/* Summary Preview */}
        <p className="text-xs text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-200">
          {summary}
        </p>

        {/* Button */}
        <NavLink
          to={`/movie/${_id}`}
          className="w-full py-2 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-gray-900 font-bold rounded-lg transition-all duration-300 text-center block text-sm"
        >
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
