/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { FunctionComponent, SyntheticEvent } from 'react'
import { FormGroup, Input } from '~components'

interface Iprops {
  onSubmit(values: { username: string; password: string }): void
  submitButton: JSX.Element
}

const LoginForm: FunctionComponent<Iprops> = ({ onSubmit, submitButton }) => {
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
    <form
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        '> div': {
          margin: '10px auto',
          width: '100%',
          maxWidth: '300px',
        },
      }}
      onSubmit={handleSubmit}
    >
      <FormGroup>
        <label htmlFor='username'>Username</label>
        <Input id='username' type='text' />
      </FormGroup>
      <FormGroup>
        <label htmlFor='password'>password</label>
        <Input id='password' type='password' />
      </FormGroup>
      <div>{submitButton}</div>
    </form>
  )
}

export default LoginForm
