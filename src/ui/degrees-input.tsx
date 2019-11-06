import React, { useState } from 'react'
import "./degrees-input.css"

 export const addDegree = num => {
 if (String(num).charCodeAt(num.length - 1) == 176) {
    return num
  }
  return num + String.fromCharCode(176)
}
export const removeDegree = str => {
  str = String(str)
  if (str.charCodeAt(str.length - 1) == 176)
    return str.substr(0, str.length - 1)
  return Number(str)
}
export const DegreesInput = props => {
  const {_label, onChange, value, ...moreProps} = props
  const [fakeVal, setFakeVal] = useState(addDegree(value))
  return <>
    <label className="degrees-label" htmlFor={_label}>{_label}</label>
    <input
      className="degrees-input"
      name={_label}
      value={fakeVal}
      aria-label={_label}
      onBlur={() => {
        const val = value === "" ? 0 : value
        setFakeVal(addDegree(val))
      }}
      onFocus={() => {
        setFakeVal(removeDegree(value))
      }}
      onChange={e => {
        setFakeVal(e.target.value)
        onChange(e.target.value)
      }}
      {...moreProps}

    />
  </>
}