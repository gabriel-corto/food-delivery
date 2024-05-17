
import { FoodCartCard } from '../FoodCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import './style.css'

export function SelectedFoods() {
  return(
    <div className="selected-foods-container">
      <h1>Itens Selecionados</h1>
      <div className="details-container">
        <FoodCartCard />
        <FoodCartCard />

        <ConfirmationSection />
      </div>
      
    </div>
  )
}