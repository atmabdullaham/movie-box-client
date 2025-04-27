import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Rating } from 'react-simple-star-rating';
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedData = useLoaderData()
  // console.log(loadedData);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      poster: loadedData.poster,
      title: loadedData.title,
      genre: loadedData.genre[0],
      duration: loadedData.duration,
      releaseYear: loadedData.releaseYear,
      summary: loadedData.summary,
    },
  });
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onSubmit = (data) => {
    
    if (rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    const updateMovie = {
      ...data,
      genre: [data.genre],
      rating,
    };
console.log(updateMovie);
 
    fetch(`https://movie-box-server.vercel.app/update/${loadedData._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Movie successfully updated",
            icon: "success",
          });
        
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto bg-base-100 shadow-lg rounded-lg p-6 mt-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Update Movie</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input
          type="text"
          placeholder="Movie Poster URL"
          className="input input-bordered w-full"
          {...register("poster", {
            required: true,
            pattern: /^https?:\/\/.+/
          })}
        />
        {errors.poster && <p className="text-red-500 text-sm">Valid URL required</p>}

        <input
          type="text"
          placeholder="Movie Title"
          className="input input-bordered w-full"
          {...register("title", {
            required: true,
            minLength: 2,
          })}
        />
        {errors.title && <p className="text-red-500 text-sm">Title must be at least 2 characters</p>}
        
        <select
          className="select w-full"
          {...register("genre", { required: true })}
        >
          <option disabled value="">Choose Genre</option>
          <option value="Animation">Animation</option>
        <option value="Biography">Biography</option>
        <option value="Documentary">Documentary</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Musical">Musical</option>
          <option value="Mystery">Mystery</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Sports">Sports</option>
          <option value="War">War</option>
          <option value="Western">Western</option>
          <option value="Crime">Crime</option>
          <option value="Family">Family</option>
          <option value="Historical">Historical</option>
          <option value="Superhero">Superhero</option>
        </select>
        {errors.genre && <p className="text-red-500 text-sm">Genre is required</p>}

        <input
          type="number"
          placeholder="Duration (minutes)"
          className="input input-bordered w-full"
          {...register("duration", {
            required: true,
            min: 60,
          })}
        />
        {errors.duration && <p className="text-red-500 text-sm">Duration must be at least 60 minutes</p>}

        <select
          className="select w-full"
          {...register("releaseYear", { required: true })}
        >
          <option disabled value="">Select Year</option>
          {Array.from({ length: 25 }, (_, i) => 2001 + i).map((year) => (
            <option key={year}>{year}</option>
          ))}
        </select>
        {errors.releaseYear && <p className="text-red-500 text-sm">Release year is required</p>}

        <div>
          <Rating
          initialValue={loadedData.rating}
            onClick={handleRating}
            SVGstyle={{ display: 'inline-block' }}
            size={30}
            allowHover
            transition
            fillColor="gold"
            emptyColor="#ccc"
            allowFraction
            
            iconsCount={10}
          />
        </div>

        <textarea
          placeholder="Movie Summary"
          className="textarea textarea-bordered w-full"
          {...register("summary", {
            required: true,
            minLength: 10,
          })}
        ></textarea>
        {errors.summary && <p className="text-red-500 text-sm">Summary must be at least 10 characters</p>}

        <button type="submit" className="btn  bg-transparent   rounded-2xl border-0 border-b-2 border-yellow-300  hover:text-blue-100 text-lg text-gray-900 hover:bg-gray-800 shadow-none hover:border-0 w-full">
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default Update;
