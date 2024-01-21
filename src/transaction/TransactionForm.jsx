import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TransactionForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (transactionData) => {
    transactionData.transaction_amount = parseFloat(
      transactionData.transaction_amount,
      10,
    );
    // post transaction data to server & DB
    axios
      .post("http://localhost:5000/transactions", transactionData)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          toast.success("Transaction Added Success", {
            position: "top-center",
            theme: "colored",
            autoClose: 3000,
            pauseOnHover: false,
          });
          reset();
          navigate("/");
        }
      })
      .catch((err) => {
        if (err) {
          toast.error("Transaction Added Failed", {
            position: "top-center",
            theme: "colored",
            autoClose: 3000,
            pauseOnHover: false,
          });
        }
      });
  };

  return (
    <section className="container mx-auto my-20 px-8 pt-10 text-sm md:text-base lg:px-20">
      <h2 className="pb-4 text-center text-lg font-medium uppercase text-gray-300 lg:pb-10 lg:text-2xl lg:font-bold lg:tracking-wide">
        Add Your Transaction
      </h2>
      <div className="bg-[#191D26]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-5 pb-3 lg:grid-cols-2 lg:pb-6">
            {/* user name input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Your name:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 outline-none outline-offset-0 transition-all focus:outline-primary lg:px-3 lg:py-2.5"
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <small className="text-xs text-red-500">
                  Please write your name
                </small>
              )}
            </div>
            {/* user email input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Your Email:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 outline-none outline-offset-0 transition-all focus:outline-primary lg:px-3 lg:py-2.5"
                type="email"
                placeholder="Your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <small className="text-xs text-red-500">
                  Please write your email
                </small>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 pb-3 lg:grid-cols-2 lg:pb-6">
            {/* user transaction amount input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Enter Transaction Amount (৳) :</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 outline-none outline-offset-0 transition-all focus:outline-primary lg:px-3 lg:py-2.5"
                type="number"
                placeholder="Transaction amount"
                {...register("transaction_amount", { required: true, min: 1 })}
              />
              {errors.transaction_amount && (
                <small className="text-xs text-red-500">
                  Please write transaction amount & must greater than 1
                </small>
              )}
            </div>
            {/* user transaction type */}
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Select Transaction Type</label>
              <select
                className="w-full rounded bg-bgSecondary p-2 outline-none outline-offset-0 transition-all focus:outline-primary lg:px-3 lg:py-2.5"
                name="priority"
                {...register("transaction_type", { required: true })}
              >
                <option value="">Select Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              {errors.transaction_type && (
                <small className="text-xs text-red-500">
                  Please select any transaction type
                </small>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 pb-3 lg:grid-cols-2 lg:pb-6">
            {/* user transaction category */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Enter Transaction Category</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 outline-none outline-offset-0 transition-all focus:outline-primary lg:px-3 lg:py-2.5"
                type="text"
                placeholder="Transaction category"
                {...register("transaction_category", { required: true })}
              />
              {errors.transaction_category && (
                <small className="text-xs text-red-500">
                  Please write transaction category
                </small>
              )}
            </div>
            {/* user transaction date */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Enter Transaction Date</label>
              <input
                type="date"
                name="transaction_date"
                className="w-full rounded bg-bgSecondary p-2 outline-none outline-offset-0 transition-all focus:outline-primary lg:px-3 lg:py-2.5"
                {...register("transaction_date", { required: true })}
              />
              {errors.transaction_date && (
                <small className="text-xs text-red-500">
                  Please write transaction date
                </small>
              )}
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center lg:mt-4">
            <button type="submit" className="submit-btn">
              Add Transaction
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default TransactionForm;
