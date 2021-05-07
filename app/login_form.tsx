import * as React from 'react'
import { FunctionComponent, SyntheticEvent } from 'react'

interface Iprops {
  onSubmit(values: { username: string; password: string }): void
  buttonText: string
}

const LoginForm: FunctionComponent<Iprops> = ({ onSubmit, buttonText }) => {
  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    const target = event.target as typeof event.target & {
      elements: { username: { value: string }; password: { value: string } }
    }

    const { username, password } = target.elements
    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' />
      </div>
      <div>
        <label htmlFor='password'>password</label>
        <input id='password' type='password' />
      </div>
      <div>
        <button>{buttonText}</button>
      </div>
    </form>
  )
}

export default LoginForm
