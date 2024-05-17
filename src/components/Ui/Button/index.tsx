
import { ButtonHTMLAttributes } from 'react'
import './style.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number

}
export function Button({text, ...props }: ButtonProps) {
  return(
    <button className="button-container" {...props}>
      {text}
    </button>
  )
}