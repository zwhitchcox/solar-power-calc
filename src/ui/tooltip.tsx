import React from 'react'
import "./tooltip.css"

export const ToolTip = ({text}) => (
  <div className="tooltip">
    <button className="tooltip-btn"><i className="fa fa-question"></i></button>
    <span className="tooltiptext">{text}</span>
  </div>
)