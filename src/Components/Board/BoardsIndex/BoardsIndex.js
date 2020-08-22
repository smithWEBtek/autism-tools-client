import React from 'react'
import './BoardsIndex.scss'
import BoardRow from '../BoardRow/BoardRow'

const BoardsIndex = (props) => {
  let sortedBoards = props.boards.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)
  let renderBoardsList = sortedBoards.map((board, index) => {
    return (
      <BoardRow
        key={board.id}
        board={board}
        editBoard={props.editBoard}
        deleteBoard={props.deleteBoard}
        showBoard={props.showBoard}
        close={props.closeShowBoard}
      />
    )
  })

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Show</th>
            <th>Name</th>
            <th>Description</th>
            <th>Edit</th>
            <th>deleteBoard</th>
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
