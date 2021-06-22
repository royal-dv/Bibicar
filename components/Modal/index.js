import clsx from 'clsx'
import { useRef } from 'react'

import Button from 'components/Button'
import Loading from 'components/Spinner'

import iconClose from 'icons/cross.svg'
import useOnClickOutside from 'utils/hooks/useOnClickOutside'
import useDisableBodyScroll from 'utils/hooks/useDisableBodyScroll'

import './styles.scss'

const Modal = (props) => {
  const {
    open,
    title,
    onSave,
    onClose,
    onSubmit,
    footer,
    loading,
    className,
    children,
    hideClose,
    hideFooter,
    scrollable = true,
    freezeBody = true,
    useClickOutside = true,
    ...rest
  } = props

  const ref = useRef()

  const handleClose = () => {
    if (useClickOutside) {
      onClose()
    }
  }

  useOnClickOutside(ref, handleClose)
  useDisableBodyScroll(freezeBody && open)

  const renderContent = () => {
    return (
      <>
        {title &&
          <div className='b-modal__title'>
            {title}
          </div>
        }

        <div className='b-modal__content'>
          {children}
        </div>

        {!hideClose && (
          <button
            type='button'
            onClick={onClose}
            className='b-modal__close'
          >
            <img
              src={iconClose}
              alt='Закрыть окно'
            />
          </button>
        )}

        {!hideFooter &&
          <ModalFooter
            onSave={onSave}
            onCancel={onClose}
            onSubmit={onSubmit}
          >
            {footer}
          </ModalFooter>
        }
      </>
    )
  }

  return (
    <div className={clsx(
      'b-modal',
      open && 'b-modal--open',
      scrollable && 'b-modal--scrollable'
    )}>
      <div
        {...rest}
        ref={ref}
        className={clsx('b-modal__container', className)}
      >
        <Loading loading={loading}>
          {onSubmit
            ? (
              <form onSubmit={onSubmit}>
                {renderContent()}
              </form>
            )
            : (
              <div>
                {renderContent()}
              </div>
            )
          }
        </Loading>
      </div>
    </div>
  )
}

export default Modal

export const ModalFooter = (props) => {
  const { onSave, onCancel, onSubmit, children } = props

  return (
    <div className='b-modal__footer'>
      {children || (
        <>
          <Button
            variant='text'
            onClick={onCancel}
          >
            Отмена
          </Button>
          <Button
            type={onSubmit ? 'submit' : 'button'}
            onClick={onSave || onSubmit}
          >
            Сохранить
          </Button>
        </>
      )}
    </div>
  )
}
