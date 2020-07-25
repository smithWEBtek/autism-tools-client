import React from 'react'
// import './BoardsIndex.scss'
import BoardRow from '../BoardRow/BoardRow'

const BoardsIndex = (props) => {
  let sortedBoards = props.boards.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
  let renderBoardsList = sortedBoards.map((board, index) => {
    return (
      <BoardRow
        key={board.id}
        board={board}
        // show={props.showBoard}
        editBoard={props.editBoard}
        deleteBoard={props.deleteBoard}
      />
    )
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {renderBoardsList}
        </tbody>
      </table>
    </div>
  )
}

export default BoardsIndex
