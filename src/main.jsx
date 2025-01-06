import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Movies from './Movies.jsx'
import Colors from './Colors.jsx'
import Person from './Person.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <Movies />
    <Colors />
    <Person />
  </StrictMode>,
)
