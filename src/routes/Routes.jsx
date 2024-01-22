import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layouts/Main";
import Login from "../signUp/Login";
import SignUp from "../signUp/SignUp";
import TransactionForm from "../transaction/TransactionForm";
import RequiredRoute from "./RequiredRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "addTransaction",
        element: (
          <RequiredRoute>
            <TransactionForm />
          </RequiredRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
