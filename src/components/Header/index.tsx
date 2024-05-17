import { HeaderButton } from '../Ui/HeaderButton'
import { MapPin, ShoppingCart } from 'phosphor-react'

import foodLogoImg from '../../assets/logo.png'
import './style.css'
import { NavLink } from 'react-router-dom'

export function Header() {
  return(
    <header className='header'>
      <div className="logo">
        <div className='flex-logo'>
          <NavLink to="/">
           <img src={foodLogoImg} />
          </NavLink>
          <strong>Food <br /> Delivery</strong>
        </div>
      </div>

      <div className='header-buttons-container'>
        <HeaderButton variant='purple' color='purple'>
          <MapPin weight='fill' size={20}/>
          <span>Luanda, AO</span>
        </HeaderButton>

        <NavLink to="/completedOrder">
          <HeaderButton variant='yellow' color='yellow'>
            <ShoppingCart weight='fill' size={20}/>
            <span></span>
          </HeaderButton>
        </NavLink>
      </div>
    </header>
  )
}