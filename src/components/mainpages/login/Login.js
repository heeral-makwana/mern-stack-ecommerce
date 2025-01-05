import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './form.css'  // Adjust path based on your folder structure

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const onChangeInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const loginSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://e-commerce-back-8kja.onrender.com/user/login', { ...user })
      localStorage.setItem('firstLogin', true)
      window.location.href = "/"
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  return (
    <div className='form-container'>
      <form onSubmit={loginSubmit}>
        <input type='email' name='email' required placeholder='Email' value={user.email} onChange={onChangeInput} />
        <input type='password' name='password' required placeholder='Password' value={user.password} onChange={onChangeInput} />
        <button type='submit'>Login</button>
        <div className='row'>
          <Link to='/register'>Register</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
