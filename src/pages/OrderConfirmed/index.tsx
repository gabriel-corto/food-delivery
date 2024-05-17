
import './style.css'
import { MapPin, Clock, CurrencyDollar} from 'phosphor-react'

export function OrderConfirmedPage() {
  return(
    <div className="order-confirmed-container">
      <div>
        <h1>Ugu! Pedido confirmado</h1>
        <p>Agora é só aguardar e logo a refeição chegará a voçê.</p>
      </div>

      <section>
        <div className="order-details-container">
          <p>
            <i className="map"><MapPin weight='fill'/></i>
            <div>
              <span>Entrega em <strong>Avenida 21 de Janeiro</strong></span>
              <span>Luanda - Maianga</span>
            </div>
          </p>
          <p>
            <i className="clock"><Clock weight='fill'/></i>
            <div>
              <span>Previsão de Entrega</span>
              <strong>25m - 30m</strong>
            </div>
          </p>
          <p>
            <i className="payment"><CurrencyDollar weight='fill'/></i>
            <div>
              <span>Pagamento na Entrega</span>
              <strong>Cartão de Crédito</strong>
            </div>
          </p>
        </div>

        <img src="/avatar.png" alt="" />
      </section>
    </div>
  )
}