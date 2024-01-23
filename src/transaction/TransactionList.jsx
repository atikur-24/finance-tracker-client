import axios from "axios";
import { useContext, useState } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import Swal from "sweetalert2";
import { TransactionContext } from "../contexts/TransactionProvider";
import TransactionModal from "./TransactionModal";
import ViewDetailsModal from "./ViewDetailsModal";

const TransactionList = () => {
  // load filtered transactions data and get refetch function using context api
  const { searchedTransactions, refetch } = useContext(TransactionContext);

  const [isOpen, setIsOpen] = useState(false);
  const [viewIsOpen, setViewIsOpen] = useState(false);
  const [existingData, setExistingData] = useState({});
  const [data, setData] = useState({});

  // view single transaction details
  const handleViewDetails = (transaction) => {
    setData(transaction);
    setViewIsOpen(!viewIsOpen);
  };

  // edit single transaction
  const handleEditTransaction = (transaction) => {
    setExistingData(transaction);
    setIsOpen(!isOpen);
  };

  // delete a single transaction
  const handleDeleteTransaction = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#006F70",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://finance-tracker-server-theta.vercel.app/transactions/${id}`,
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                icon: "success",
                title: "Transaction has been deleted.",
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
            }
          });
      }
    });
  };

  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto text-sm lg:text-base xl:w-full">
        <thead>
          <tr>
            <th className="w-full p-4 pb-8 text-start text-sm font-semibold capitalize">
              Category
            </th>
            <th className="p-4 pb-8 text-start text-sm font-semibold capitalize md:w-[200px]">
              Date
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              Type
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[200px]">
              Amount
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[200px]">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {searchedTransactions?.map((transaction) => (
            <tr
              key={transaction?._id}
              className="border-b border-[#2E3443] [&>td]:px-4 [&>td]:py-2 [&>td]:align-baseline"
            >
              <td className="capitalize">
                {transaction?.transaction_category}
              </td>
              <td>
                <div>{transaction?.transaction_date}</div>
              </td>
              <td>
                <span
                  className={`rounded-full px-2 py-1 text-center text-xs capitalize lg:text-sm ${transaction?.transaction_type === "income" ? "bg-deep-green" : "bg-red-800"}`}
                >
                  {transaction?.transaction_type}
                </span>
              </td>
              <td className="text-center">
                ৳ {transaction?.transaction_amount}
              </td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  {/* view details icons */}
                  <button onClick={() => handleViewDetails(transaction)}>
                    <HiOutlineEye
                      title="View Details"
                      className="cursor-pointer rounded-sm bg-gray-400 p-1 text-2xl text-white transition-colors hover:opacity-80"
                    />
                  </button>
                  {/* edit icons */}
                  <button onClick={() => handleEditTransaction(transaction)}>
                    <TiEdit
                      title="Edit"
                      className="cursor-pointer rounded-sm bg-blue-600 p-1 text-2xl text-white transition-colors hover:opacity-80"
                    />
                  </button>
                  {/* delete icons */}
                  <button
                    type="button"
                    onClick={() => handleDeleteTransaction(transaction?._id)}
                  >
                    <RiDeleteBinLine
                      title="Delete"
                      className="rounded-sm bg-red-500 p-1 text-2xl text-white transition-colors hover:opacity-80"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ViewDetailsModal
        setViewIsOpen={setViewIsOpen}
        viewIsOpen={viewIsOpen}
        data={data}
      />
      <TransactionModal
        existingData={existingData}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        refetch={refetch}
      />
    </div>
  );
};

export default TransactionList;
