
import PropTypes from 'prop-types';
import Resucks, { Signals as ResucksSignals } from '../../lib/Resucks.js';

import BoardComponent from '../component/Board.js';

const Board = () => {
  const routerDefault = Resucks.route(ResucksSignals.Mount)
    .render(BoardComponent);

  const result = Resucks.instance().party(Board)
    .contract(routerDefault)
    .done();
  return result;
}

const Signals = {
  PanelClicked: { name: 'panel-clicked', host: Board,
    payload: { target: PropTypes.object }
  }
}

export default Board;
export { Signals };
