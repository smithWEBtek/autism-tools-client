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

// import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'

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
        {/* <CssBaseline /> */}
        <ThemeProvider theme={theme}>
          <App className="body" />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
