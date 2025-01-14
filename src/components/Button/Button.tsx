import React, { CSSProperties } from 'react'


type ButtonProps = {
  bgColor: CSSProperties['backgroundColor'],
  color: CSSProperties['color'],
  size?: string,
  text: string,
  borderRadius: CSSProperties['borderRadius']
}


const Button = ({bgColor, color, size, text, borderRadius } : ButtonProps) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color: color, borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  )
}

export default Button