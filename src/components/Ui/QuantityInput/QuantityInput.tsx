
import { Minus, Plus } from 'phosphor-react'
import './style.css'

interface QuantityInputProps {
  size: "small" | "medium",
  onIncrease: () => void 
  onDecrease: () => void 
  quantity: number 
}

export function QuantityInput({ size, onDecrease, onIncrease, quantity } : QuantityInputProps) {
  return(
    <div className="quantity-input-container" style={{ padding: size === "small" ? "0.25rem" : "0.5rem" }}>
      <button className='quantity-button' onClick={onDecrease} disabled={quantity <= 1}>
        <Minus size={18} weight='bold'  />
      </button>
        <input type="number" readOnly value={quantity}/>
      <button className='quantity-button' onClick={onIncrease}>
        <Plus size={18} weight='bold' />
      </button>
    </div>
  )
}