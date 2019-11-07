import React from 'react'
import has from "lodash/has"
import { truncate } from './util';
export const FindLatitude = ({setLat}) => {
  let findLat = latLink
  try {
    const unused = window.navigator.geolocation.getCurrentPosition;
    findLat = <a
      className="lat-link"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(position => {
          setLat(truncate(position.coords.latitude, 2))
        })
      }}>Find My Latitude</a>
  } catch (e) {}
  return findLat
}
const latLink = <a className="lat-link" href="https://www.latlong.net/" target="_blank">Find My Latitude</a>