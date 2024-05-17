
import { Intro } from './components/Intro'
import { OurFoods } from './components/OurFoods'
import './style.css'

export function HomePage() {
  return(
    <div className='home-container'>
      <Intro />
      <OurFoods />
    </div>
  )
}