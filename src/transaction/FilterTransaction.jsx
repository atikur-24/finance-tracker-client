const FilterTransaction = ({ onFilter }) => {
  return (
    <div className="flex items-stretch space-x-3">
      <select
        onChange={(e) => onFilter(e.target.value)}
        className="cursor-pointer rounded-md border-2 border-deep-green bg-bgSecondary px-4 py-2.5 text-center outline-none"
      >
        <option value="">Filter</option>
        <option value="income">Income</option>s
        <option value="expense">Expense</option>
        <option value="amount_asc">Amount Low To High</option>
        <option value="amount_desc">Amount High To Low</option>
        <option value="date_asc">Oldest Transaction</option>
        <option value="date_desc">Newest Transaction</option>
      </select>
    </div>
  );
};

export default FilterTransaction;
