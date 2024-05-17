
import { foods } from '../../../../data/foods'
import { FoodCard } from '../FoodsCard'

import './style.css'
export function OurFoods() {
  return(
    <section className='our-foods-container'>
      <h1>Nossas Refeições</h1>

      <div className="food-lists">
        {foods.map((food) => {
          return(
            <FoodCard key={food.id} food={food} />
          )
        })}
      </div>
    </section>
  )
}