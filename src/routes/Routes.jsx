import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layouts/Main";
import TransactionForm from "../transaction/TransactionForm";

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
        element: <TransactionForm />,
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
      //   {
      //     path: "signUp",
      //     element: <Register />,
      //   },
    ],
  },
]);

export default router;
