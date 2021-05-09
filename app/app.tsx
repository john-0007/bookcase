/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { useState } from 'react'
import { Logo, Button } from '~components'
import LoginForm from './login_form'
import { Modal, ModalOpenButton, ModalContents } from '~components/model'

enum ModelStateEnum {
  None = 'none',
  Register = 'register',
  Login = 'login',
}

const App = () => {
  const [openModal, setOpenModal] = useState<ModelStateEnum>(
    ModelStateEnum.None
  )

  function login(formDate: any) {
    console.log(formDate)
  }

  function register(formDate: any) {
    console.log(formDate)
  }

  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Logo width='80' height='80' />
      <h1>Bookshelf</h1>
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gridGap: '0.75rem',
        }}
      >
        <Modal>
          <ModalOpenButton>
            <Button variant='primary'>Login</Button>
          </ModalOpenButton>
          <ModalContents aria-label='Login form' title='Login'>
            <LoginForm
              onSubmit={login}
              submitButton={<Button variant='primary'>Login</Button>}
            />
          </ModalContents>
        </Modal>
        <Modal>
          <ModalOpenButton>
            <Button variant='secondary'>Register</Button>
          </ModalOpenButton>
          <ModalContents aria-label='Registration form' title='Register'>
            <LoginForm
              onSubmit={register}
              submitButton={<Button variant='secondary'>Register</Button>}
            />
          </ModalContents>
        </Modal>
      </div>
    </div>
  )
}

export default App
