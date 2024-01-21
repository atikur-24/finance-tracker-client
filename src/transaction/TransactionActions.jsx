import { Link } from "react-router-dom";

const TransactionActions = () => {
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
        <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold transition-all hover:opacity-80">
          Delete All
        </button>
      </div>
    </div>
  );
};

export default TransactionActions;
