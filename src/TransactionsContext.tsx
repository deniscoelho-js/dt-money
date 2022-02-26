import {createContext, useEffect, useState, ReactNode} from 'react'
import { api } from './components/services/api'

type Transaction = {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string
}

type TransactionInput = Omit<Transaction, 'id' | 'createdId'>

type TransactionsProviderProps = {
  children: ReactNode
}

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({children}: TransactionsProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

  function createTransaction(transaction: TransactionInput){
    api.post('/transactions', transaction)
  }

  return(
    <TransactionsContext.Provider value={transactions} >
      {children}
    </TransactionsContext.Provider>
  )
}