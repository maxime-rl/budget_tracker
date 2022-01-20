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

  return (
    <main className="bg-slate-100">
      <h1 className="sr-only">Budget tracking home page</h1>
      <div className="md:flex md:justify-between p-4 md:p-8 h-[calc(100vh_-_9rem)] lg:max-w-screen-lg lg:mx-auto">
        <div className="md:max-w-[calc(16rem_+_10rem)]">
          <TransactionForm uid={user.uid} />
        </div>
        <div className="w-full md:ml-8">
          <h2 className="pt-5 text-lg leading-4 font-bold">Transaction list</h2>
          {error && <span>{error}</span>}
          {documents && <TransactionList transactions={documents} />}
        </div>
      </div>
    </main>
  );
}
