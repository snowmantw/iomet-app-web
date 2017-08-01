import Resucks, { Renderers, Signals as ResucksSignals } from '../lib/Resucks.js';
import SummaryInitializing from '../component/SummaryInitializing.js';

import SummaryInitializingEffect from '../effect/SummaryInitializing.js';

/**
 * Requirement: GeolocationService
 */
const Summary = () => {
  const routerDefault = Resucks.route(ResucksSignals.Mount)
    .render(SummaryInitializing, Object.assign({}, Signals.Initializing));

  const routerInitializing = Resucks.route(Signals.Initializing)
    .effect(Renderers.IO, SummaryInitializingEffect, Object.assign({}, Signals.Initialized));

  const result = Resucks.instance().party(Summary)
    .contract(routerDefault)
    .contract(routerInitializing)
    .done();
  return result;
};

const Signals = {
  Initializing: { name: 'summary-initializing', host: Summary },
  Initialized: { name: 'summary-initialized', host: Summary }
}

export default Summary;
export { Signals };
