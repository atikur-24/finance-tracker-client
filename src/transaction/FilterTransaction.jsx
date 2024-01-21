const FilterTransaction = () => {
  return (
    <div className="flex items-stretch space-x-3">
      <select className="border-deep-green cursor-pointer rounded-md border-2 bg-bgSecondary px-4 py-2.5 text-center outline-none">
        <option value="">Filter</option>
        <option value="income">Income</option>s
        <option value="expense">Expense</option>
        <option value="amount_asc">Amount Low To High</option>
        <option value="amount_desc">Amount High To Low</option>
        <option value="year_desc">Newest Transaction</option>
        <option value="year_desc">Oldest Transaction</option>
      </select>
    </div>
  );
};

export default FilterTransaction;
