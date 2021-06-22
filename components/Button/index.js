import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import './styles.scss'

export const Button = (props) => {
  const {
    icon,
    link,
    size = 'md',
    type = 'button',
    variant = 'primary',
    onClick,
    disabled,
    children,
    fullWidth,
    className,
    ...rest
  } = props

  const classNames = useMemo(() => {
    return clsx(
      'b-button',
      size && `b-button--${size}`,
      variant && `b-button--${variant}`,
      fullWidth && 'b-button--fullWidth',
      className
    )
  }, [size, variant, fullWidth, className])

  return (link
    ? (
      <Link
        to={link}
        className={classNames}
      >
        {icon &&
          <img className='b-button__icon' src={icon} alt='' />
        }
        {children}
      </Link>
    )
    : (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={classNames}
        {...rest}
      >
        {icon &&
          <img className='b-button__icon' src={icon} alt='' />
        }
        {children}
      </button>
    )
  )
}

export default Button
