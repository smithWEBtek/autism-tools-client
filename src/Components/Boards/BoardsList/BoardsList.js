import React from 'react'
import { Table } from 'reactstrap'
// import Aux from '../../hoc/Aux/Aux'
import './BoardsList.scss'
// import BoardRow from '../BoardRow/BoardRow'

const BoardsList = (props) => {

  // let sortedBoards = props.resources.sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() ? -1 : a.title.toLowerCase() > b.title.toLowerCase() ? 1 : 0)
  // let renderBoards = sortedBoards.map((resource, index) => {
  //   return (
  //     <Aux key={index} >
  //       <BoardRow
  //         key={index}
  //         resource={resource}
  //         edit={props.edit}
  //         deleteBoard={props.deleteBoard}
  //       />
  //     </Aux >
  //   )
  // })

  return (
    <div>
      <Table striped size="sm" className="BoardsList">
        <thead>
          <tr>
            <th>ID</th>
            <th>Show</th>
            <th>Title</th>
            <th>Category</th>
            <th>Description</th>
            <th>Format</th>
            <th>Location</th>
            {props.edit ? <th>Edit</th> : null}
            {props.deleteBoard ? <th>Delete</th> : null}
          </tr>
        </thead>
        <tbody>
          {/* {renderBoards} */}
        </tbody>
      </Table>
    </div>
  )
}

export default BoardsList
