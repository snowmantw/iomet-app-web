import React from 'react';
import './ConditionDisplay.css';

const ConditionDisplay = (props) => {
  return (
    <div className="ConditionDisplay">
      { `Air Quality: ${props.condition.data.aqi}` }
    </div>
  );
};

export default ConditionDisplay;
