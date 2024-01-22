import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TransactionActions = ({ setTransactions }) => {
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
        fetch("http://localhost:5000/transactions", {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Deleted successfully",
                showConfirmButton: false,
                timer: 1000,
              });
              setTransactions([]);
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
        <Link
          to="/addTransaction"
          className="rounded bg-blue-500 px-3 py-2 text-xs font-semibold transition-all hover:opacity-80 lg:rounded-md lg:px-3.5 lg:py-2.5 lg:text-sm"
        >
          Add Transaction
        </Link>
        <button
          onClick={handleDeleteAllTransaction}
          type="button"
          className="rounded bg-red-500 px-3 py-2 text-xs font-semibold transition-all hover:opacity-80 lg:rounded-md lg:px-3.5 lg:py-2.5 lg:text-sm"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TransactionActions;
