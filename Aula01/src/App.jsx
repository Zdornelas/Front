import React from 'react'
import Adicao from './assets/Components/Adicao'
import Subtracao from './assets/Components/Subtracao'
import Multiplicacao from './assets/Components/Multiplicacao'
import Divisao from './assets/Components/Divisao'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2} />
      <Subtracao num1={2} num2={2} />
      <Multiplicacao mum1={2} num2={2} />
      <Divisao num1={2} num2={2} />
    </div>
  )
}

export default App
