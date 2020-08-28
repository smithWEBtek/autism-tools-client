import React from "react";
import "./Board.scss";
import BoardResource from '../BoardResource/BoardResource'

const Board = (props) => {
  const renderBoardResources = props.board.board_resources.map((boardResource, id) => {
    return (
      <div key={id}>
        <BoardResource
          boardResource={boardResource.resource}
        />
      </div>
    )
  })

  return (
    <div key={props.index} className="board-card">
      <h4>
        {props.board.name}: {props.board.description}
        {renderBoardResources}
      </h4>
    </div>
  )
}

export default Board;
