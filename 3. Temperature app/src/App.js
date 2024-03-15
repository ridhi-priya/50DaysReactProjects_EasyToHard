import React, { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(10)
  const [colorval, setColorval] = useState('cold')

  const decrease = () => {
    if (value === 0) return
    const newtemp = value - 1
    if (newtemp < 15) {
      setColorval('cold')
    }
    setValue(newtemp)
  }

  const increase = () => {
    if (value === 28) return
    const newtemp = value + 1
    if (newtemp > 15) {
      setColorval('hot')
    }
    setValue(newtemp)
  }
  return (
    <div>
      <div className='app-container'>
        <div className='temperature-display-container'>
          <div className={`temperature-display ${colorval}`}>{value}°C</div>
        </div>
      </div>
      <div className='button-container'>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}
export default App
