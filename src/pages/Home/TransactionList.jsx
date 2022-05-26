import React from "react";
import { useFirestore } from "../../hooks";
import PropTypes from "prop-types";
import { secondsTransformedIntoDate } from "../../helpers/secondsTransformedIntoDate";

/**
 * @name TransactionList
 * @param {array} transactions
 * @returns {ReactElement}
 */
export default function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions");

  return (
    <ul>
      {transactions.map((transaction) => (
        <li
          key={transaction.id}
          className="flex justify-between my-2.5 p-3.5 bg-white rounded shadow-md"
        >
          <div className="flex gap-2 max-w-xs truncate">
            <span className="font-bold">{transaction.amount}€</span>
            <span> - </span>
            <h3 className="max-w-xs truncate">{transaction.name}</h3>
          </div>
          <div className="flex gap-2">
            <span className="leading-loose text-xs">
              {secondsTransformedIntoDate(transaction.createdAt.seconds)}
            </span>
            <button
              className="flex justify-center items-center px-2 py-0.5 bg-red-400 rounded hover:bg-red-500"
              onClick={() => deleteDocument(transaction.id)}
            >
              <span className="pb-1 text-xs leading-none text-white">x</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
};
