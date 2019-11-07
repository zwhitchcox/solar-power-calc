import React from 'react'
import has from "lodash/has"
import { truncate } from './util';
export const FindLatitude = ({setLat}) => (
  <a
      className="lat-link"
      href="https://www.latlong.net/"
      target="_blank"
      onClick={e => {
        try {
          navigator.geolocation.getCurrentPosition(position => {
            setLat(truncate(position.coords.latitude, 2))
          })
          e.preventDefault()
        } catch (e) {}
      }}>Find My Latitude</a>
)