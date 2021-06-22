import clsx from 'clsx'
import './styles.scss'

export const Status = (props) => {
  const { size = 'sm', label, color = 'green', colorHex, className } = props

  return (
    <div className='b-status'>
      <div
        style={colorHex
          ? { background: colorHex }
          : undefined
        }
        className={clsx(
          'b-status__circle',
          `b-status__circle--${size}`,
          color && `b-status__circle--${color}`,
          className
        )}
      />
      {label &&
        <div className='b-status__label'>
          {label}
        </div>
      }
    </div>
  )
}

export default Status
