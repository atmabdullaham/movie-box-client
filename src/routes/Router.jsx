import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import FavoriteMovies from "../pages/FavoriteMovies";
import AllMovie from "../pages/AllMovie";

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
        path: "/add-movie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/favorite",
        element: <FavoriteMovies></FavoriteMovies>,
      },
    ],
  },
]);

export default routes;
