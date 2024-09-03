import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Images from './components/Images.jsx'
import Projet from './components/Projet.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Images />
    <Projet />
  </React.StrictMode>,
)
