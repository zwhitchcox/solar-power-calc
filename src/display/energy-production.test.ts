import { test } from 'tezt'
import { averageEnergyProductionByMonth } from './energy-production'

test("calculate monthly averages", () => {
  const result = averageEnergyProductionByMonth({
    tilt: 0,
    orientation: 0,
    watts: 100,
    lat: 0,
  })
  console.log(result)
})
