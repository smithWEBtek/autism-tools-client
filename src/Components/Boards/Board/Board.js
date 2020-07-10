import React from "react";
import "./Board.scss";

const Board = (props) => {
  return (
    <div key={props.index} className="board-card">
      <h4>
        {props.board.name}: {props.board.description}
      </h4>
      <button
        type='button'
        className="edit"
        onClick={() => props.edit(props.board.id)}>edit
        </button>
    </div>
  );
};

export default Board;
