
import { InputHTMLAttributes } from 'react'
import './style.css'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export function Input({...props}: InputProps) {
  return(
    <input 
      className="input-styled-container" {...props } />

  )
}