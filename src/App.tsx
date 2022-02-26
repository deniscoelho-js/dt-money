import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import {Header} from './components/Header'
import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsContext, TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setSsNewTransactionModalOpen] = useState(false)

  const handleOpenNewTransactionModal = () => {
    setSsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransactionModal = () => {
    setSsNewTransactionModalOpen(false)
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard/>
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

