import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export function TransactionForm() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    addTransaction({
      id: window.crypto.randomUUID(),
      text,
      amount: +amount,
    });

    setText("")
    setAmount(0)
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Enter a Description"
            onChange={(e) => setText(e.target.value)}
            className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
            value={text}
          />
        
          <input
            type="number"
            step="0.01"
            placeholder="00.00"
            onChange={(e) => setAmount(e.target.value)}
            className="bg-zinc-600 text-white px-6 py-2 rounded-lg block mb-2 w-full"
            value={amount}
          />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block w-full">
            Add transaction
        </button>
      </form>
    </div>
  );
}
