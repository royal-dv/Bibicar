import clsx from 'clsx'
import './styles.scss'

export const Tag = (props) => {
  const { label, color = 'yellow', className } = props

  return (
    <div className={clsx(
      'b-tag',
      `b-tag--${color}`,
      className
    )}>
      <div className='b-tag__container'>
        <div className='b-tag__label'>
          {label}
        </div>
      </div>
    </div>
  )
}

export default Tag
