import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { IoTrashOutline } from "react-icons/io5";

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
            className="ml-2"
        >
            <IoTrashOutline />

        </button>
      </div>
    </li>
  );
}

export default TransactionItem;
