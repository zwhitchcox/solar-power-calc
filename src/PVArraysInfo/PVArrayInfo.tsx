import React from 'react'
import { orientationsToAzimuth } from '../calculations/maps'
import { DegreesInput } from '../ui/degrees-input'
import "./PVArrayInfo.css"
import { NumberInput } from '../ui/number-input'

export const PVArrayInfo = ({remove, setVal, val}) => {
  return <>
    <div className="form-group">
      <DegreesInput
        onChange={value => setVal("tilt", value)}
        _label="Tilt"
        value={val.tilt}
      />
    </div>
    <div className="form-group">
      <label htmlFor="orientation">Orientation</label>
      <select
        className="select-group"
        value={val.orientation}
        onChange={e => setVal("orientation", e.target.value)}
      >
        {
          Object.keys(orientationsToAzimuth)
            .map(orientation => (
              <option
              key={orientation}
              value={orientation}
              >
                {orientation}
              </option>
            )
          )
        }
      </select>
    </div>
    <div className="form-group">
      <NumberInput
        _label="Watts"
        value={val.watts}
        onChange={e => setVal("watts", e.target.value)}
      />
      <button className="button" onClick={remove}>-</button>
    </div>
  </>
}
