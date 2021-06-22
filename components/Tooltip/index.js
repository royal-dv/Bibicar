import clsx from 'clsx'

import './styles.scss'

export const Tooltip = (props) => {
  const { color = 'green', position = 'top', content, className, children } = props

  return (
    <div className={clsx(
      'b-tooltip',
      `b-tooltip--${color}`,
      `b-tooltip--${position}`,
      className
    )}>
      {children}

      <div className='b-tooltip__container'>
        <div className='b-tooltip__text'>
          {content}
        </div>
      </div>
    </div>
  )
}

export default Tooltip
