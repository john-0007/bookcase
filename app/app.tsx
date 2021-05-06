import * as React from 'react'
import { useState } from 'react'
import { Logo } from '~components/logo'
import { Dialog } from '@reach/dialog'

import '@reach/dialog/styles.css'

enum ModelStateType {
  None = 'none',
  Register = 'register',
  Login = 'login',
}

const App = () => {
  const [openModal, setOpenModal] = useState<ModelStateType>(
    ModelStateType.None
  )

  return (
    <div>
      <Logo width='80' height='80' />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setOpenModal(ModelStateType.Login)}>
          Login
        </button>
      </div>
      <div>
        <button onClick={() => setOpenModal(ModelStateType.Register)}>
          Register
        </button>
      </div>
      <Dialog aria-label='Login from' isOpen={openModal === 'login'}>
        <div>
          <button onClick={() => setOpenModal(ModelStateType.None)}>
            close!
          </button>
        </div>
        <h3>Login</h3>
      </Dialog>
      <Dialog aria-label='Registration from' isOpen={openModal === 'register'}>
        <div>
          <button onClick={() => setOpenModal(ModelStateType.None)}>
            close!
          </button>
        </div>
        <h3>Register</h3>
      </Dialog>
    </div>
  )
}

export default App
