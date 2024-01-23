import { Pie, PieChart } from "recharts";
import useTransaction from "../hooks/useTransaction";

const DashboardLayout = () => {
  // load all transactions from server with custom hook (user email wise)
  const [transactions] = useTransaction();

  // filter transaction income type
  const incomeTransactions = transactions?.filter(
    (transaction) => transaction.transaction_type === "income",
  );
  // filter transaction income type
  const expenseTransaction = transactions?.filter(
    (transaction) => transaction.transaction_type === "expense",
  );
  //   calculate gross income
  const totalIncome = incomeTransactions?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.transaction_amount,
    0,
  );
  //   calculate gross expense
  const totalExpense = expenseTransaction?.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.transaction_amount,
    0,
  );

  const netIncome = totalIncome - totalExpense;

  return (
    <section className="my-container my-10 md:my-20">
      <div className="flex flex-col items-center justify-between space-x-5 space-y-6 md:flex-row">
        {/* show all calculation */}
        <div className="space-y-1 text-sm text-gray-300 md:space-y-2 md:text-lg md:font-medium lg:space-y-3">
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="rounded-sm bg-primary p-1 md:p-2"></div>
            <p>
              Total Income:{" "}
              <span className="text-gray-200">৳ {totalIncome}</span>
            </p>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="rounded-sm bg-red-600 p-1 md:p-2"></div>
            <p>
              Total Expense:{" "}
              <span className="text-gray-200">৳ {totalExpense}</span>
            </p>
          </div>
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="rounded-sm bg-yellow-500 p-1 md:p-2"></div>
            {netIncome > 0 || netIncome === 0 ? (
              <p>
                Net Income: <span className="text-gray-200">৳ {netIncome}</span>
              </p>
            ) : (
              <p>
                Net Loss: <span className="text-gray-200">৳ {netIncome}</span>
              </p>
            )}
          </div>
        </div>
        {/* show a pie chart */}
        <div>
          <PieChart width={350} height={300}>
            <Pie
              data={expenseTransaction}
              dataKey="transaction_amount"
              nameKey="transaction_type"
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
            />
            <Pie
              data={incomeTransactions}
              dataKey="transaction_amount"
              nameKey="transaction_type"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#82ca9d"
              label
            />
          </PieChart>

          <div className="pt-5 text-center text-base font-medium uppercase tracking-wide lg:text-xl lg:font-semibold">
            Financial Insights with pie chart
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;
