const API_URL = process.env.REACT_APP_API_URL

const BoardResourceService = {
  createBoardResource(board_resource) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ board_resource: board_resource }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/board_resources`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[BoardResourceService][createBoardResource] ERROR: ', error)
      })
  },
  fetchBoardResources() {
    return fetch(`${API_URL}/board_resources`)
      .then(response => response.json())
      .catch(error => {
        console.log('[BoardResourceService][fetchBoardResources] ERROR: ', error)
      })
  },
  updateBoardResource(data) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ board_resource: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/board_resources/${data.id}`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[BoardResourceService][updateBoardResource] ERROR: ', error)
      })
  },
  deleteBoardResource(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}/board_resources/${id}`, request)
      .then(response => console.log('RESPONSE: ', response.json()))
      .catch(error => {
        console.log('[BoardResourceService][deleteBoardResource] ERROR: ', error)
      })
  }
}

export default BoardResourceService;
