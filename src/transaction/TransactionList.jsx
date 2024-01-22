import { useContext } from "react";
import { HiOutlineEye } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { TransactionContext } from "../contexts/TransactionProvider";

const TransactionList = () => {
  const transactions = useContext(TransactionContext);
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
          {transactions.map((transaction) => (
            <tr
              key={transaction._id}
              className="border-b border-[#2E3443] [&>td]:px-4 [&>td]:py-2 [&>td]:align-baseline"
            >
              <td className="capitalize">{transaction.transaction_category}</td>
              <td>
                <div>{transaction.transaction_date}</div>
              </td>
              <td>
                <span
                  className={`rounded-full px-2 py-1 text-center text-xs capitalize lg:text-sm ${transaction.transaction_type === "income" ? "bg-deep-green" : "bg-red-800"}`}
                >
                  {transaction.transaction_type}
                </span>
              </td>
              <td className="text-center">
                ৳ {transaction.transaction_amount}
              </td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <HiOutlineEye
                    title="View Details"
                    className="cursor-pointer rounded-sm bg-gray-400 p-1 text-2xl text-white transition-colors hover:opacity-80"
                  />

                  <TiEdit
                    title="Edit"
                    className="cursor-pointer rounded-sm bg-blue-600 p-1 text-2xl text-white transition-colors hover:opacity-80"
                  />
                  <button
                    type="button"
                    // onClick={() => handleDeleteMedicine(medicine?._id)}
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
    </div>
  );
};

export default TransactionList;
