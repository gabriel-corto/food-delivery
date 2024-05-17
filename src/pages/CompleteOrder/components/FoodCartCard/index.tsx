
import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/Ui/QuantityInput/QuantityInput'
import './style.css'

export function FoodCartCard() {
  return(
    <div className="food-cart-card-container">
      <div className="cart-card-info">
        <img src="/hamburguer1.png" />
        <div>
          <strong>Hamburguer Delicioso</strong>
          <div className="actions-container">
            <QuantityInput size='small' />
            <button className="remove-button">
              <Trash size={16}/>
              <span>Remover</span>
            </button>
          </div>
        </div>
        
        <p>Kz 0,00</p>
      </div>
    </div>
  )
}