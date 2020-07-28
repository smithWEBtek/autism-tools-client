import React from "react";
import "./Board.scss";

const Board = (props) => {
  return (
    <div key={props.index} className="board-card">
      <h4>
        <p>********************************************</p>
        {props.board.name}: {props.board.description}
        <p>********************************************</p>
      </h4>
    </div>
  );
};

export default Board;
