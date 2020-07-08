import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
  boards: [],
  loading: false,
  error: false,
  message: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    //-----CREATE BOARD-----------------------------
    case actionTypes.CREATE_BOARD_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.CREATE_BOARD_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.CREATE_BOARD_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.CREATE_BOARD:
      const newBoard = action.boardData
      return Object.assign({}, state, {
        boards: state.boards.concat(newBoard)
      })


    //-----FETCH BOARDS-----------------------------
    case actionTypes.FETCH_BOARDS_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.FETCH_BOARDS_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.FETCH_BOARDS_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.FETCH_BOARDS:
      const boards = action.boardsList
      return Object.assign({}, state, {
        boards: boards
      })


    //-----UPDATE BOARD-----------------------------
    case actionTypes.UPDATE_BOARD_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.UPDATE_BOARD_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.UPDATE_BOARD_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.UPDATE_BOARD:
      //const boardData = action.updatedBoardData
      //debugger
      //const boardIndex = state.boards.findIndex(board => board.id === boardData.id);
      // const stateTemp = {
      //   ...state,
      //   boards: [
      //     ...state.boards.slice(0, boardIndex),
      //     ...state.boards.slice(boardIndex + 1, state.boards.length)
      //   ]
      // };
      const updatedBoardsArray = state.boards.map(board => board.id === action.updatedBoardData.id ? action.updatedBoardData : board)
      return Object.assign({}, state, { boards: updatedBoardsArray })


    //-----DELETE BOARD-----------------------------
    case actionTypes.DELETE_BOARD_START:
      return Object.assign({}, state, { loading: true })

    case actionTypes.DELETE_BOARD_SUCCESS:
      return Object.assign({}, state, { loading: false })

    case actionTypes.DELETE_BOARD_FAIL:
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        message: action.type
      })

    case actionTypes.DELETE_BOARD:
      const updatedBoards = state.boards.filter(board => board.id !== action.id);
      return Object.assign({}, state, {
        boards: updatedBoards
      })

    //----- DEFAULT --------------------------------
    default:
      return state;
  }
}

export default reducer;
