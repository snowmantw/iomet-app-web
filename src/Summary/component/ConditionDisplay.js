import React from 'react';
import './ConditionDisplay.css';

const ConditionDisplay = (props) => {
   // in K
  const tempC = Math.ceil(props.conditions.weather.main.temp - 273.15)
  return (
    <div className="ConditionDisplay">
      <div className="ConditionLine"> { `Air Quality: ${props.conditions.air.data.aqi}` } </div>
      <div className="ConditionLine"> { `Temperature: ${tempC}` } </div>
    </div>
  );
};

export default ConditionDisplay;
