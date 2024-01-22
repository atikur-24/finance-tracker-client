import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/save-money.png";
import Avatar from "../assets/logo/user.png";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <nav className="my-container py-6 md:py-8">
      <div className="flex items-center justify-between gap-x-6 border-b border-b-gray-500 pb-5">
        <a href="/" className="flex items-center gap-x-2 lg:gap-x-4">
          <img className="h-[50px]" src={Logo} alt="Finance Tracker" />
          <p className="text-sm font-normal uppercase lg:text-xl lg:font-semibold">
            Finance <br /> <span className="text-primary">Tracker</span>
          </p>
        </a>
        <div className="flex gap-x-3 text-xs lg:gap-x-4 lg:text-base">
          <Link to="/">Home</Link>

          {user && (
            <>
              <Link to="/">Dashboard</Link>
            </>
          )}

          {user ? (
            <button onClick={handleLogout} type="button">
              Logout
            </button>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {/* <div>
            {user && (
              <div className="flex gap-2">
                <button onClick={handleLogout} type="button">
                  Logout
                </button>{" "}
                / <p>Dashboard</p>
              </div>
            )}
            {user === null ||
              NaN ||
              <Link to="/login">Login</Link> /
              <Link to="/signUp">Sign Up</Link>}
          </div> */}
        </div>
        <div>
          {user && (
            <img
              className="h-6 lg:h-8"
              src={Avatar}
              alt="Avatar"
              title={user?.email}
            />
          )}
          {!user?.email && (
            <FaRegUserCircle className="cursor-pointer text-xl text-primary lg:text-2xl" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
