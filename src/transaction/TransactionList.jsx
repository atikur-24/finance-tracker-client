import { HiOutlineEye } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const TransactionList = ({ transactions }) => {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="w-full p-4 pb-8 text-sm font-semibold capitalize">
              Category
            </th>
            <th className="w-full p-4 pb-8 text-sm font-semibold capitalize">
              Date
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              Type
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
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
              <td>{transaction.transaction_category}</td>
              <td>
                <div>{transaction.transaction_date}</div>
              </td>
              <td>{transaction.transaction_type}</td>
              <td className="text-center">{transaction.transaction_amount}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <HiOutlineEye
                    title="View Details"
                    className="rounded-sm bg-gray-400 p-1 text-2xl text-white transition-colors"
                  />

                  <TiEdit
                    title="Edit"
                    className="hover:bg-my-accent rounded-sm bg-blue-600 p-1 text-2xl text-white transition-colors"
                  />
                  <button
                    type="button"
                    // onClick={() => handleDeleteMedicine(medicine?._id)}
                  >
                    <RiDeleteBinLine
                      title="Delete"
                      className="rounded-sm bg-red-500 p-1 text-2xl text-white transition-colors"
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
