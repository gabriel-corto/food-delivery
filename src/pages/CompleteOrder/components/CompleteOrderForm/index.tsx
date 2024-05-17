
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { SectionTitle } from '../SectionTitle'
import { AdressForm } from './AdressForm'

import './style.css'
import { PaymentMethodsOptions } from './PaymentMethodsOptions'
export function CompleteOderForm() {
  return(
    <div className="completed-order-form-container">
      <h1>Complete seu Pedido</h1>

      <div className='form-section-container'>
        <SectionTitle 
          title='Endereço de etrega'
          subtitle='Informe o endereço onde deseja receber o seu pedido'
          icon={<MapPinLine color='var(--brandYellowDark)' size={22} />}
        />

        <AdressForm />
      </div>
      <div className='form-section-container'>
        <SectionTitle 
          title='Pagamento'
          subtitle='O Pagamento é feito na entrega. Escolha a forma que deseja pagar'
          icon={<CurrencyDollar color='var(--brandPurple)' size={22} />}
        />

        <PaymentMethodsOptions />
      </div>
    </div>
  )
}