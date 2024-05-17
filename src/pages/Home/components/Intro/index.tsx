
import './style.css'
import introImg from '/cover.png'
import { ShoppingCart } from 'phosphor-react'

export function Intro() {
  return(
    <section className='intro-container'>
      <div className="intro-content">
        <div className='intro-main-content'>
          <section>
            <h1>Encontre a melhor refeição para qualquer hora do dia</h1>
          </section>

          <div className="intro-benefits-container">
            <p className='typograph-one'>
              <i>
                <ShoppingCart weight='fill' size={20} />
              </i>
              <span>Compra simples e segura</span>
            </p>

            <p className='typograph-two'>
              <i>
                <ShoppingCart weight='fill' size={20} />
              </i>
              <span>A sacola mantém a refeição intacta</span>
            </p>

            <p className='typograph-three'>
              <i><ShoppingCart weight='fill' size={20} /></i>
              <span>Entrega rápida e rastreada</span>
            </p>

            <p className='typograph-four'>
              <i><ShoppingCart weight='fill' size={20} /></i>
              <span>A refeição chega quentinha até voçê</span>
            </p>
          </div>
        </div>

        <img src={introImg}/>
      </div>
    </section>
  )
}