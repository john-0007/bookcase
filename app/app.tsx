import * as React from 'react'
import { useState } from 'react'
import { Logo } from '~components/logo'
import { Dialog } from '@reach/dialog'
import LoginForm from './login_form'

import '@reach/dialog/styles.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'

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
    <div>
      <Logo width='80' height='80' />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal(ModelStateEnum.Login)}>
          Login
        </button>
      </div>
      <div>
        <button onClick={() => setOpenModal(ModelStateEnum.Register)}>
          Register
        </button>
      </div>
      <Dialog aria-label='Login from' isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal(ModelStateEnum.None)}>
            close!
          </button>
        </div>
        <h3>Login</h3>
        <LoginForm buttonText='Login' onSubmit={login} />
      </Dialog>
      <Dialog aria-label='Registration from' isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal(ModelStateEnum.None)}>
            close!
          </button>
        </div>
        <h3>Register</h3>
        <LoginForm buttonText='Register' onSubmit={register} />
      </Dialog>
    </div>
  )
}

export default App
