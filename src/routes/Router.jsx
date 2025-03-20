import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import FavoriteMovies from "../pages/FavoriteMovies";
import AllMovie from "../pages/AllMovie";
import Details from "../pages/Details";
import MovieDetails from "../pages/MovieDetails";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/movie"),
      },
      {
        path: "/all-movies",
        element: <AllMovie></AllMovie>,
        loader: () => fetch("http://localhost:5000/movie"),
      },
      {
        path: "/movie/:id",
        element: <MovieDetails></MovieDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movie/${params.id}`),
      },
      {
        path: "/add-movie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/favorite",
        element: <FavoriteMovies></FavoriteMovies>,
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default routes;
