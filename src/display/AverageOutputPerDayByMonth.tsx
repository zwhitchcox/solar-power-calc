import React, { useState } from 'react'
import { getAvgProdByMonth } from './energy-production'
import "./styles.css"


const truncate = (num, precision) => {
  const factor = 10**precision
  return (num * factor | 0) / factor
}
const monthLabels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
export const AverageOutputPerDayByMonth = ({pvArrays, lat, samplesPerDay}) => {
  const getAvgProdsByMonth = pvArrays => pvArrays
    .map(pvArray => getAvgProdByMonth({...pvArray, lat, samplesPerDay}))
  const [avgProdByMonth, setAvgProdByMonth] =
    useState({
      calculating: false,
      data: [] as any[],
      time: 0,
    })

  const calculate = () => {
    setAvgProdByMonth({
      data: [],
      calculating: true,
      time: 0,
    })
    setTimeout(() => {
      const startTime = +new Date
      const data = getAvgProdsByMonth(pvArrays)
      const endTime = +new Date
      setAvgProdByMonth({
        data,
        calculating: false,
        time: endTime - startTime,
      })
    }, 0)
  }

  return (
    <div>
    <button className="button" onClick={calculate}>Calculate</button>
    <h3 className="display-header">
      Average Production Per Day By Month (kw/h)
    </h3>
    {avgProdByMonth.calculating ? <div className="calculating">Calculating...</div> :
    <>
      <table>
        <thead>
          <tr>
            <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
            {monthLabels.map(label => <th key={label}>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {avgProdByMonth.data.map((averageProduction, i) => <tr key={i}>
            <td>{i+1}.</td>
            {averageProduction.map((production, i) => <td key={i}>{truncate(production / 1000, 2)}</td>)}
          </tr>)}
          {avgProdByMonth.time > 0 ?
          <tr>
            <td colSpan={13} style={{border: "none"}}>
                <div className="calc-time">Calculation Time: {truncate(avgProdByMonth.time/1000, 2)} seconds</div>
            </td>
          </tr>
          : "" }
        </tbody>
      </table>
    </>}
    </div>
  )
}

const singleArray = averageProduction => {

}

