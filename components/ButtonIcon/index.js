import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import './styles.scss'

export const ButtonIcon = (props) => {
  const {
    link,
    icon,
    onClick,
    variant = 'default',
    disabled,
    children,
    fullWidth,
    className
  } = props

  const classNames = useMemo(() => {
    return clsx(
      'b-icon-button',
      variant && `b-icon-button--${variant}`,
      fullWidth && 'b-icon-button--fullWidth',
      className
    )
  }, [variant, fullWidth, className])

  return (link
    ? (
      <Link
        to={link}
        className={classNames}
      >
        <img
          alt=''
          src={icon}
          className='b-icon-button__icon'
        />
        {children}
      </Link>
    )
    : (
      <button
        type='button'
        onClick={onClick}
        disabled={disabled}
        className={classNames}
      >
        <img
          alt=''
          src={icon}
          className='b-icon-button__icon'
        />
        {children}
      </button>
    )
  )
}

export default ButtonIcon
