import Swal from "sweetalert2";

const AddMovie = () => {
  const handleAddMovie = (event) => {
    event.preventDefault();
    const form = event.target;
    const poster = form.poster.value;
    const title = form.title.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const rating = form.rating.value;
    const summary = form.summary.value;
    const newMovie = {
      poster,
      title,
      genre: [genre],
      duration,
      releaseYear,
      rating,
      summary,
    };
    console.log(newMovie);

    fetch("http://localhost:5000/movie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Movie successfully added",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="max-w-xl mx-auto bg-base-100 shadow-lg rounded-lg p-6">
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
        <input
          type="text"
          name="genre"
          placeholder="Genres (comma separated)"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          className="input input-bordered w-full"
          required
        />
        <input
          type="number"
          name="releaseYear"
          placeholder="Release Year"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating (1-10)"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="summary"
          placeholder="Movie Summary"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
