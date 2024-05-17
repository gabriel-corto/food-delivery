interface HeaderButtonProps {
  color: "purple" | "yellow"
  variant: "purple" | "yellow"
  children: React.ReactNode
}

export const HeaderButton = ({ color, variant, children }: HeaderButtonProps) => {
  return(
    <button 
      style={{ 
        color: color === "purple" ? "var(--brandPurpleDark)" : "var(--brandYellowDark)",
        background: variant === "purple" ? "var(--brandPurpleLight)" : "var(--brandYellowLight)" }}>
      { children }
    </button>
  )
}