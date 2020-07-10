import React from "react";
import "./Board.scss";
const Board = (props) => {
  console.log('[Board.js](props): ', props)
  return (
    <div key={props.index} className="board-card">
      <h4>
        {props.board.name}: {props.board.description}
      </h4>
    </div>
  );
};

export default Board;
