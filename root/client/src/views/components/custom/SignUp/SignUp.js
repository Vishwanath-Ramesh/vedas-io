import React, { useState } from 'react'

import './SignUp.css'

const SignUp = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  function onSignUpClickHandler() {
    const postData = {
      userName,
      password,
    }

    console.log(postData)
  }

  return (
    <div className="signup">
      <label htmlFor="input-username">
        <span className="signup__usernamelabel">Username</span>
        <input
          id="input-username"
          label="Outlined"
          variant="outlined"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
      </label>
      <label htmlFor="input-password">
        <span className="signup__passwordlabel">Password</span>
        <input
          id="input-password"
          variant="outlined"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      <label htmlFor="input-password">
        <span className="confirmpassword-label">Confirm password</span>
        <input
          id="input-password"
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      <button
        type="submit"
        className="signup__submit"
        onClick={onSignUpClickHandler}
      >
        SignUp
      </button>
    </div>
  )
}

export default SignUp
