import * as actionTypes from '../Actions/ActionTypes'
import BoardResourceService from '../Services/BoardResourceService'

//-----CREATE BOARD_RESOURCE ACTIONS-----------------------------
export const createBoardResourceStart = () => {
  return { type: actionTypes.CREATE_BOARD_RESOURCE_START }
}
export const createBoardResourceSuccess = () => {
  return { type: actionTypes.CREATE_BOARD_RESOURCE_SUCCESS }
}
export const createBoardResourceFail = (error) => {
  return { type: actionTypes.CREATE_BOARD_RESOURCE_FAIL, error: error }
}
export const createBoardResource = (data, history) => {
  return dispatch => {
    dispatch(createBoardResourceStart())
    BoardResourceService.createBoardResource(data)
      .then(response => {
        dispatch({ type: actionTypes.CREATE_BOARD_RESOURCE, boardData: response })
        history.push(`/board_resources/${response.id}`)
        console.log('createBoardResource', response)
        dispatch(createBoardResourceSuccess())
      })
      .catch(error => {
        dispatch(createBoardResourceFail(error))
      })
  }
}


//-----FETCH BOARD_RESOURCES ACTIONS-----------------------------
export const fetchBoardResourcesStart = () => {
  return { type: actionTypes.FETCH_BOARD_RESOURCES_START }
}
export const fetchBoardResourcesSuccess = (boardResources) => {
  return { type: actionTypes.FETCH_BOARD_RESOURCES_SUCCESS, boardResourcesList: boardResources }
}
export const fetchBoardResourcesFail = (error) => {
  return { type: actionTypes.FETCH_BOARD_RESOURCES_FAIL, error: error }
}
export const fetchBoardResources = () => {
  return dispatch => {
    dispatch(fetchBoardResourcesStart())
    BoardResourceService.fetchBoardResources()
      .then(response => {
        dispatch({ type: actionTypes.FETCH_BOARD_RESOURCES, boardResourcesList: response })
        dispatch(fetchBoardResourcesSuccess())
      })
      .catch(error => {
        dispatch(fetchBoardResourcesFail(error))
      })
  }
}


//-----UPDATE BOARD_RESOURCE ACTIONS-----------------------------
export const updateBoardResourceStart = () => {
  return { type: actionTypes.UPDATE_BOARD_RESOURCE_START }
}
export const updateBoardResourceSuccess = () => {
  return { type: actionTypes.UPDATE_BOARD_RESOURCE_SUCCESS }
}
export const updateBoardResourceFail = (error) => {
  return { type: actionTypes.UPDATE_BOARD_RESOURCE_FAIL, error: error }
}
export const updateBoardResource = (data, history) => {
  return dispatch => {
    dispatch(updateBoardResourceStart())
    BoardResourceService.updateBoardResource(data)
      .then(response => {
        dispatch({ type: actionTypes.UPDATE_BOARD_RESOURCE, updatedBoardResourceData: response })
        history.goBack()
        dispatch(updateBoardResourceSuccess())
      })
      .catch(error => {
        dispatch(updateBoardResourceFail(error))
      })
  }
}

//-----DELETE BOARD_RESOURCE ACTIONS-----------------------------
export const deleteBoardResourceStart = () => {
  return { type: actionTypes.DELETE_BOARD_RESOURCE_START }
}
export const deleteBoardResourceSuccess = () => {
  return { type: actionTypes.DELETE_BOARD_RESOURCE_SUCCESS }
}
export const deleteBoardResourceFail = (error) => {
  return { type: actionTypes.DELETE_BOARD_RESOURCE_FAIL, error: error }
}
export const deleteBoardResource = (id, history) => {
  return dispatch => {
    dispatch(deleteBoardResourceStart())
    BoardResourceService.deleteBoardResource(id)
      .then(response => {
        dispatch({ type: actionTypes.DELETE_BOARD_RESOURCE, id: id })
        dispatch(deleteBoardResourceSuccess())
        history.push('/board_resources')
      })
      .catch(error => {
        dispatch(deleteBoardResourceFail(error))
      })
  }
}
