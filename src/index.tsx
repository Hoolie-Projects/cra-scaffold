import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {HashRouter} from 'react-router-dom'

import debounce from 'debounce'

import {Provider} from 'react-redux'
import {store} from './store/store'
import {saveState} from './store/browser-storage'

store.subscribe(
  debounce(() => saveState(store.getState()), 800)
)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
