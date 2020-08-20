import React from 'react'
import './BoardRow.scss'

const BoardRow = (props) => {
  return (
    <>
      <tr key={props.board.id} className="board-row">
        <th scope="row">{props.board.id}</th>
        <td>
          <button
            type='button'
            className="Edit"
            onClick={() => props.showBoard(props.board.id)}>show</button>
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
