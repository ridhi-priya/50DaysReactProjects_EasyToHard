import React, { useState } from 'react'
import './App.css'

function App() {
  const [values, setValues] = useState({
    fName: '',
    lName: '',
    email: '',
    pno: '',
  })

  const [successed, setSuccessed] = useState(false)
  const [valid, setValid] = useState(false)

  const handleFirstName = (event) => {
    setValues({ ...values, fName: event.target.value })
  }
  const handleLastName = (event) => {
    setValues({ ...values, lName: event.target.value })
  }
  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value })
  }
  const handlePno = (event) => {
    setValues({ ...values, pno: event.target.value })
  }
  const handleSuccessed = (event) => {
    event.preventDefault()
    if (values.fName && values.lName && values.email && values.pno) {
      setValid(true)
    }
    setSuccessed(true)
  }
  return (
    <div className='page'>
      {successed && valid ? (
        <div className='success-message'>
          Success! Thank you for Registering
        </div>
      ) : null}

      <form>
        <input
          onChange={handleFirstName}
          value={values.fName}
          type='text'
          placeholder='Enter First name'
        />
        {successed && !values.fName ? (
          <span>Please enter FirstName</span>
        ) : null}
        <input
          onChange={handleLastName}
          value={values.lName}
          type='text'
          placeholder='Enter Last name'
        />
        {successed && !values.lName ? <span>Please enter LastName</span> : null}

        <input
          onChange={handleEmail}
          value={values.email}
          type='email'
          placeholder='Enter email'
        />
        {successed && !values.email ? <span>Please enter Email</span> : null}

        <input
          onChange={handlePno}
          value={values.pno}
          type='number'
          placeholder='Enter Phone.No'
        />
        {successed && !values.pno ? <span>Please enter Phone No.</span> : null}
      </form>
      <button onClick={handleSuccessed}>Register</button>
    </div>
  )
}

export default App
