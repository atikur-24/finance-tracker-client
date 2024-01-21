import useTransaction from "../hooks/useTransaction";
import FilterTransaction from "./FilterTransaction";
import NoTransitionFound from "./NoTransitionFound";
import SearchTransaction from "./SearchTransaction";
import TransactionActions from "./TransactionActions";
import TransactionList from "./TransactionList";

const TransactionBoard = () => {
  const [transactions] = useTransaction();

  return (
    <section className="container px-8 lg:px-20">
      <div className="flex items-center justify-between">
        <SearchTransaction />
        <FilterTransaction />
      </div>
      <div className="container pt-10">
        <div className="rounded-lg border border-[rgba(206,206,206,0.12)] bg-gray-9 px-6 py-8 md:px-9 md:py-16">
          {/* add new transaction or delete */}
          <TransactionActions />
          {transactions.length > 0 ? (
            // render all transaction list
            <TransactionList transactions={transactions} />
          ) : (
            <NoTransitionFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TransactionBoard;
