import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";

const AddMovie = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {

    setRating(rate);
  };
  const handleAddMovie = (event) => {
    event.preventDefault();
    const form = event.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
   
    const summary = form.summary.value;

    if (!/^https?:\/\/.+/.test(poster)) {
      toast.error("Invalid poster URL");
      return;
    }
    if (title.trim().length < 2) {
      toast.error("Title must be at least 2 characters");
      return;
    }
    if (!duration || duration < 60) {
      toast.error("Duration must be at least 60 minutes");
      return;
    }
    if(rating === 0) {
      toast.error("Please select a rating");
      return;
    }
    if (summary.trim().length < 10) {
      toast.error("Summary must be at least 10 characters");
      return;
    }
    const newMovie = {
      poster,
      title,
      genre: [genre],
      duration,
      releaseYear,
      rating,
      summary,
    };
 

    fetch("https://movie-box-server.vercel.app/movie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
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
  return (
    <div className="max-w-xl mx-auto bg-base-100 shadow-lg rounded-lg p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center"> Add New Movie</h2>
      <form onSubmit={handleAddMovie} className="space-y-4">
        <input
          type="text"
          name="poster"
          placeholder="Movie Poster URL"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          className="input input-bordered w-full"
          required
        />

        <select
          defaultValue="Pick a color"
          className="select w-full"
          name="genre"
        >
          <option disabled={true}>Choose Genre</option>
          <option>Animation</option>
          <option>Biography</option>
          <option>Documentary</option>
          <option>Fantasy</option>
          <option>Musical</option>
          <option>Mystery</option>
          <option>Romance</option>
          <option>Science Fiction</option>
          <option>Sports</option>
          <option>War</option>
          <option>Western</option>
          <option>Crime</option>
          <option>Family</option>
          <option>Historical</option>
          <option>Superhero</option>
        </select>

        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          className="input input-bordered w-full"
          required
        />
        <select
          defaultValue="Pick a color"
          className="select w-full"
          name="releaseYear"
        >
          <option disabled={true}>Select Year</option>
          <option>2001</option>
          <option>2002</option>
          <option>2003</option>
          <option>2004</option>
          <option>2005</option>
          <option>2006</option>
          <option>2007</option>
          <option>2008</option>
          <option>2009</option>
          <option>2010</option>
          <option>2011</option>
          <option>2012</option>
          <option>2013</option>
          <option>2014</option>
          <option>2015</option>
          <option>2016</option>
          <option>2017</option>
          <option>2018</option>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
        </select>
        <div>
  <Rating
    onClick={handleRating}
    SVGstyle={{ display: 'inline-block' }}
    size={30}
    allowHover
    transition
    fillColor="gold"
    emptyColor="#ccc"
    required={true}
    showTooltip={true}
    allowFraction={true}
    initialValue={rating}
    iconsCount={10}
  
  />
</div>

        <textarea
          name="summary"
          placeholder="Movie Summary"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <button type="submit" className="btn  bg-transparent   rounded-2xl border-0 border-b-2 border-yellow-300  hover:text-blue-100 text-lg text-gray-900 hover:bg-gray-800 shadow-none hover:border-0 w-full">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;