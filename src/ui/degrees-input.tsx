import React from 'react'
import "./degrees-input.css"

 export const addDegree = num => {
 if (String(num).charCodeAt(num.length - 1) == 176) {
    return num
  }
  return num + String.fromCharCode(176)
}
export const removeDegree = str => {
  if (str.charCodeAt(str.length - 1) == 176)
    return str.substr(0, str.length - 1)
  return Number(str)
}
export const DegreesInput = props => {
  const {_label, onChange, value, ...moreProps} = props
  return <>
    <label className="degrees-label" htmlFor={_label}>{_label}</label>
    <input
      className="degrees-input"
      name={_label}
      value={addDegree(value)}
      aria-label={_label}
      onChange={e => {
        onChange(removeDegree(e.target.value))
      }}
      {...moreProps}

    />
  </>
}