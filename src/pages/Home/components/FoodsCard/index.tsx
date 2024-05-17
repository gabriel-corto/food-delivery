
import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/Ui/QuantityInput/QuantityInput'

import './style.css'
import { formatMoney } from '../../../../utils/FormatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Food {
  id: number
  tags: string[]
  name: string
  descriptions: string
  photo: string
  price: number
}
interface FoodProps {
  food: Food;
}
export function FoodCard({ food }: FoodProps) {
  const [quantity, setQuantity] = useState(1)

  function Increase() {
    setQuantity((quantity) => quantity + 1)
  }
  function Decrease() {
    setQuantity((quantity) => quantity - 1)
  }
  const formatedMoney = formatMoney(food.price)

  const { addFoodToCart } = useCart()

  function handleAddFoodToCart() {
    const foodToAdd = {
      ...food,
      quantity: 1
    }
    addFoodToCart(foodToAdd)
  }
  return(
    <div className='food-card'>
      <img src={`/${food.photo}`} />

      <div className="tags">
        {food.tags.map(tag => {
          return(
            <span key={`${food.id}${tag}`}>{tag}</span>
          )
        })}
      </div>

      <h3 className='name'>{food.name}</h3>
      <p className='description'>{food.descriptions}</p>

      <footer className='card-footer'>
        <div>
          <span>KZ</span>
          <strong>{formatedMoney}</strong>
        </div>

        <div className="add-card-wrapper">
          <QuantityInput size='medium' onIncrease={Increase} onDecrease={Decrease} quantity={quantity}/>
          <button onClick={handleAddFoodToCart} className='button-cart'>
            <ShoppingCart size={22} weight='fill' />
          </button>
        </div>
      </footer>
    </div>
  )
} 