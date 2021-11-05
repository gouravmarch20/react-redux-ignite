import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// REDUX SETUP
import { createStore, applyMiddleware, compose } from 'redux' //applyMiddleware --> when dispatch trigger --> it run & tunk enable
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'

// // enable redux dev tool
// const composeEnhancers =
//   (typeof window !== 'undefined' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose
// //  createStore take 2 argument only - so wrap redux dev tool & thunk  together
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnchancer(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
