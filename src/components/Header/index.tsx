import { useState } from 'react'
import {Container, Content} from './styles'
import Modal from 'react-modal'

type HeaderProps = {
  onOpenNewTransactionModal: () => void
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

  return (
    <Container>
      <Content>
        <img src="images/logo.png" alt="" />
        <button type='button' onClick={onOpenNewTransactionModal} >
          Nova Transação
        </button>

      </Content>
    </Container>
  )
}
