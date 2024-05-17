
import { ReactNode } from 'react'
import './style.css'

interface SectionTitleProps {
  title: string
  subtitle: string 
  icon: ReactNode
}
export function SectionTitle({ title, subtitle, icon}: SectionTitleProps) {
  return(
    <div className='section-title-container'>
      { icon }
      <div>
        <strong>{title}</strong>
        <span>{subtitle}</span>
      </div>
    </div>
  )
}