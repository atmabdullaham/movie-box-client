import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const { handleRegister, manageProfile, handleGoogleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.error("password must be 6 character");
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error("password must contain at least one lower letter");

      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("password must contain at least one Upper case letter");

      return;
    }
    handleRegister(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        navigate("/");
        manageProfile(name, photo);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        // ..
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
        <div className="card bg-base-100  w-full  shadow-2xl">
          <Toaster />
          <div className="card-body">
            <h1 className="text-3xl font-bold">Register Now</h1>
            <form onSubmit={handleSubmit} className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Write Full Name"
                name="name"
              />
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                name="email"
              />
              <label className="fieldset-label">Photo Url</label>
              <input
                type="text"
                className="input w-full"
                placeholder="Past your photo link"
                name="photo"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                name="password"
              />

              <input className="btn" type="submit" value="Sign Up" />
            </form>
            <div className="divider">OR</div>
            <button className="btn" onClick={googleLoginHandler}>
              Continue With Google
            </button>
            <div>
              <h2>
                Already have and account?
                <NavLink to="/signIn" className="text-blue-400">
                  Sign In Now.
                </NavLink>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
