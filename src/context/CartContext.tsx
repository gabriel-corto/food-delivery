import { ReactNode, createContext, useState } from "react";
import { Food } from "../pages/Home/components/FoodsCard";
import { produce } from "immer";

export interface CartItem extends Food {
  quantity: number
}
interface CartContextType {
  cartItems: CartItem[]
  addFoodToCart: (food: CartItem) => void
  
}
interface CartContextProviderProps {
  children: ReactNode
}
export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addFoodToCart(food: CartItem) {
    const foodAlreadyExistInCart = cartItems.findIndex((cartItem) => {
      cartItem.id === food.id
    })

    const newCart = produce(cartItems, (draft) => {
      if(foodAlreadyExistInCart < 0) {
        draft.push(food)
      } else {
        draft[foodAlreadyExistInCart].quantity += food.quantity
      }
    })

    setCartItems(newCart)
  }

  console.log(cartItems)

  return(
    <CartContext.Provider value={{ cartItems, addFoodToCart }}>
      {children}
    </CartContext.Provider>
  )
}