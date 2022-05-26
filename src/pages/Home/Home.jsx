import React from "react";
import { useAuthContext, useCollection } from "../../hooks";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

/**
 * @name Home
 * @returns {ReactElement}
 */
export default function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "transactions",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );

  let totalAmountOfTransactions = 0;

  if (documents) {
    documents.forEach((doc) => {
      totalAmountOfTransactions =
        totalAmountOfTransactions + parseInt(doc.amount);
    });
  }

  return (
    <main className="flex-auto bg-slate-100">
      <h1 className="sr-only">Budget tracking home page</h1>
      <div className="md:flex md:justify-between p-4 md:p-8 lg:max-w-screen-lg lg:mx-auto">
        <div className="md:max-w-[calc(16rem_+_10rem)]">
          <TransactionForm uid={user.uid} />
        </div>
        <div className="w-full md:ml-8">
          <div className="flex justify-between mb-5 pt-5 leading-4 font-bold">
            <h2 className="text-lg">Transactions</h2>
            <span className="flex items-center text-sm">
              Total {totalAmountOfTransactions}€
            </span>
          </div>
          {error && <span>{error}</span>}
          {documents && <TransactionList transactions={documents} />}
        </div>
      </div>
    </main>
  );
}
