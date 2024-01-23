import React from 'react'
import ReactDOM from 'react-dom/client'
// NOTE: Provider is imported from react-redux, NOT redux
import { Provider } from 'react-redux'

import './index.css'
import App from './App'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 4. provide the state to the component.
  <Provider store={store}>
    <App />
  </Provider>
//  <App />
)
