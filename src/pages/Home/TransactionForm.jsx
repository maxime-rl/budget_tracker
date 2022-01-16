import React, { useState } from "react";
import { Input } from "../../components";

export default function TransactionForm() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, amount);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-5 w-full md:w-64 bg-white rounded shadow-md"
    >
      <h2 className="text-center pb-8 text-lg leading-4 font-bold">
        Add a transaction
      </h2>
      <label className="flex flex-col pb-4">
        <span className="pb-1 text-sm font-light">Name</span>
        <Input
          type={"text"}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
      </label>
      <label className="flex flex-col pb-8">
        <span className="pb-1 text-sm font-light">Amount</span>
        <Input
          type={"number"}
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
      </label>
      <button className="p-2 text-white font-bold border-2 rounded-sm bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600">
        Add
      </button>
    </form>
  );
}
