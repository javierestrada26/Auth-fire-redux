import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { JournalApp } from './JournalApp.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
