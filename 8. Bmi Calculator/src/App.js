import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [weight, setWeight] = useState(1)
  const [height, setHeight] = useState(1)
  const [bmi, setBmi] = useState(1)
  const [message, setMessage] = useState('')

  const calcBmi = (event) => {
    event.preventDefault()

    var bmi = weight / ((height / 100) * (height / 100))
    setBmi(bmi.toFixed(2))
    if (bmi < 18.5) {
      setMessage('You are under weight')
    } else if (bmi < 25) {
      setMessage('Try to maintain your weight as same')
    } else if (bmi < 30) {
      setMessage('You are Over weight')
    } else {
      setMessage('Obese')
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg): </label>
            <input
              type='text'
              placeholder='Enter your Weight'
              value={weight}
              onChange={(eventWeight) => setWeight(eventWeight.target.value)}
            />
          </div>
          <div>
            <label>Height (cm): </label>
            <input
              type='text'
              placeholder='Enter your Height'
              value={height}
              onChange={(eventHeight) => setHeight(eventHeight.target.value)}
            />
          </div>
          <div>
            <button className='btn' onClick={calcBmi} type='submit'>
              Submit
            </button>
            <button className='btn btn-outline' onClick={reload} type='submit'>
              Reload
            </button>
          </div>

          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
