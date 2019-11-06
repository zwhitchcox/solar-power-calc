import React, {useState} from 'react';
import './App.css';
import {PVArraysInfo} from './PVArraysInfo/PVArraysInfo';
import { AverageOutputPerDayByMonth } from './display/AverageOutputPerDayByMonth';
import { toRadians } from './calculations/util';
import { orientationsToAzimuth } from './calculations/maps';
import { DegreesInput } from './ui/degrees-input';
import { NumberInput } from './ui/number-input';

const pvArrayInit = {
  tilt: 0,
  orientation: "S",
  watts: 100,
}
const lsPVArrays = window.localStorage.pvArrays
const pvArraysInit = lsPVArrays ? JSON.parse(lsPVArrays) : [pvArrayInit]
const latInit = window.localStorage.lat ? window.localStorage.lat : 0
const samplesPerDayInit = window.localStorage.samplesPerDay ? Number(window.localStorage.samplesPerDay) : 100
const App: React.FC = () => {
  const [pvArrays, setPVArrays] = useState(pvArraysInit)
  const [lat, setLat] = useState(latInit)
  const [samplesPerDay, setSamplesPerDay] = useState(samplesPerDayInit)
  const latAdjusted = toRadians(Number(lat))
  const pvArraysCleaned = pvArrays.map(pvArray => ({
    ...pvArray,
    orientation: toRadians(orientationsToAzimuth[pvArray.orientation]),
    tilt: toRadians(pvArray.tilt)
  }))
  window.localStorage.pvArrays = JSON.stringify(pvArrays)
  window.localStorage.lat = lat
  window.localStorage.samplesPerDay = samplesPerDay
  return (
    <div className="App">
      <header>
        <h1 className="header">Solar Power Calculator</h1>
      </header>
      <div>
        <div className="form-group">
        <DegreesInput
          onChange={value => setLat(value)}
          _label="Latitude"
          value={lat}
        />
        </div>
        <div className="form-group">
        <NumberInput
          _label="Samples Per Day"
          onChange={e => setSamplesPerDay(e.target.value)}
          value={samplesPerDay}
        />
        </div>
      </div>
      <PVArraysInfo
        pvArrays={pvArrays}
        setPVArrays={setPVArrays}
        pvArrayInit={pvArrayInit}
      />
      <AverageOutputPerDayByMonth pvArrays={pvArraysCleaned} lat={latAdjusted} samplesPerDay={samplesPerDay} />
    </div>
  );
}

export default App;
