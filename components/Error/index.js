import { useMemo } from 'react'
import './styles.scss'

const Error = (props) => {
  const { error } = props

  const { fields, message } = error || {}

  const errors = useMemo(() => {
    if (fields) {
      return Object.keys(fields).map(key => {
        return <div key={key}>- {fields[key]}</div>
      })
    }
    return null
  }, [fields])

  return ((!message && !errors) ? null :
    <div className='b-error__container'>
      <b>
        {message}
      </b>
      {errors &&
        <div>
          <div className='b-spacer__2' />
          {errors}
        </div>
      }
    </div>
  )
}

export default Error

export const ErrorLabel = (props) => {
  const { message } = props

  return (
    <div className='b-error__label'>
      {message}
    </div>
  )
}
