import React from 'react'
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
          }, error => {
            window.open(
              'https://www.latlong.net',
              '_blank' // <- This is what makes it open in a new window.
            );
          })
          e.preventDefault()
        } catch (e) {}
      }}>Find My Latitude</a>
)