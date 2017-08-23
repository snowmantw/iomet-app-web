import React from 'react';
import Resucks from '../../lib/Resucks.js';
import ConditionPanel from '../../ConditionPanel/container/ConditionPanel.js'
import { Signals as BoardSignals } from '../container/Board.js';

import './Board.css';

const Board = () => {
  return (
    <div className="Board">
			<div onClick={ (e) => {
        Resucks.instance().emit(Board,
					Object.assign({ panel: e.currentTarget.firstElementChild },
          BoardSignals.PanelClicked))
      }} >
			<ConditionPanel />
			</div> 
    </div>
  );
};

export default Board;
