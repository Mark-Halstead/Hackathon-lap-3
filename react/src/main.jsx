import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import { App } from './App'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
=======
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
>>>>>>> 02dc0482178b6671947698676ac4d2dd5c3981bd
)
