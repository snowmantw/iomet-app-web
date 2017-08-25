import React from 'react';
import Resucks from '../../lib/Resucks.js';
import Board, { Signals as BoardSignals } from '../container/Board.js';

import './PanelRow.css';

const PanelRow = (prop) => {
  return (
    <div className="PanelRow">
    <div onClick={ (e) => {
      const signal =
        Object.assign({}, BoardSignals.PanelClicked, {
          payload: { id: prop.id }
        });
        Resucks.instance().emit(Board, signal);
    }} >

    { prop.panel }
    </div> 
    { prop.handler }
    </div>
  );
};

export default PanelRow;
