import React from 'react'
import "./number-input.css"

export const NumberInput = props => {
  const {_label, ...moreProps} = props
  return <>
    <label className="number-label" htmlFor={_label}>{_label}</label>
    <input
      className="number-input"
      name={_label}
      aria-label={_label}
      {...moreProps}
    />
  </>
}