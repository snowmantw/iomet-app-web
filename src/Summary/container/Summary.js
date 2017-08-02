
import PropTypes from 'prop-types';
import Resucks, { Renderers, Signals as ResucksSignals } from '../../lib/Resucks.js';
import Initializing from '../component/Initializing.js';
import ConditionDisplay from '../component/ConditionDisplay.js'

import InitializingEffect from '../effect/Initializing.js';
import { Signals as GeolocationServiceSignals } from '../../service/Geolocation.js';

/**
 * Requirement: GeolocationService
 */
const Summary = () => {
  const routerDefault = Resucks.route(ResucksSignals.Mount)
    .render(Initializing, Object.assign({}, Signals.Initializing));

  /*
  const routerInitializing = Resucks.route(Signals.Initializing)
    .effect(Renderers.IO, InitializingEffect, Object.assign({}, Signals.Initialized));
  */

  const routerGeolocationUpdate = Resucks.route(GeolocationServiceSignals.Update)
    .query(GeolocationServiceSignals.Update)
    .transformer((geoUpdate) => { return geoUpdate; })
    .effect(Renderers.IO, InitializingEffect,
      Object.assign({}, Signals.InitializingConditionUpdated));

  const routerInitializingConditionUpdated = Resucks.route(Signals.InitializingConditionUpdated)
    .query(Signals.InitializingConditionUpdated)
    .transformer((condition) => { return condition; })
    .render(ConditionDisplay);

  const result = Resucks.instance().party(Summary)
    .contract(routerDefault)
    .contract(routerGeolocationUpdate)
    .contract(routerInitializingConditionUpdated)
    .done();
  return result;
};

const Signals = {
  Initializing: { name: 'summary-initializing', host: Summary },
  Initialized: { name: 'summary-initialized', host: Summary },
  InitializingConditionUpdated: { name: 'summary-initializing-condition-updated', host: Summary,
    payload: { condition: PropTypes.object }
  },
}

export default Summary;
export { Signals };
