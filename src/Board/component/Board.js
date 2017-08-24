import React from 'react';
import Resucks from '../../lib/Resucks.js';
import ConditionPanel from '../../ConditionPanel/container/ConditionPanel.js'
import { Signals as BoardSignals } from '../container/Board.js';
import Handler from './Handler.js';

import './Board.css';

const Board = (prop) => {

  let handler = null;
  let conditionalPanel = null;
  if (prop && prop.panelClicked) {
    conditionalPanel = <ConditionPanel id="conditional-panel" />;
    handler = <Handler />;
  } else {
    conditionalPanel = <ConditionPanel id="conditional-panel" />;
  }

  return (
    <div className="Board">
      <div className="PanelRow">
			<div onClick={ (e) => {
        const signal =
					Object.assign({}, BoardSignals.PanelClicked, {
            payload: { panel: e.currentTarget.firstElementChild }
          });
          Resucks.instance().emit(Board, signal);
      }} >

      { conditionalPanel }
			</div> 
      { handler }
      </div>
    </div>
  );
};

export default Board;
