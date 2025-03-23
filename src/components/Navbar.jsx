import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthContext);
  const email = user?.email;
  console.log(user);

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          ></ul>
        </div>
        <a className="btn btn-ghost text-xl">Movie Box</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/all-movies">All Movies</NavLink>
          <NavLink to="/add-movie">Add Movie</NavLink>
          <NavLink to={`/favorite/${email}`}>My Favorites</NavLink>
          <NavLink>One Extra</NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div>
            <div>
              <button>{user.displayName}</button>
            </div>

            <ul>
              <NavLink onClick={handleLogout} className="btn">
                Logout
              </NavLink>
            </ul>
          </div>
        ) : (
          <ul>
            <NavLink className="btn" to="/SignIn">
              Login
            </NavLink>
            <NavLink className="btn" to="/SignUp">
              Register
            </NavLink>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
