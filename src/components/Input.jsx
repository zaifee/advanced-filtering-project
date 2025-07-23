import React from 'react'

const Input = ({handleChange, title, color, value, name}) => {
  return (
    <label className="sidebar-lablel-container">
      <input onChange={handleChange} value={value} name={name} type="radio"  />
      <span
      className='checkmark'
      style={{backgroundColor: color}}
      >
      </span>
       {title}
    </label>
  )
}

export default Input