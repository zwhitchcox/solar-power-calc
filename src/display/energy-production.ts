import { calculateWHFactorForYear } from "../calculations/wh-factor"
import { memoize, memoizeLS } from "../util"


const currentYear = new Date().getFullYear()
const getDaysInMonth = memoize((year, month) => new Date(year, month, 0).getDate())
const getIntervalAvg = arr => arr.reduce((acc, cur) => acc+cur, 0) / arr.length

export const getAvgProdByMonth = memoize(pvArrayInfo => {
  const { watts, ...whFactorInfo } = pvArrayInfo
  const whFactorForYear = calculateWHFactorForYear(whFactorInfo)
  let curDay = 0
  return [...new Array(12)]
    .map((_, i) => {
      const monthFactors = whFactorForYear
        .slice(curDay, curDay += getDaysInMonth(currentYear, i))
      const intervalAvg = getIntervalAvg(monthFactors)
      return intervalAvg
    })
    .map(whFactor => whFactor*watts)
})

export const getAvgProdByMonthLS = memoizeLS("getAvgProdByMonth", getAvgProdByMonth)