import React from 'react';
import Resucks from '../../lib/Resucks.js';
import Board, { Signals as BoardSignals } from '../container/Board.js';

import './Handler.css';

const Handler = () => {
  return (
    <div className="Handler" onClick={ (e) => {
      const signal =
        Object.assign({}, BoardSignals.HandlerClicked, {
          payload: { remove: e.target.classList.contains('HandlerRemove'),
                     attach: e.target.classList.contains('HandlerAttach')
          }
        });
        Resucks.instance().emit(Board, signal);
    }} >

      <div className="HandlerRemove" >+</div>
      <div className="HandlerAttach" >×</div>
    </div>
  );
};

export default Handler;
