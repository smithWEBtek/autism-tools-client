import React from "react";
import "./Board.css";
const Board = (props) => {
  return (
    <div key={props.index} className="board-card">
      <h4>
        {props.board.name}: {props.board.description}
      </h4>
    </div>
  );
};

export default Board;
