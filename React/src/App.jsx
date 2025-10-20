import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Debounce from './Debounce'
import Throttling from './Throttling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Debounce and Throttle</h2>
      <Debounce/>
      <Throttling/>
    </div>
  )
}

export default App
