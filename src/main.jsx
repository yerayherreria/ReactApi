import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Discs from './Disc/ListDisc.jsx'
import Disc from './Disc/ViewDisc.jsx'
import Add from './Disc/Add.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<Disc />*/}
    <Discs />
    <Add />
  </React.StrictMode>,
)
