import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const ViewDetailsModal = ({ data, setViewIsOpen, viewIsOpen }) => {
  // destructure the transaction data
  const {
    name,
    email,
    transaction_amount,
    transaction_type,
    transaction_category,
    transaction_date,
    transaction_desc,
  } = data || {};

  function closeViewModal() {
    setViewIsOpen(false);
  }
  return (
    <Transition appear show={viewIsOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeViewModal}>
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-bgSecondary p-6 text-left align-middle text-white shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="border-b border-gray-500 pb-1 text-base font-medium uppercase leading-6 lg:text-lg"
                >
                  View Details In Transaction
                </Dialog.Title>
                <div className="mt-2 space-y-2 text-xs capitalize text-gray-300 md:mt-4 md:space-y-3 md:text-sm">
                  <p>
                    User Name: <span className="text-gray-100">{name}</span>
                  </p>
                  <p>
                    User Email: <span className="text-gray-100">{email}</span>
                  </p>
                  <p>
                    Category:{" "}
                    <span className="text-gray-100">
                      {transaction_category}
                    </span>
                  </p>
                  <p>
                    Type:{" "}
                    <span className="text-gray-100">{transaction_type}</span>
                  </p>
                  <p>
                    Date:{" "}
                    <span className="text-gray-100">{transaction_date}</span>
                  </p>
                  <p>
                    Amount:{" "}
                    <span className="font-medium text-primary">
                      ৳ {transaction_amount}
                    </span>
                  </p>
                  <p>
                    Description:{" "}
                    <span className="text-gray-100">{transaction_desc}</span>
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="search-btn"
                    onClick={closeViewModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ViewDetailsModal;
