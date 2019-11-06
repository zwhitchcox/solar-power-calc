import { simpson, toRadians } from './util'
import { declinationsForYear } from './maps'
import { memoize } from '../util'
const SAMPLES_PER_DAY = 1000

const {
  sin,
  cos,
  asin,
  acos,
  tan,
  PI
} = Math

const mCos = memoize(cos)
const mSin = memoize(sin)
const mTan = memoize(tan)

export const calculateWHFactorForYear = memoize(opts => (
  declinationsForYear.map(dec => calculateWHFactorForDay({...opts, dec}))
))

export const noonToSunsetRad = (lat, dec) => (
  acos(-mTan(lat)*mTan(dec)) / toRadians(15)
)
export const calculateWHFactorForDay = memoize(opts => {
  const instantPercentage = x => {
    const hourAngle = x*PI/12
    if (typeof hourAngle === "undefined") {
      debugger
    }
    const percentage = instantIntensityPercentage({
      ...opts,
      hourAngle
    })
    if (percentage < 0) {
      return 0
    }
    return percentage
  }
  const intervalRad = noonToSunsetRad(opts.lat, opts.dec)
  const result = simpson(instantPercentage, opts.samplesPerDay, -intervalRad, intervalRad)
  return result
})

export const instantIntensityPercentage = memoize(opts => {
  const { lat, dec, tilt, orientation, hourAngle } = opts
  const sinLat = sin(lat)
  const sinDec = sin(dec)
  const cosHA = cos(hourAngle)
  const sinHA = sin(hourAngle)
  const cosLat = cos(lat)
  const cosDec = cos(dec)
  const altitude = asin(sinDec * sinLat + cosDec * cosHA * cosLat)
  const cosAlt = cos(altitude)

  const tmp = (sinDec * cosLat - cosDec * cosHA * sinLat) /  cosAlt

  let azimuth;
  if (tmp < -1) {
    azimuth = Math.PI
  } else if (tmp > 1) {
    azimuth = 0
  } else {
    azimuth = acos(tmp)
  }

  if (sinHA > 0) {
    azimuth = 2 * PI - azimuth
  }
  const sinAlt = sin(altitude)
  return sinAlt * cos(tilt) + cosAlt * sin(tilt) * cos(orientation - azimuth)
})