import { useState } from "react";
import { TransactionContext } from "../contexts/TransactionProvider";
import useTransaction from "../hooks/useTransaction";
import FilterTransaction from "./FilterTransaction";
import NoTransitionFound from "./NoTransitionFound";
import SearchTransaction from "./SearchTransaction";
import TransactionActions from "./TransactionActions";
import TransactionList from "./TransactionList";

const TransactionBoard = () => {
  // load all transactions data from custom hook
  const [transactions, setTransactions] = useTransaction();
  const [filterOptions, setFilterOptions] = useState({
    type: "",
    sort: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  // Handle filter by transaction type, newest & oldest date, and amount lowest & highest
  const handleFilter = (value) => {
    const newFilterOptions = { ...filterOptions };

    if (value === "income" || value === "expense") {
      newFilterOptions.type = value;
    } else {
      newFilterOptions.type = "";
    }

    switch (value) {
      case "amount_asc":
        newFilterOptions.sort = "amount_asc";
        break;
      case "amount_desc":
        newFilterOptions.sort = "amount_desc";
        break;
      case "date_asc":
        newFilterOptions.sort = "date_asc";
        break;
      case "date_desc":
        newFilterOptions.sort = "date_desc";
        break;
      default:
        newFilterOptions.sort = "";
        break;
    }

    setFilterOptions(newFilterOptions);
  };

  // Apply filtering and sorting to transactions
  const filteredTransactions = transactions
    ?.filter((transaction) => {
      const { type } = filterOptions;

      // Filter by transaction type
      if (type && transaction.transaction_type !== type) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      const { sort } = filterOptions;

      // Sort transactions
      switch (sort) {
        case "amount_asc":
          return a.transaction_amount - b.transaction_amount;
        case "amount_desc":
          return b.transaction_amount - a.transaction_amount;
        case "date_asc":
          return new Date(a.transaction_date) - new Date(b.transaction_date);
        case "date_desc":
          return new Date(b.transaction_date) - new Date(a.transaction_date);
        default:
          return 0;
      }
    });

  // Handle search by transaction category
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  // Apply search filter to transactions
  const searchedTransactions = filteredTransactions?.filter((transaction) =>
    transaction.transaction_category
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  return (
    <TransactionContext.Provider value={searchedTransactions}>
      <section className="my-container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <SearchTransaction onSearch={handleSearch} />
          <FilterTransaction onFilter={handleFilter} />
        </div>
        <div className="pt-5 lg:pt-10">
          <div className="rounded-lg border border-[rgba(206,206,206,0.12)] bg-gray-9 px-6 py-8 md:px-9 md:py-16">
            {/* add new transaction or delete all */}
            <TransactionActions setTransactions={setTransactions} />
            {transactions?.length > 0 ? (
              // render all transaction list
              <TransactionList setTransactions={setTransactions} />
            ) : (
              <NoTransitionFound />
            )}
          </div>
        </div>
      </section>
    </TransactionContext.Provider>
  );
};

export default TransactionBoard;
