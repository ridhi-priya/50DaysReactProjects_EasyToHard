import './App.css'
import { useState } from 'react'
function App() {
  let newTime = new Date().toLocaleTimeString()
  const [change, setChange] = useState(newTime)
  const updateTime = () => {
    newTime = new Date().toLocaleTimeString()
    setChange(newTime)
  }
  setInterval(updateTime, 1000)
  return (
    <div className='timeblock'>
      <h1>{change}</h1>
    </div>
  )
}

export default App
