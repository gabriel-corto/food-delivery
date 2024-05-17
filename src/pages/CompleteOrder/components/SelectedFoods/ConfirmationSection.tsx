

import { Button } from '../../../../components/Ui/Button'
import './style.css'
export function ConfirmationSection() {
  return(
    <div className="confirmation-section-container">
      <div>
        <span>Total itens</span>
        <span>Kz 0,00</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>Kz 0,00</span>
      </div>
      <div>
        <strong>Total</strong>
        <strong>Kz 0,00</strong>
      </div>

      <Button text="Confirmar Pedido" />
    </div>
  )
}