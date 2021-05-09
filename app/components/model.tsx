/** @jsx jsx */
import { jsx } from '@emotion/core'
import * as React from 'react'
import { createContext, useContext, useState } from 'react'
import VisuallyHidden from '@reach/visually-hidden'
import styled from '@emotion/styled'
import { Dialog as ReachDialog } from '@reach/dialog'

const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: '#434449',
  border: `1px solid #f1f1f4`,
  cursor: 'pointer',
})

const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  '@media (max-width: 991px)': {
    width: '100%',
    margin: '10vh auto',
  },
})

const callAll = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args))

const ModalContext = createContext()

function Modal(props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return <ModalContext.Provider value={[isOpen, setIsOpen]} {...props} />
}

function ModalDismissButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(false), child.props.onClick),
  })
}

function ModalOpenButton({ children: child }) {
  const [, setIsOpen] = useContext(ModalContext)
  return React.cloneElement(child, {
    onClick: callAll(() => setIsOpen(true), child.props.onClick),
  })
}

function ModalContentsBase(props) {
  const [isOpen, setIsOpen] = useContext(ModalContext)
  return (
    <Dialog isOpen={isOpen} onDismiss={() => setIsOpen(false)} {...props} />
  )
}

function ModalContents({ title, children, ...props }) {
  return (
    <ModalContentsBase {...props}>
      <div css={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ModalDismissButton>
          <CircleButton>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </CircleButton>
        </ModalDismissButton>
      </div>
      <h3 css={{ textAlign: 'center', fontSize: '2em' }}>{title}</h3>
      {children}
    </ModalContentsBase>
  )
}

export { Modal, ModalDismissButton, ModalOpenButton, ModalContents }
