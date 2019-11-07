import React from 'react'
import { orientationsToAzimuth } from '../calculations/maps'
import { DegreesInput } from '../ui/degrees-input'
import "./PVArrayInfo.css"
import { NumberInput } from '../ui/number-input'
import { ToolTip } from '../ui/tooltip'

export const PVArrayInfo = ({remove, setVal, val}) => {
  return <>
    <div className="form-group">
      <DegreesInput
        setVal={value => setVal("tilt", value)}
        _label="Tilt"
        value={val.tilt}
      />
      <ToolTip
        text={"The angle of the panel from the ground"}
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
      <ToolTip
        text={"The direction toward which the panel is tilted"}
      />
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
