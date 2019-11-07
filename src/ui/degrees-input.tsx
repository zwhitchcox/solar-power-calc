import React, { useState } from 'react'
import "./degrees-input.css"
import { setState } from 'expect/build/jestMatchersObject'

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
  const {_label, setVal, value, ...moreProps} = props
  const [focused, setFocused] = useState(false)
  const style = props.width ?
    {width: props.width + "px"} : {}
  return <>
    <label className="degrees-label" htmlFor={_label}>{_label}</label>
    <input
      className="degrees-input"
      style={style}
      name={_label}
      value={focused ? value : addDegree(value)}
      aria-label={_label}
      onBlur={() => {
        setFocused(false)
        let numVal = Number(value)
        if (Number.isNaN(numVal)) {
          numVal = 0
        }
        setVal(numVal)
      }}
      onFocus={() => {
        setFocused(true)
        const withoutDegree = removeDegree(value)
        if (withoutDegree === 0) {
          setVal("")
        }
      }}
      onChange={e => {
        setVal(e.target.value)
      }}
      {...moreProps}

    />
  </>
}