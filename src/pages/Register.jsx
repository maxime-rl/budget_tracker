import React from "react";
import { useState } from "react";
import { useRegister } from "../hooks";
import { Input } from "../components";

/**
 * @name Register
 * @returns {ReactElement}
 */
export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { error, isLoading, register } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password, name);
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh_-_9rem)] bg-slate-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col m-3 p-5 w-full max-w-xs bg-white rounded shadow-md"
      >
        <h1 className="text-center pb-8 text-2xl leading-4 font-bold">
          Register
        </h1>
        <label className="flex flex-col pb-4">
          <span className="pb-1 text-sm font-light">Email</span>
          <Input
            type={email}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label className="flex flex-col pb-4">
          <span className="pb-1 text-sm font-light">Password</span>
          <Input
            type={password}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <label className="flex flex-col pb-8">
          <span className="pb-1 text-sm font-light">User name</span>
          <Input
            type={name}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        {!isLoading && (
          <button className="p-2 text-white font-bold border-2 rounded-sm bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600">
            Register
          </button>
        )}
        {isLoading && (
          <button
            className="p-2 text-white font-bold border-2 rounded-sm bg-cyan-500 hover:bg-cyan-600 border-cyan-500 hover:border-cyan-600"
            disabled
          >
            loading
          </button>
        )}
        {error && <span>{error}</span>}
      </form>
    </div>
  );
}
