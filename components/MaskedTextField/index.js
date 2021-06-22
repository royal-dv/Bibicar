import { useState, useEffect } from 'react'
import { ErrorLabel } from 'components/Error'
import InputMask from 'react-input-mask'
import clsx from 'clsx'
import cross from 'icons/delete.svg'

import '../TextField/styles.scss'

export const MaskedTextField = (props) => {
  const { name, mask, error, label, value, onChange, placeholder, icon, fullWidth = true, readOnly, disabled, onBeforeChange, ...rest } = props

  const [text, setText] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setText(value)
  }, [value])

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleFocus = () => {
    if (!readOnly) {
      setIsFocused(true)
    }
  }

  const handleClear = () => {
    onChange
      ? onChange('')
      : setText('')
  }

  const handleChange = (event) => {
    const val = event.target.value
    onChange
      ? onChange(val)
      : setText(val)
  }

  return (
    <>
      <label
        htmlFor={name}
        className='b-label'
      >
        {label}
      </label>
      <div className={
        clsx(
          'b-textfield',
          'b-textfield--static',
          error && 'b-textfield--error',
          fullWidth && 'b-textfield--fullwidth'
        )
      }>
        <InputMask
          id={name}
          name={name}
          type='text'
          mask={mask}
          value={text}
          disabled={disabled || readOnly}
          readOnly={readOnly}
          placeholder={placeholder}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChange={handleChange}
          beforeMaskedValueChange={onBeforeChange}
          className={clsx(
            'b-textfield__input',
            icon && 'b-textfield__input-icon',
            isFocused && 'b-textfield__input--focused'
          )}
          {...rest}
        />
        {icon && (
          <img
            src={icon}
            alt='Картинка'
            className='b-textfield__icon--custom'
          />
        )}
        {(!!text && !readOnly) &&
          <img
            alt='Очистить'
            src={cross}
            onClick={handleClear}
            className='b-textfield__icon'
          />
        }
      </div>
      {error && <ErrorLabel message={error} />}
    </>
  )
}

export default MaskedTextField
