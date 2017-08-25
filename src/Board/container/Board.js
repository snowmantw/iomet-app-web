import React from 'react';
import Resucks, { Signals as ResucksSignals } from '../../lib/Resucks.js';
import PropTypes from 'prop-types';
import ConditionPanel from '../../ConditionPanel/container/ConditionPanel.js'
import Handler from '../component/Handler.js';
import BoardComponent from '../component/Board.js';

const Board = () => {

  const rows = [
    // The ConditionalPanel is the current default panel.
    {
      id: 'condition-panel',
      panel: (<ConditionPanel />),
      handler: null
    }
  ];

  const routerDefault = Resucks.route(ResucksSignals.Mount)
    .transformer(() => { return {rows}; })
    .render(BoardComponent);

  const routerPanelClicked = Resucks.route(Signals.PanelClicked)
    .query(Signals.PanelClicked)
    .transformer((target) => {
      const targetRowId = rows.findIndex((e, i, a) => {
        return e.id === target.id
      });
      if (-1 === targetRowId) {
        console.error('cannot find clicked panel row: ', target.id, target);
        return [];
      } else {
        const panelId = rows[targetRowId].id
        rows[targetRowId].handler = (<Handler panelId={panelId} />);
      }
      return {rows};
    })
    .render(BoardComponent);

  // TODO: to add sub-panel for selecting type of attachment
  const routerHandlerClicked = Resucks.route(Signals.HandlerClicked)
    .query(Signals.HandlerClicked)
    .transformer((status) => { console.log('handler clicked: ', status); return {rows}; })
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
    payload: { id: PropTypes.string }
  },
  HandlerClicked: { name: 'handler-clicked', host: Board,
    payload: { remove: PropTypes.bool, attach: PropTypes.bool, panelId: PropTypes.string } }
}

export default Board;
export { Signals };
