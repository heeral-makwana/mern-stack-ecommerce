import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './form.css'  // Adjust path based on your folder structure

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const onChangeInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const registerSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('https://e-commerce-back-8kja.onrender.com/user/register', { ...user, withCredentials: true })
      localStorage.setItem('firstLogin', true)
      window.location.href = "/"
    } catch (err) {
      alert(err.response.data.msg)
    }
  }

  return (
    <div className='form-container'>
      <form onSubmit={registerSubmit}>
        <input type='text' name='name' required placeholder='Name' value={user.name} onChange={onChangeInput} />
        <input type='email' name='email' required placeholder='Email' value={user.email} onChange={onChangeInput} />
        <input type='password' name='password' required placeholder='Password' value={user.password} onChange={onChangeInput} />
        <button type='submit'>Register</button>
        <div className='row'>
          <Link to='/login'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Register
