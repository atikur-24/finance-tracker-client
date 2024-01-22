import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { userSignIn } = useContext(AuthContext);
  const emailRef = useRef();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // use login with email and password
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setError("");

    userSignIn(email, password)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <section className="my-container">
      <div className="mx-auto w-full rounded border border-deep-green lg:w-1/2">
        <div className="p-6 md:p-8 lg:p-10">
          <h3 className="md-6 text-center text-2xl font-semibold text-primary md:pb-10 lg:text-4xl">
            Login
          </h3>
          <form onSubmit={handleLogin} className="space-y-4 lg:space-y-6">
            <div>
              <span className="label-text block pb-2 font-medium text-gray-300 md:pb-3">
                Email:
              </span>
              <input
                ref={emailRef}
                required
                name="email"
                type="email"
                placeholder="Your email"
                className="w-full rounded bg-bgSecondary p-2 outline-none lg:px-3 lg:py-2"
              />
            </div>
            <div>
              <span className="label-text block pb-2 font-medium text-gray-300 md:pb-3">
                Password:
              </span>
              <input
                required
                name="password"
                type="password"
                placeholder="Your password"
                className="w-full rounded bg-bgSecondary p-2 outline-none lg:px-3 lg:py-2"
              />
              <button className="text-xs text-gray-300 hover:underline">
                Forget password ?
              </button>
            </div>
            <div>
              {error && (
                <p className="pb-2 text-red-600">
                  <small>{error}</small>
                </p>
              )}
              <input type="submit" value="Log In" className="add-btn w-full" />
            </div>
          </form>
          <div className="pt-4 md:pt-6">
            <SocialLogin />
          </div>
          <p className="pt-4 text-center text-gray-500 md:pt-8">
            To New Finance Tracker?{" "}
            <Link to="/signUp" className="font-medium text-white opacity-90">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
