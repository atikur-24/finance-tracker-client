import axios from "axios";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { TransactionContext } from "../contexts/TransactionProvider";
import useAuth from "../hooks/useAuth";

const TransactionActions = () => {
  // get refetch function form tan stack query using context api
  const { refetch } = useContext(TransactionContext);
  const { user } = useAuth();

  const handleDeleteAllTransaction = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are You Want Delete All Transaction",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://finance-tracker-server-theta.vercel.app/transactions?email=${user?.email}`,
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Deleted successfully",
                showConfirmButton: false,
                timer: 1000,
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-lg font-medium max-sm:mb-4 lg:text-2xl lg:font-semibold lg:tracking-wide">
        Track Your Financial Transaction
      </h2>
      <div className="flex items-center space-x-5">
        <Link to="/addTransaction" className="open-btn">
          Add Transaction
        </Link>
        <button
          onClick={handleDeleteAllTransaction}
          type="button"
          className="close-btn"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TransactionActions;
