
import { CompleteOderForm } from './components/CompleteOrderForm'
import { SelectedFoods } from './components/SelectedFoods/index.tsx'
import './style.css'

export function CompletedOrderPage() {
  return(
    <div className="complete-order-container">
      <CompleteOderForm />
      <SelectedFoods />
    </div>
  )
}