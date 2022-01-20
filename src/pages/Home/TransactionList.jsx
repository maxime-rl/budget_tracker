import React from "react";
import { useFirestore } from "../../hooks";
import PropTypes from "prop-types";

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
        <li key={transaction.id}>
          <h3>{transaction.name}</h3>
          <span>{transaction.amount}€</span>
          <button onClick={() => deleteDocument(transaction.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
};
