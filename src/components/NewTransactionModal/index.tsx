import React, { FormEvent } from 'react'
import { useState } from 'react'
import Modal from 'react-modal'
import { api } from '../services/api'
import {Container, TransactionTypeContainer, RadioBox} from './styles'

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void
}

export function  NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){

  const [type, setType] = useState('deposit')
  const [title, setTitle] =useState('')
  const [value, setValue] =useState(0)
  const [category, setCategory] =useState('')


  const handleCreateNewTransaction = (event: FormEvent) => {
    event.preventDefault()

    const data = {
      title,
      value,
      category,
      type
    }

    api.post('/transactions', data)
  }

  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className='react-modal-content'
    >

    <button 
      type='button' 
      onClick={onRequestClose} 
      className='react-modal-close'
    >
      <img src="images/close.png" alt="" />
    </button>

    <Container onSubmit={handleCreateNewTransaction} >
      <h2>cadastrar</h2>

      <input 
        placeholder='titulo' 
        value={title}
        onChange={event => setTitle(event.target.value)}
        />
      
      <input 
        type='number' 
        placeholder='Valor' 
        value={value}
        onChange={event => setValue(Number(event.target.value))}
        />

      <TransactionTypeContainer>
        <RadioBox
          type='button'
          onClick={() => {setType('deposit')}}
          isActive={type === 'deposit'}
          activeColor='green'
        >
          <img src="images/income.png" alt="" />
          <span>Entrada</span>
        </RadioBox>

        <RadioBox
          type='button'
          onClick={() => {setType('withdraw')}}
          isActive={type === 'withdraw'}
          activeColor='red'
        >
          <img src="images/outcome.png" alt="" />
          <span>Saída</span>
        </RadioBox>
      </TransactionTypeContainer>

      <input 
        placeholder='Categoria' 
        value={category}
        onChange={event => setCategory(event.target.value)}
        />
      <button type="submit">Cadastrar</button>
    </Container>
    </Modal>
  )
}
