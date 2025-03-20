import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const { handleLogin, handleGoogleLogin } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    handleLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const googleLoginHandler = () => {
    handleGoogleLogin().then((res) => {
      toast.success(`Successfully login`);
    });
  };
  return (
    <div className="hero bg-base-200 min-h-[calc(100vh-100px)]">
      <div className="hero-content w-4/12 ">
        <Toaster></Toaster>
        <div className="card bg-base-100  w-full  shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
              />

              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <input className="btn" type="submit" value="Sign Up" />
            </form>
            <div className="divider">OR</div>

            <button className="btn" onClick={googleLoginHandler}>
              Continue With Google
            </button>
            <div>
              <h2>
                New to MovieBox?{" "}
                <NavLink to="/signUp" className="text-blue-400">
                  Sign Up Now.
                </NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
