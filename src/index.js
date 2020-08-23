import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import boardReducer from './Store/Reducers/BoardReducer'
import boardResourceReducer from './Store/Reducers/BoardResourceReducer'
import App from './App'
import './index.scss'
import ErrorBoundary from './ErrorBoundary';

import CssBaseline from '@material-ui/core/CssBaseline';


let dotenv = require('dotenv')
let dotenvExpand = require('dotenv-expand')

let myEnv = dotenv.config()
dotenvExpand(myEnv)

const rootReducer = combineReducers({
  brd: boardReducer,
  brdres: boardResourceReducer
})

const logger = store => {
  console.log('[Middleware] prior state', store.getState())
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action)
      const result = next(action)
      return result
    }
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)))

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundary>
        <CssBaseline />
        <App className="body" />
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
