import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const email = user?.email;
  // console.log(user);
  const [hidden, setHidden] = useState(true);

  const handleMouseEnter = () => {
    setHidden(false); 
  };

  const handleMouseLeave = () => {
    setHidden(true); 
  };
 

  return (
    <div className="navbar bg-gray-800 shadow-sm text-base-100 px-8 fixed z-50 font-winky font-lg">
      <div className="navbar-start  flex md:justify-between lg:justify-start" >
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/all-movies">All Movies</NavLink>
          <NavLink to="/add-movie">Add Movie</NavLink>
          <NavLink to={`/favorite/${email}`}>My Favorites</NavLink>
          <NavLink to="/news">News</NavLink>
          </ul>
        </div>
        <NavLink 
        to="/" className="btn hidden bg-transparent  text-white shadow-none md:block text-xl pt-1 border-none ">
          <span className="bg-yellow-300 text-black px-2 rounded-md">
            Movie
          </span>{" "}
          Box
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8 font-medium text-md">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/all-movies">All Movies</NavLink>
          <NavLink to="/add-movie">Add Movie</NavLink>
          <NavLink to={`/favorite/${email}`}>My Favorites</NavLink>
          <NavLink to="/news">News</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex items-center gap-2">
            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className={ hidden ? "hidden" : "flex items-center gap-2"}>{user.displayName}</button>
              <img 
              
              className={`w-10 h-10 rounded-full ${hidden ? "" : "hidden"}`}
                src={user.photoURL}
                alt=""
              />
            </div>

            <ul>
              <NavLink
                onClick={handleLogout}
                className="btn bg-yellow-300 border-0 px-2 rounded-md"
              >
                Logout
              </NavLink>
            </ul>
          </div>
        ) : (
          <ul className="space-x-1">
            <NavLink
              className="btn bg-yellow-300 border-0 px-2 rounded-md"
              to="/SignIn"
            >
              Login
            </NavLink>
            <NavLink
              className="btn bg-yellow-300 border-0 px-2 rounded-md"
              to="/SignUp"
            >
              Register
            </NavLink>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
