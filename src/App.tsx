import React, {useState} from 'react';
import './App.css';
import {PVArraysInfo} from './PVArraysInfo/PVArraysInfo';
import { AverageOutputPerDayByMonth } from './display/AverageOutputPerDayByMonth';
import { toRadians } from './calculations/util';
import { orientationsToAzimuth } from './calculations/maps';
import { DegreesInput } from './ui/degrees-input';
import { FindLatitude } from './FindLatitude';

navigator.geolocation.getCurrentPosition(position => {
  console.log(position)
})
const pvArrayInit = {
  tilt: 0,
  orientation: "S",
  watts: 500,
}
const lsPVArrays = window.localStorage.pvArrays
const pvArraysInit = lsPVArrays ? JSON.parse(lsPVArrays) : [pvArrayInit]
const latInit = window.localStorage.lat ? window.localStorage.lat : 0
const App: React.FC = () => {
  const [pvArrays, setPVArrays] = useState(pvArraysInit)
  const [lat, setLat] = useState(latInit)
  const latAdjusted = toRadians(Number(lat))
  const pvArraysCleaned = pvArrays.map(pvArray => ({
    ...pvArray,
    orientation: toRadians(orientationsToAzimuth[pvArray.orientation]),
    tilt: toRadians(pvArray.tilt)
  }))
  window.localStorage.pvArrays = JSON.stringify(pvArrays)
  window.localStorage.lat = lat
  return (
    <div className="App">
      <header>
        <h1 className="header">Solar Power Calculator</h1>
      </header>
      <div>
        <div className="form-group">
        <DegreesInput
          setVal={setLat}
          _label="Latitude"
          value={lat}
          width={80}
        />
        <FindLatitude setLat={setLat} />
        </div>
        <div className="form-group">
        </div>
      </div>
      <PVArraysInfo
        pvArrays={pvArrays}
        setPVArrays={setPVArrays}
        pvArrayInit={pvArrayInit}
      />
      <AverageOutputPerDayByMonth pvArrays={pvArraysCleaned} lat={latAdjusted} />
    </div>
  );
}

export default App;
