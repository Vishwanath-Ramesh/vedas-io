import React, { useState } from 'react'

import Button from '../../base/Button/Button'
import './Login.css'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function onLoginClickHandler() {
    const postData = {
      userName,
      password,
    }

    console.log(postData)
  }

  return (
    <div className="login">
      <label htmlFor="input-username">
        <span className="login__usernamelabel">Username</span>
        <input
          id="input-username"
          label="Outlined"
          type="text"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
      </label>
      <label htmlFor="input-password">
        <span className="login__passwordlabel">Password</span>
        <input
          id="input-password"
          label="Outlined"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      <Button
        className="login__submit"
        onClick={onLoginClickHandler}
        label="Login"
        variant="primary"
      />
    </div>
  )
}

export default Login
