import React from 'react'
// import Board from '../Board/Board'
import './BoardRow.scss'
import { Link } from 'react-router-dom'

const BoardRow = (props) => {
  return (
    <>
      <tr key={props.board.id} className="board-row">
        <th scope="row">{props.board.id}</th>
        <td>
          <Link
            to={`/boards/${props.board.id}`}>{props.board.name}
          </Link>
        </td>

        <td>
          {props.board.description}
        </td>

        <td>
          <button
            type='button'
            className="Edit"
            onClick={() => props.editBoard(props.board.id)}>edit</button>
        </td>

        <td>
          <button
            onClick={() => props.deleteBoard(props.board.id)}
            className="Danger">delete</button>
        </td>
      </tr>
    </>
  )
}

export default BoardRow;
