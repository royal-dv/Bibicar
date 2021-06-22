import clsx from 'clsx'
import { ErrorLabel } from 'components/Error'

import './styles.scss'

const Checkbox = (props) => {
  const { id, type = 'checkbox', error, label, onChange, ...rest } = props

  const handleChange = (event) => {
    if (onChange) {
      onChange(type === 'checkbox'
        ? event.target.checked
        : event.target.value
      )
    }
  }

  return (
    <div>
      <div className={clsx(
        'b-checkbox',
        error && 'b-checkbox--error'
      )}>
        <input
          id={id}
          type={type}
          onChange={handleChange}
          className='b-checkbox__input'
          {...rest}
        />
        <label
          htmlFor={id}
          className='b-checkbox__label'
        >
          {label}
        </label>
      </div>

      {error && <ErrorLabel message={error} />}
    </div>
  )
}

export default Checkbox
