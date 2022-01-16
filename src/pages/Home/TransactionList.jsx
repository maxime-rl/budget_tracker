import React from "react";
import PropTypes from "prop-types";

/**
 * @name TransactionList
 * @param {array} transactions
 * @returns {ReactElement}
 */
export default function TransactionList({ transactions }) {
  return (
    <ul>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <h3>{transaction.name}</h3>
          <span>{transaction.amount}€</span>
        </li>
      ))}
    </ul>
  );
}

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
};
