import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export function TransactionItem({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext)

  return (
    <li className="bg-zinc-600 text-wihite px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
      <p className="text-sm">{transaction.text}</p>
      <div >
      <span>${transaction.amount}</span>
        <button
            onClick={() => {
            deleteTransaction(transaction.id);
            }}
        >
            x
        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
