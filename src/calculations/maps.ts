import { toRadians } from "./util"

const {
  sin,
  cos,
  asin,
  acos,
  PI
} = Math

const currentYear = new Date().getFullYear()
const isLeapYear = year => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
const daysInYear = isLeapYear(currentYear) ? 366 : 365
const maxDecRad = toRadians(23.45)
const getDeclinationFromDayOfYear = dayOfYear => (
  maxDecRad * sin(toRadians(360/365 * (dayOfYear - 81)))
)
export const declinationsForYear = (() => {
  const result = new Array(daysInYear)
  for (let i = 0; i < daysInYear; i++) {
    result[i] = getDeclinationFromDayOfYear(i)
  }
  return result
})()


export const orientationsToAzimuth = (() => {
  const orientations = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ]
  const result = {}
  orientations
    .forEach((orientation, i) => result[orientation]= i*22.5)
  return result
})()
