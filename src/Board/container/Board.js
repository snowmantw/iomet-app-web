
import PropTypes from 'prop-types';
import Resucks, { Signals as ResucksSignals } from '../../lib/Resucks.js';

import BoardComponent from '../component/Board.js';

const Board = () => {
  const routerDefault = Resucks.route(ResucksSignals.Mount)
    .render(BoardComponent);

  const routerPanelClicked = Resucks.route(Signals.PanelClicked)
    .query(Signals.PanelClicked)
    .transformer((target) => { return { panelClicked: target }; })
    .render(BoardComponent);

  const routerHandlerClicked = Resucks.route(Signals.HandlerClicked)
    .query(Signals.HandlerClicked)
    .transformer((status) => { return status; })
    .render(BoardComponent);

  const result = Resucks.instance().party(Board)
    .contract(routerDefault)
    .contract(routerPanelClicked)
    .contract(routerHandlerClicked)
    .done();
  return result;
}

const Signals = {
  PanelClicked: { name: 'panel-clicked', host: Board,
    payload: { panel: PropTypes.object }
  },
  HandlerClicked: { name: 'handler-clicked', host: Board,
    payload: { remove: PropTypes.bool, attach: PropTypes.bool } }
}

export default Board;
export { Signals };
