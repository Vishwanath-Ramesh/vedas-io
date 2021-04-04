import React from 'react'

import './Button.css'

const Button = ({ id, label, className, variant, onClick }) => {
  return (
    <button
      type="button"
      id={id}
      className={`button ${variant} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
