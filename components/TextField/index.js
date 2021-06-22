import './styles.scss'
import { useState, useEffect } from 'react'
import clsx from 'clsx'
import eyeOpen from 'icons/eye-open.svg'
import eyeClose from 'icons/eye-close.svg'
import cross from 'icons/delete.svg'
import search from 'icons/search.svg'
import { ErrorLabel } from 'components/Error'

export const TextField = (props) => {
  const { name, type = 'text', error, rows, label, value, onBlur, onChange, variant = 'static', readOnly, fullWidth = true, ...rest } = props

  const [text, setText] = useState('')
  const [visible, setVisible] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    setText(value)
  }, [value])

  const setBlur = () => {
    setIsFocused(false)
    if (onBlur) {
      onBlur()
    }
  }

  const setFocus = () => {
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

  const inputProps = {
    id: name,
    name: name,
    value: value,
    onBlur: setBlur,
    onFocus: setFocus,
    readOnly: readOnly,
    onChange: handleChange,
    className: clsx(
      'b-textfield__input',
      isFocused && 'b-textfield__input--focused'
    ),
    ...rest
  }

  return (
    <div>
      {!!label && variant === 'static' &&
        <label
          htmlFor={name}
          className='b-label'
        >
          {label}
        </label>
      }
      <div className={
        clsx(
          'b-textfield',
          variant === 'float' && 'b-textfield--float',
          variant === 'static' && 'b-textfield--static',
          error && 'b-textfield--error',
          fullWidth && 'b-textfield--fullwidth'
        )
      }>
        {type === 'textarea'
          ? <textarea rows={rows} {...inputProps} />
          : <input type={visible ? 'text' : type} {...inputProps} />
        }
        {variant === 'float' &&
          <label
            title={label}
            htmlFor={name}
            className={clsx(
              'b-textfield__label',
              (isFocused || !!text) && 'b-textfield__label--focused'
            )}
          >
            {label}
          </label>
        }

        {(!!text && !readOnly) &&
          <>
            {type === 'password' ?
              <img
                alt={visible ? 'Скрыть пароль' : 'Показать пароль'}
                src={visible ? eyeClose : eyeOpen}
                onClick={() => setVisible(!visible)}
                className='b-textfield__icon'
              />
              :
              <img
                className='b-textfield__icon'
                alt='Очистить'
                src={cross}
                onClick={handleClear}
              />
            }
          </>
        }
        {type === 'search' &&
          <img
            alt='Поиск'
            src={search}
            className='b-textfield__search'
          />
        }
      </div>
      {error &&
        <ErrorLabel message={error} />
      }
    </div>
  )
}

export default TextField;
