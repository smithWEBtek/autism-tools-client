import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
  boardResources: [],
  loading: false,
  error: false,
  message: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    //-----CREATE BOARD_RESOURCE-----------------------------
    case actionTypes.CREATE_BOARD_RESOURCE_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.CREATE_BOARD_RESOURCE_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.CREATE_BOARD_RESOURCE_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.CREATE_BOARD_RESOURCE:
      const newBoardResource = action.boardResourceData
      return Object.assign({}, state, {
        boardResources: state.boardResources.concat(newBoardResource)
      })


    //-----FETCH BOARD_RESOURCES-----------------------------
    case actionTypes.FETCH_BOARD_RESOURCES_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.FETCH_BOARD_RESOURCES_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.FETCH_BOARD_RESOURCES_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.FETCH_BOARD_RESOURCES:
      const boardResources = action.boardResourcesList
      return Object.assign({}, state, {
        boardResources: boardResources
      })


    //-----UPDATE BOARD_RESOURCE-----------------------------
    case actionTypes.UPDATE_BOARD_RESOURCE_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.UPDATE_BOARD_RESOURCE_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.UPDATE_BOARD_RESOURCE_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.UPDATE_BOARD_RESOURCE:
      const updatedBoardResourcesArray = state.boardResources.map(boardResource => boardResource.id === action.updatedBoardResourceData.id ? action.updatedBoardResourceData : boardResource)
      return Object.assign({}, state, { boardResources: updatedBoardResourcesArray })


    //-----DELETE BOARD_RESOURCE-----------------------------
    case actionTypes.DELETE_BOARD_RESOURCE_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.DELETE_BOARD_RESOURCE_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.DELETE_BOARD_RESOURCE_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.DELETE_BOARD_RESOURCE:
      const updatedBoards = state.boardResources.filter(boardResource => boardResource.id !== action.id);
      return Object.assign({}, state, {
        boardResources: updatedBoards
      })

    //----- DEFAULT --------------------------------
    default:
      return state;
  }
}

export default reducer;
