import { useContext } from 'react'

import { GlobalContext } from '../../context/GlobalState'
import { TransactionItem } from './TransactionItem'

export function TransactionList(){
    const { transactions} = useContext(GlobalContext)


    
    return (
        <>
        <div className='bg-zinc-900 p-2'>
            <h3 className='text-slate-300 text-xl text-center font-bold w-full mt-2'>History</h3>
            <div className='h-[130px] overflow-auto'>
                <ul>
                    {transactions.map((transaction) => (
                        <TransactionItem transaction={transaction} key={transaction.id} />
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
}

// <Transaction key={transaction.id} 
// transaction={transaction}/> 