
import PropTypes from 'prop-types';
import Resucks, { Signals as ResucksSignals } from '../../lib/Resucks.js';

import BoardComponent from '../component/Board.js';

const Board = () => {
  const routerDefault = Resucks.route(ResucksSignals.Mount)
    .render(BoardComponent);

  const routerBoardClicked = Resucks.route(Signals.PanelClicked)
    .query(Signals.PanelClicked)
    .transformer((target) => { return { panelClicked: target }; })
    .render(BoardComponent);

  const result = Resucks.instance().party(Board)
    .contract(routerDefault)
    .contract(routerBoardClicked)
    .done();
  return result;
}

const Signals = {
  PanelClicked: { name: 'panel-clicked', host: Board,
    payload: { panel: PropTypes.object }
  }
}

export default Board;
export { Signals };
