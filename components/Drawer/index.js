import './styles.scss'
import { useRef } from 'react'
import Button from 'components/Button'
import useOnClickOutside from 'utils/hooks/useOnClickOutside'
import useDisableBodyScroll from 'utils/hooks/useDisableBodyScroll'
import clsx from 'clsx'

export const Drawer = (props) => {

  const { title, children, onClose, onApply, open, freezeBody = true } = props

  const ref = useRef()
  useOnClickOutside(ref, onClose)
  useDisableBodyScroll(freezeBody && open)

  return (
    <>
      <aside
        ref={ref}
        className={clsx(
          'b-drawer',
          open && 'b-drawer--open'
        )}
      >
        <div className='b-drawer__container'>
          <div className='b-drawer__title'>
            {title}
          </div>
          <div className='b-drawer__content'>
            {children}
          </div>
          <div className='b-drawer__button'>
            <Button
              onClick={onApply}
              fullWidth
            >
              Применить
            </Button>
          </div>
        </div>
      </aside>
      <div
        className={clsx(
          'b-drawer__overlay',
          open && 'b-drawer__overlay--visible'
        )}
      />
    </>
  )
}

export default Drawer
