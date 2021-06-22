import Modal from 'components/Modal'
import Button from 'components/Button'
import { confirmable, createConfirmation } from 'react-confirm'

import './styles.scss'

const ConfirmDialog = (props) => {
  const { show, text, okLabel, cancelLabel, proceed } = props

  const handleCancel = () => {
    proceed(false)
  }

  const handleContinue = () => {
    proceed(true)
  }

  return (
    <Modal
      open={show}
      onClose={handleCancel}
      hideClose
      className='b-dialog'
      freezeBody={false}
      footer={[
        <Button
          key='cancel'
          size='sm'
          onClick={handleCancel}
          variant='danger'
        >
          {cancelLabel || 'Отмена'}
        </Button>,
        <Button
          key='continue'
          size='sm'
          onClick={handleContinue}
        >
          {okLabel || 'Продолжить'}
        </Button>
      ]}
    >
      <div className='b-dialog__text'>
        {text}
      </div>
    </Modal>
  )
}

export default function confirm(text, options = {}) {
  return createConfirmation(confirmable(ConfirmDialog))({
    text,
    ...options
  })
}
