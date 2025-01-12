import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Movies from './Movies.jsx'
import Colors from './Colors.jsx'
import Person from './Person.jsx'
import ClassInput from './ClassInput.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClassInput />
  </StrictMode>,
)
