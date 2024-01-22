import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirm) {
      return setPasswordMatchError("password do not match");
    }
    // sign up a new user with email and password
    createUser(data.email, data.password)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Your Account has been created Successfully!",
          icon: "success",
        });
        reset();
        navigate("/");
      })
      .catch((error) => {
        const message = error.message;
        Swal.fire({
          title: "Error!",
          text: message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <section className="my-container">
      <div className="mx-auto w-full rounded border border-deep-green lg:w-1/2">
        <div className="p-6 md:p-8 lg:p-10">
          <h3 className="md-6 text-center text-2xl font-semibold text-primary md:pb-10 lg:text-4xl">
            Sign Up
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 lg:space-y-6"
          >
            <div>
              <span className="label-text block pb-2 font-medium text-gray-300 md:pb-3">
                Name:
              </span>
              <input
                type="text"
                placeholder="Your name"
                {...register("name", { required: true })}
                className="w-full rounded bg-bgSecondary p-2 outline-none lg:px-3 lg:py-2"
              />
              {errors.name && (
                <small className="text-red-600">Name field is required</small>
              )}
            </div>
            <div>
              <span className="label-text block pb-2 font-medium text-gray-300 md:pb-3">
                Email:
              </span>
              <input
                type="email"
                placeholder="Your email"
                {...register("email", { required: true })}
                className="w-full rounded bg-bgSecondary p-2 outline-none lg:px-3 lg:py-2"
              />
              {errors.email && (
                <small className="text-red-600">Email field is required</small>
              )}
            </div>
            <div>
              <span className="label-text block pb-2 font-medium text-gray-300 md:pb-3">
                Password:
              </span>
              <input
                type="password"
                placeholder="Your password"
                {...register("password", {
                  required: true,
                })}
                className="w-full rounded bg-bgSecondary p-2 outline-none lg:px-3 lg:py-2"
              />
              {errors.password && (
                <small className="text-red-600">
                  Password field is required
                </small>
              )}
            </div>
            <div>
              <label className="label">
                <span className="label-text block pb-2 font-medium text-gray-300 md:pb-3">
                  Confirm Password:
                </span>
              </label>
              <input
                type="password"
                placeholder="Your Confirm password"
                {...register("confirm", {
                  required: true,
                })}
                className="w-full rounded bg-bgSecondary p-2 outline-none lg:px-3 lg:py-2"
              />
              {errors.confirm && (
                <small className="text-red-600">
                  Confirm Password field is required
                </small>
              )}
            </div>
            {passwordMatchError && (
              <p className="text-red-600">
                <small>{passwordMatchError}</small>
              </p>
            )}
            <div>
              <input type="submit" value="Sign Up" className="add-btn w-full" />
            </div>
          </form>
          <div className="pt-4 md:pt-6">
            <SocialLogin />
          </div>
          <p className="pt-4 text-center text-gray-500 md:pt-8">
            Have an already account?{" "}
            <Link to="/login" className="font-medium text-white opacity-90">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
