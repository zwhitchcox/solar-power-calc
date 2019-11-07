import React, { useState, useEffect } from 'react'
import { getAvgProdByMonthLS } from './energy-production'
import "./styles.css"
import { memoize, truncate } from '../util'


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
export const AverageOutputPerDayByMonth = ({pvArrays, lat}) => {
  const getAvgProdsByMonth = pvArrays => pvArrays
    .map(pvArray => getAvgProdByMonthLS({...pvArray, lat, samplesPerDay: 100}))
  const [avgProdByMonth, setAvgProdByMonth] =
    useState({
      calculating: false,
      data: [] as any[],
      time: 0,
    })
  useEffect(() => {
    setTimeout(calculate, 0)
  }, [])

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
      Average Production Per Day  (kw/h)
    </h3>
    {avgProdByMonth.calculating ?
      renderCalculating() :
      renderAvgProdByMonth(avgProdByMonth)}
    </div>
  )
}
const renderCalculating = () => <div className="calculating">Calculating...</div>

const renderCalculationTime = calculationTime => {
  if (calculationTime > 10) {
    console.log("calculationTime", calculationTime)
    return (
      <div className="calc-time">
        Calculation Time: {truncate(calculationTime/1000, 2)} seconds
      </div>
    )
  }
  return ""
}

const getSingleMonth = memoize((data, i) => (
  data.reduce((acc, cur) => [...acc, cur[i]], [])
))
const renderAvgProdByMonth = avgProdByMonth => {
  // const monthProds = []
  // avgProdByMonth
  //   .map((prod, i) => )

  const monthlyData = [] as any[]
  for (let i = 0; i < 12; i++) {
    monthlyData.push(getSingleMonth(avgProdByMonth.data, i))
  }

  return (
    <>
      <div className="all-months-wrapper">
        {monthlyData.map(renderMonth)}
      </div>
      {renderCalculationTime(avgProdByMonth.time)}
    </>
  )
}

const renderMonth = (production, i) => {
  const underLine = production.length > 1 ? {
    borderBottom: "1px solid black",
  } : {}
  return (
    <div key={i} className="month-wrapper">
      <div className="month-label">{monthLabels[i]}</div>
      <div style={underLine}>
        {production.map((prod, i) => (
          <div className="month-data" key={i}>
            {/* {production.length > 1 ? (i + 1) + ". " : ""} */}
            {truncate(prod / 1000, 2)}</div>
        ))}
      </div>
      {renderTotal(production)}
    </div>
  )
}

const renderTotal = production => {
  if (production.length < 2) {
    return ""
  }
  const sum = production.reduce((acc, cur) => acc + cur, 0)
  return <div className="month-total">
    {truncate(sum / 1000, 2)}
  </div>
}


