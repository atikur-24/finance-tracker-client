import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const TransactionModal = ({ existingData, refetch, setIsOpen, isOpen }) => {
  // closed modal
  function closeModal() {
    setIsOpen(false);
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (transactionData) => {
    // amount input field data convert to numeric
    transactionData.transaction_amount = parseFloat(
      transactionData.transaction_amount,
      10,
    );

    // put or update transaction data to server & DB
    axios
      .put(
        `https://finance-tracker-server-theta.vercel.app/transactions/${transactionData._id}`,
        transactionData,
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Transaction Edit Success", {
            position: "top-center",
            theme: "colored",
            autoClose: 2000,
            pauseOnHover: false,
          });
          refetch();
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("Transaction Edit Failed", {
            position: "top-center",
            theme: "colored",
            autoClose: 3000,
            pauseOnHover: false,
          });
        }
      });
  };

  // Set default form values with existing data
  useEffect(() => {
    for (const field in existingData) {
      if (existingData) {
        setValue(field, existingData[field]);
      }
    }
  }, [existingData, setValue]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-bgSecondary p-6 text-left align-middle text-white shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-center text-base font-medium leading-6 lg:text-lg"
                >
                  Edit Transaction
                </Dialog.Title>
                <div className="mt-2 text-xs md:text-sm lg:mt-4">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 gap-3 pb-2 lg:grid-cols-2 lg:pb-4">
                      {/* user name input field */}
                      <div className="space-y-1 lg:space-y-2">
                        <label className="block">Your name:</label>
                        <input
                          className="w-full rounded bg-bgPrimary p-2 outline-none lg:px-2 lg:py-1.5"
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
                      <div className="space-y-1 lg:space-y-2">
                        <label className="block">Your Email (read only):</label>
                        <input
                          readOnly
                          className="w-full rounded bg-bgPrimary p-2 outline-none lg:px-2 lg:py-1.5"
                          type="email"
                          placeholder="Your email"
                          {...register("email", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3 pb-2 lg:grid-cols-2 lg:pb-4">
                      {/* user transaction amount input field */}
                      <div className="space-y-1 lg:space-y-2">
                        <label className="block">Transaction Amount (৳):</label>
                        <input
                          className="w-full rounded bg-bgPrimary p-2 outline-none lg:px-2 lg:py-1.5"
                          type="number"
                          placeholder="Transaction amount"
                          {...register("transaction_amount", {
                            required: true,
                            min: 1,
                          })}
                        />
                        {errors.transaction_amount && (
                          <small className="text-xs text-red-500">
                            Please write transaction amount & must be greater
                            than 1
                          </small>
                        )}
                      </div>
                      {/* user transaction type */}
                      <div className="space-y-2 lg:space-y-2">
                        <label htmlFor="priority">Transaction Type:</label>
                        <select
                          className="w-full rounded bg-bgPrimary p-2 outline-none lg:px-2 lg:py-1.5"
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
                    <div className="grid grid-cols-1 gap-3 pb-2 lg:grid-cols-2 lg:pb-4">
                      {/* user transaction category */}
                      <div className="space-y-1 lg:space-y-2">
                        <label className="block">Transaction Category:</label>
                        <input
                          className="w-full rounded bg-bgPrimary p-2 outline-none lg:px-2 lg:py-1.5"
                          type="text"
                          placeholder="Transaction category"
                          {...register("transaction_category", {
                            required: true,
                          })}
                        />
                        {errors.transaction_category && (
                          <small className="text-xs text-red-500">
                            Please write transaction category
                          </small>
                        )}
                      </div>
                      {/* user transaction date */}
                      <div className="space-y-1 lg:space-y-2">
                        <label className="block">Transaction Date:</label>
                        <input
                          type="date"
                          className="w-full rounded bg-bgPrimary p-2 outline-none lg:px-2 lg:py-1.5"
                          {...register("transaction_date", { required: true })}
                        />
                        {errors.transaction_date && (
                          <small className="text-xs text-red-500">
                            Please write transaction date
                          </small>
                        )}
                      </div>
                    </div>
                    {/* user write transaction description */}
                    <div className="space-y-1 lg:space-y-2">
                      <label className="block">Transaction Description:</label>
                      <textarea
                        rows="2"
                        className="w-full resize-none rounded bg-bgPrimary p-2 outline-none lg:px-2 lg:py-1.5"
                        {...register("transaction_desc", {
                          required: true,
                          minLength: 5,
                          maxLength: 100,
                        })}
                      />
                      {errors.transaction_desc && (
                        <small className="text-xs text-red-500">
                          Please write transaction description within 5 to 100
                          words
                        </small>
                      )}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <button
                        type="button"
                        className="close-btn"
                        onClick={closeModal}
                      >
                        Closed
                      </button>
                      <button
                        type="submit"
                        className="open-btn"
                        onClick={closeModal}
                      >
                        Saved
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TransactionModal;
