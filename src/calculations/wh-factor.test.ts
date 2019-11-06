import { test, describe } from 'tezt'
import expect from 'expect'
import { instantIntensityPercentage, calculateWHFactorForDay } from './wh-factor'

describe("calculate instant intensity %", () => {
  test("noon, flat, on equator", () => {
    const panelInfo = {
      orientation: 0,
      tilt: 0,
      lat: 0,
      dec: 0,
      hourAngle: 0,
    }
    expect(instantIntensityPercentage(panelInfo)).toBe(1)
  })

  test("calculate wh factor for day", () => {
    const panelInfo = {
      tilt: 0,
      orientation: 0,
      lat: 0.5585053606381855,
      dec: -0.37693486117985175,
      hourAngle: 0,
    }
    // don't know how I would test this
    console.log(instantIntensityPercentage(panelInfo))
  })
  test.only("calculate wh factor for day", () => {
    const panelInfo = {
      tilt: 0.017453292519943295,
      orientation: 3.141592653589793,
      lat: 0,
      dec: 0.021126882410403575,
      hourAngle: 0,
    }
    console.log(instantIntensityPercentage(panelInfo))
  })

})











