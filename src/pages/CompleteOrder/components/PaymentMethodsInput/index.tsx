
import { CreditCard } from 'phosphor-react'
import './style.css'

export function PaymentMethodsInput() {
  return(
    <div className="payment-method-container">
      <CreditCard size={16}/>
      <strong>Cartão de Crédito</strong>
    </div>
  )
}