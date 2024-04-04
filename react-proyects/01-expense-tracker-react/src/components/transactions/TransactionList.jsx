import { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'
import { TransactionItem } from './TransactionItem'

export function TransactionList(){
    const { transactions} = useContext(GlobalContext)

    return (
        <>
        <h3 className='text-slate-300 text-xl font-bold w-full'>History</h3>
        <ul>
            {transactions.map((transaction) => (
                <TransactionItem transaction={transaction} key={transaction.id} />
            ))}
        </ul>
        </>
    )
}

// <Transaction key={transaction.id} 
// transaction={transaction}/> 