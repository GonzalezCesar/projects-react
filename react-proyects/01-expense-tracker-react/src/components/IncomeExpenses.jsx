import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
    
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2) * -1;

  return (
    <>
      <div>
        <div className="flex justify-between my-2">
          <h4>Income</h4>
          <p id="money-plus">{income}</p>
        </div>
        <div className="flex justify-between my-2">
          <h4>Expense</h4>
          <p id="money-minus">{expense}</p>
        </div>
      </div>
    </>
  );
}

export default IncomeExpenses


// className="inc-exp-container"
// className="money plus"
// className="money minus"
