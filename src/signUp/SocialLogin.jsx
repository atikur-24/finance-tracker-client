import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import googleImg from "../assets/logo/google.png";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // google sign in
  const handleGoogleLogin = () => {
    console.log("btn");
    googleSignIn()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
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
    <button
      onClick={handleGoogleLogin}
      className="add-btn inline-flex w-full items-center justify-center gap-x-3 bg-gray-500 text-gray-200 lg:gap-x-5"
    >
      <img src={googleImg} alt="google" /> Google Sign In
    </button>
  );
};

export default SocialLogin;
