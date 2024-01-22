import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequiredRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  } else if (user) {
    return children;
  }

  return <Navigate to="/logIn" state={{ from: location }} replace />;
};

export default RequiredRoute;
