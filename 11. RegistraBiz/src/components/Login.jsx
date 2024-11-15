import  { useState } from 'react'
// import Styles from './Login.module.css'
// import { AccountContext } from '../../../context/AccountProvider'
import { useContext } from 'react'
function Login() {
  const { user, setUser } = useContext("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const fixEmail = 'platform@gmail.com'
  const fixPassword = '123456'
  const handleSubmit = () => {
    if (fixEmail === email && fixPassword === password) {
      setUser(true)
      window.location.replace('/')
    }
  }
  return (
    <>
      <div>
        {/* <h1>Please login</h1> */}
        <form onSubmit={handleSubmit}>
          <div >
            <input
            //   className={Styles.label}
              type='email'
              placeholder='Email'
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className={Styles.formControl}> */}
            <input
              type='Password'
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
             </form>
          </div>
          <button type='submit'>
            Login
          </button>
          <p>
            Do not have an account? <a href='register'>Register</a>
          </p>
      </>
  )
}

export default Login