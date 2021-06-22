import './styles.scss'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Modal from 'components/Modal'
import Button from 'components/Button'
import Loading from 'components/Spinner'
import TextField from 'components/TextField'

import logo from 'icons/logo.svg'

import axios from 'utils/axios'
import alerts from 'utils/alert'
import { useProfile } from 'utils/hooks/useContext'
import { VALIDATION_MESSAGES } from 'utils/constants'

const Login = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const { login } = useProfile()

  const handleSave = async () => {
    try {
      setLoading(true)

      const res = await axios.post('/auth', values)
      login(res.data)
    }
    catch {/* empty */ }
    finally {
      setLoading(false)
    }
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleChange = (name) => (value) => {
    setFieldValue(name, value)
  }

  const { values, touched, errors, setFieldValue, handleSubmit: onSubmit } = useFormik({
    onSubmit: (values) => handleSave(values),
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required(VALIDATION_MESSAGES.Required)
        .email(VALIDATION_MESSAGES.InvalidEmail),
      password: Yup.string().required(VALIDATION_MESSAGES.Required)
    })
  })

  return (
    <Loading loading={loading}>
      <div className='b-login'>
        <div className='b-login__circle b-login__circle--blue' />
        <div className='b-login__circle b-login__circle--white' />

        <div className='b-login__container'>
          <img
            alt='Мой Авто'
            src={logo}
            className='b-logo'
          />

          <form onSubmit={onSubmit}>
            <TextField
              name='email'
              label='Логин'
              value={values.email}
              error={touched.email && errors.email}
              variant='float'
              onChange={handleChange('email')}
              fullWidth={false}
            />

            <div className='b-spacer__4' />

            <TextField
              name='password'
              type='password'
              label='Пароль'
              value={values.password}
              error={touched.password && errors.password}
              variant='float'
              onChange={handleChange('password')}
              fullWidth={false}
            />

            <div className='b-spacer__5' />

            <Button type='submit' fullWidth>
              Войти
            </Button>

            <div className='b-login__forget'>
              <Button
                onClick={handleOpen}
                variant='outline'
                fullWidth
              >
                Забыли пароль?
              </Button>
            </div>
          </form>
        </div>

        <RecoveryModal
          open={isOpen}
          onClose={handleClose}
        />
      </div>
    </Loading>
  )
}

const RecoveryModal = (props) => {
  const { open, onClose } = props

  const [loading, setLoading] = useState(false)

  const handleSave = async (values) => {
    try {
      setLoading(true)

      await axios.post('/auth/recovery', values)
      alerts.success('Новый пароль отправлен на указанную почту')

      handleClose()
    }
    catch {/* empty */ }
    finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    onClose()
    resetForm()
  }

  const handleChange = (name) => (value) => {
    setFieldValue(name, value)
  }

  const { values, touched, errors, resetForm, setFieldValue, handleSubmit: onSubmit } = useFormik({
    onSubmit: (values) => handleSave(values),
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required(VALIDATION_MESSAGES.Required)
        .email(VALIDATION_MESSAGES.InvalidEmail)
    })
  })

  return (
    <Modal
      open={open}
      title='Восстановление пароля'
      loading={loading}
      onClose={handleClose}
      onSubmit={onSubmit}
      footer={
        <>
          <Button variant='text' onClick={handleClose}>
            Отмена
          </Button>
          <Button type='submit'>
            Отправить
          </Button>
        </>
      }
    >
      <TextField
        name='email'
        label='Email'
        value={values.email}
        error={touched.email && errors.email}
        variant='float'
        onChange={handleChange('email')}
      />
    </Modal>
  )
}

export default Login
