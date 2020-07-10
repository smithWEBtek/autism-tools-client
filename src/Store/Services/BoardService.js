// const API_URL = process.env.REACT_APP_API_URL || "https://api.autism-tools.org/api/v1/boards"
// const API_URL = "https://api.autism-tools.org/api/v1"
const API_URL = "http://localhost:3001/api/v1"

const BoardService = {
  createBoard(board) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ board: board }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/boards`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[BoardService][createBoard] ERROR: ', error)
      })
  },
  fetchBoards() {
    return fetch(`${API_URL}/boards`)
      .then(response => response.json())
      .catch(error => {
        console.log('[BoardService][fetchBoards] ERROR: ', error)
      })
  },
  updateBoard(data) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ board: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/boards/${data.id}`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[BoardService][updateBoard] ERROR: ', error)
      })
  },
  deleteBoard(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/boards/${id}`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[BoardService][deleteBoard] ERROR: ', error)
      })
  }
}

export default BoardService;
