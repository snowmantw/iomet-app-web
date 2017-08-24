import React from 'react';
import Resucks from '../../lib/Resucks.js';
import ConditionPanel from '../../ConditionPanel/container/ConditionPanel.js'
import { Signals as BoardSignals } from '../container/Board.js';

import './Board.css';

const Board = (prop) => {

  let conditionalPanel = null;
  if (prop && prop.panelClicked) {
    console.log('panel clicked: todo: add the handlers.');
    conditionalPanel = <ConditionPanel id="conditional-panel" />;
  } else {
    conditionalPanel = <ConditionPanel id="conditional-panel" />;
  }

  return (
    <div className="Board">
			<div onClick={ (e) => {
        const signal =
					Object.assign({}, BoardSignals.PanelClicked, {
            payload: { panel: e.currentTarget.firstElementChild }
          });
          Resucks.instance().emit(Board, signal);
      }} >

      { conditionalPanel }
			</div> 
    </div>
  );
};

export default Board;
