import React from "react";
import "./Board.scss";
import { Link } from 'react-router-dom';

const Board = (props) => {
  return (
    <div key={props.index} className="board-card">
      <h4>
        {props.board.name}: {props.board.description}
      </h4>
      <button
        type='button'
        className="Success"
        onClick={props.close}>
        <Link
          to={`/boards/${props.board.id}`}
          key={props.board.id}
        >show</Link>
      </button>
      <button
        type='button'
        className="edit"
        onClick={() => props.edit(props.board.id)}>edit
        </button>
      <button
        type='button'
        className="delete"
        onClick={() => props.delete(props.board.id)}>delete
        </button>
    </div>
  );
};

export default Board;
