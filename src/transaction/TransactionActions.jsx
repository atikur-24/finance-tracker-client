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
      <h2 className="text-2xl font-semibold max-sm:mb-4 lg:tracking-wide">
        Track Your Financial Transaction
      </h2>
      <div className="flex items-center space-x-5">
        <Link
          to="/addTransaction"
          className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold transition-all hover:opacity-80"
        >
          Add Transaction
        </Link>
        <button
          onClick={handleDeleteAllTransaction}
          type="button"
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold transition-all hover:opacity-80"
        >
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TransactionActions;
