import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
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
        <a href="/" className="flex items-center gap-x-2 md:gap-x-4">
          <img className="h-[50px]" src={Logo} alt="Finance Tracker" />
          <p className="text-sm font-normal uppercase lg:text-xl lg:font-semibold">
            Finance <br /> <span className="text-primary">Tracker</span>
          </p>
        </a>
        <div className="flex gap-x-3 text-xs lg:gap-x-4 lg:text-base">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "default")}
          >
            Home
          </NavLink>

          {user && (
            <>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Dashboard
              </NavLink>
            </>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              type="button"
              className="opacity-70 transition-all hover:text-white hover:opacity-100"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="opacity-70 transition-all hover:text-white hover:opacity-100"
            >
              Login
            </Link>
          )}
        </div>
        <div>
          {user && (
            <img
              className="h-4 md:h-8"
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
