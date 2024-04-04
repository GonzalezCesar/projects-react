import { GlobalContext } from '../context/GlobalState'
import { useContext } from 'react';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2) //concatena los resultados

    return (
        <div className='flex justify-between'>
            <h4>Your Balance</h4>
            <h1 className='text-2xl font-bold'>${total}</h1>
        </div>
    )
}