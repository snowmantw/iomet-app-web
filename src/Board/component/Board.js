import React from 'react';
import PanelRow from './PanelRow.js';

import './Board.css';


/**
 * Will render multiple panels in row according to `prop.rows`.
 */
const Board = (prop) => {

  const rowElements = prop.rows.map((row) => {
    return (<PanelRow panel={row.panel} handler={row.handler} key={row.id} id={row.id} />);
  });
  return (
    <div className="Board">
      { rowElements }
    </div>
  );
};

export default Board;
