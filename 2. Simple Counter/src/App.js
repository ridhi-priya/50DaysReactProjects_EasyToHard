import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0)

  return (
    <div className='App'>
      <header className='App-header'>
        <p>{value}</p>
        <div className='btn'>
          <button onClick={() => setValue(value - 1)}>-</button>
          <button onClick={() => setValue(value + 1)}>+</button>
        </div>
      </header>
    </div>
  )
}

export default App
