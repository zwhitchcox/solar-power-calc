import React, {useState} from 'react'
import "./PVArraysInfo.css"
import { PVArrayInfo } from './PVArrayInfo'

export const PVArraysInfo = ({pvArrays, setPVArrays, pvArrayInit}) => {

  const addArray = () => setPVArrays([...pvArrays, pvArrayInit])
  const removeArray = i => () => setPVArrays([
    ...pvArrays.slice(0, i),
    ...pvArrays.slice(i + 1),
  ])
  const setVal = i => (key, val) => setPVArrays([
    ...pvArrays.slice(0, i),
    {
      ...pvArrays[i],
      [key]: val,
    },
    ...pvArrays.slice(i + 1),
  ])
  return <>
    <div className="panels-group">
      <h3 className="pv-arrays-header">PV Arrays</h3>
      {pvArrays.map((pvArray, i) => (
        <div>
        <span className="array-number">{i+ 1}.</span>
        <PVArrayInfo
          key={i}
          setVal={setVal(i)}
          remove={removeArray(i)}
          val={pvArrays[i]}
        />
        </div>
      ))}
    <button className="button" onClick={addArray}>+</button>
    </div>
  </>
}