import * as actionTypes from '../Actions/ActionTypes'
import BoardService from '../Services/BoardService'

//-----CREATE BOARD ACTIONS-----------------------------
export const createBoardStart = () => {
  return { type: actionTypes.CREATE_BOARD_START }
}
export const createBoardSuccess = () => {
  return { type: actionTypes.CREATE_BOARD_SUCCESS }
}
export const createBoardFail = (error) => {
  return { type: actionTypes.CREATE_BOARD_FAIL, error: error }
}
export const createBoard = (data, history) => {
  return dispatch => {
    dispatch(createBoardStart())
    BoardService.createBoard(data)
      .then(response => {
        dispatch({ type: actionTypes.CREATE_BOARD, boardData: response })
        history.push(`/boards/${response.id}`)
        console.log('createBoard', response)
        dispatch(createBoardSuccess())
      })
      .catch(error => {
        dispatch(createBoardFail(error))
      })
  }
}


//-----FETCH BOARDS ACTIONS-----------------------------
export const fetchBoardsStart = () => {
  return { type: actionTypes.FETCH_BOARDS_START }
}
export const fetchBoardsSuccess = (boards) => {
  return { type: actionTypes.FETCH_BOARDS_SUCCESS, boardsList: boards }
}
export const fetchBoardsFail = (error) => {
  return { type: actionTypes.FETCH_BOARDS_FAIL, error: error }
}
export const fetchBoards = () => {
  return dispatch => {
    dispatch(fetchBoardsStart())
    BoardService.fetchBoards()
      .then(response => {
        dispatch({ type: actionTypes.FETCH_BOARDS, boardsList: response })
        dispatch(fetchBoardsSuccess())
      })
      .catch(error => {
        dispatch(fetchBoardsFail(error))
      })
  }
}


//-----UPDATE BOARD ACTIONS-----------------------------
export const updateBoardStart = () => {
  return { type: actionTypes.UPDATE_BOARD_START }
}
export const updateBoardSuccess = () => {
  return { type: actionTypes.UPDATE_BOARD_SUCCESS }
}
export const updateBoardFail = (error) => {
  return { type: actionTypes.UPDATE_BOARD_FAIL, error: error }
}
export const updateBoard = (data, history) => {
  return dispatch => {
    dispatch(updateBoardStart())
    BoardService.updateBoard(data)
      .then(response => {
        dispatch({ type: actionTypes.UPDATE_BOARD, updatedBoardData: response })
        history.goBack()
        dispatch(updateBoardSuccess())
      })
      .catch(error => {
        dispatch(updateBoardFail(error))
      })
  }
}

//-----DELETE BOARD ACTIONS-----------------------------
export const deleteBoardStart = () => {
  return { type: actionTypes.DELETE_BOARD_START }
}
export const deleteBoardSuccess = () => {
  return { type: actionTypes.DELETE_BOARD_SUCCESS }
}
export const deleteBoardFail = (error) => {
  return { type: actionTypes.DELETE_BOARD_FAIL, error: error }
}
export const deleteBoard = (id, history) => {
  return dispatch => {
    dispatch(deleteBoardStart())
    BoardService.deleteBoard(id)
      .then(response => {
        dispatch({ type: actionTypes.DELETE_BOARD, id: id })
        dispatch(deleteBoardSuccess())
        history.push('/boards')
      })
      .catch(error => {
        dispatch(deleteBoardFail(error))
      })
  }
}
