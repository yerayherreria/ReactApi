import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Discs from './Disc/ListDisc.jsx'
import Disc from './Disc/ViewDisc.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Discs /> */}
    <Disc />
  </React.StrictMode>,
)
