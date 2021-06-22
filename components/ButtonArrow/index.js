import clsx from 'clsx'
import './styles.scss'

export const ButtonArrow = (props) => {
  const { disabled, fullWidth, icon, onClick, children, className, iconClassName } = props

  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        'b-arrow-button',
        fullWidth && 'b-arrow-button--fullWidth',
        className
      )}
    >
      <img
        alt=''
        src={icon}
        className={clsx('b-arrow-button__icon', iconClassName)}
      />
      {children}
    </button>
  )
}

export default ButtonArrow
