import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddMovie from "../pages/AddMovie";
import FavoriteMovies from "../pages/FavoriteMovies";
import AllMovie from "../pages/AllMovie";
import MovieDetails from "../pages/MovieDetails";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error";
import Update from "../pages/Update";
import News from "../pages/News";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://movie-box-server.vercel.app/movie"),
      },
      {
        path: "/all-movies",
        element: <AllMovie></AllMovie>,
        loader: () => fetch("https://movie-box-server.vercel.app/movie"),
      },
      {
        path: "/movie/:id",
        element: (
          <PrivateRoute>
            <MovieDetails></MovieDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://movie-box-server.vercel.app/movie/${params.id}`),
      },
      {
        path: "/add-movie",
        element: (
          <PrivateRoute>
            <AddMovie></AddMovie>
          </PrivateRoute>
        ),
      },
      {
        path: "/favorite/:email",
        element: (
          <PrivateRoute>
            <FavoriteMovies></FavoriteMovies>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://movie-box-server.vercel.app/favorite/${params.email}`),
      },
      {
        path: "/SignUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/SignIn",
        element: <SignIn></SignIn>,
      },
      {
        path:"/update/:id",
        element:<Update></Update>,
        loader: ({ params }) =>
          fetch(`https://movie-box-server.vercel.app/update/${params.id}`),
      },
{
  path: "/news",
  element: <News></News>
}
    ],
  },
]);

export default routes;
