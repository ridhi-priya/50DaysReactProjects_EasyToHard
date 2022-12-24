import './App.css'
import { useState } from 'react'
function App() {
  let newTime = new Date().toLocaleTimeString()
  const [change, setchange] = useState(newTime)
  const changeTime = () => {
    newTime = new Date().toLocaleTimeString()
    setchange(newTime)
  }
  return (
    <div className='timeblock'>
      <h1>{change}</h1>
      <button onClick={changeTime}>Refresh</button>
    </div>
  )
}

export default App
