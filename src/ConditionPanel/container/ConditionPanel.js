import React from 'react';
import PropTypes from 'prop-types';

import GeolocationService from '../../service/Geolocation.js';
import Summary from '../../Summary/container/Summary.js';
//import DetailPanel from '../../DetailPanel/container/DetailPanel.js';

const ConditionPanel = () => {
  return (
    <GeolocationService>
      <Summary />
    </GeolocationService>
  );
};

const Signals = {
  GeolocationResponse: { name: 'geolocation-response', host: ConditionPanel,
    payload: { latitude: PropTypes.string, longitude: PropTypes.string }
  }
}

export default ConditionPanel;
export { Signals };
