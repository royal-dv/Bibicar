import './styles.scss'
import clsx from 'clsx'
import { useState } from 'react'

export const Switch = (props) => {
  const { name, checked, onChange, disabled } = props

  const [isFocused, setIsFocused] = useState(false)

  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.checked)
    }
  }

  const setBlur = () => {
    setIsFocused(false)
  }
  const setFocus = () => {
    setIsFocused(true)
  }

  return (
    <div className='b-toggle'>
      <input
        id={name}
        type='checkbox'
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className='b-toggle__checkbox'
      />
      <label
        onBlur={setBlur}
        onFocus={setFocus}
        htmlFor={name}
        tabIndex={1}
        className={clsx(
          'b-toggle__label',
          isFocused && 'b-toggle__label--focused'
        )}
      >
        <span className='b-toggle__switch' />
      </label>
    </div>
  )
}

export default Switch
