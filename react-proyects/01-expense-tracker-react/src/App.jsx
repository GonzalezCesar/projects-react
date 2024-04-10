import './App.css'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/transactions/TransactionList'
import { TransactionForm } from './components/transactions/TransactionForm'
import { Header } from './components/Header'
import { GlobalProvider } from './context/GlobalState'
import { ExpenseChart } from './components/ExpenseChart'

function App() {
  return (
    <GlobalProvider>
      <div className='bg-zinc-950 text-white h-screen flex justify-center items-center'>
        <div className='container mx-auto w-2/5'>
          <div className='bg-zinc-800 p-10  rounded-lg w-full'>
              <Header />
            <div className='flex flex-col md:flex-row justify-between gap-4'>
              <div className='flex-1'>
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className='flex flex-col flex-1'>
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App

{/* <div className="container"> */}
{/* </div> */}