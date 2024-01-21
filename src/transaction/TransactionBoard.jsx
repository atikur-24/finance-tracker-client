import FilterTransaction from "./FilterTransaction";
import NoTransitionFound from "./NoTransitionFound";
import SearchTransaction from "./SearchTransaction";
import TransactionActions from "./TransactionActions";
import TransactionList from "./TransactionList";

const TransactionBoard = () => {
  const transactions = 2;

  return (
    <section className="container lg:px-20">
      <div className="flex items-center justify-between">
        <SearchTransaction />
        <FilterTransaction />
      </div>
      <div className="container pt-10">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TransactionActions />
          {transactions.length > 0 ? (
            <TransactionList />
          ) : (
            <NoTransitionFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TransactionBoard;
